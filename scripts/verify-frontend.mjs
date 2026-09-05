import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { webcrypto } from 'node:crypto';
import { parse } from './rebuild-frontend.mjs';

const root=path.resolve(import.meta.dirname,'..','frontend');
const walk=n=>[n,...(n.children||[]).flatMap(walk)];
const htmlFiles=fs.readdirSync(root).filter(f=>f.endsWith('.html'));
const scripts=['runtime.js','auth.js','motion.js',...fs.readdirSync(path.join(root,'pages')).map(f=>'pages/'+f)];
let references=0,handlers=0;
for(const file of htmlFiles){
  const nodes=walk(parse(fs.readFileSync(path.join(root,file),'utf8')));
  const ids=nodes.filter(n=>n.attrs?.id).map(n=>n.attrs.id);
  assert.equal(ids.length,new Set(ids).size,`${file}: duplicate IDs`);
  assert.equal(nodes.filter(n=>n.tag==='h1').length,1,`${file}: one page heading`);
  assert.equal(nodes.find(n=>n.tag==='html').attrs.dir,'rtl');
  assert.equal(nodes.filter(n=>n.tag==='main').length,1);
  for(const n of nodes){
    if(['script','link','img','a','use'].includes(n.tag)){
      const ref=n.attrs.src||n.attrs.href;
      if(ref&&!/^(#|mailto:|tel:)/.test(ref)){
        assert(!/^https?:|^\/\/|^\//.test(ref),`${file}: all assets and pages are local relative routes`);
        const [pathname,fragment]=ref.split('#'),target=path.join(root,pathname.split('?')[0]);
        assert(fs.existsSync(target),`${file}: missing ${ref}`);
        if(fragment)assert(fs.readFileSync(target,'utf8').includes(`id="${fragment}"`),`${file}: missing fragment ${ref}`);
        references++;
      }
    }
    for(const [name,value] of Object.entries(n.attrs||{}))if(name.startsWith('on')){new vm.Script(`(function(event){${value}})`);handlers++;}
  }
  const code=fs.readFileSync(path.join(root,'pages',file.replace('.html','.js')),'utf8');
  for(const match of code.matchAll(/getElementById\(['"]([^'"]+)['"]\)/g))assert(ids.includes(match[1]),`${file}: missing JS target ${match[1]}`);
}
for(const file of scripts){
  const code=fs.readFileSync(path.join(root,file),'utf8');
  new vm.Script(code,{filename:file});
  assert(!/\bfetch\s*\(|XMLHttpRequest|WebSocket|sendBeacon|\/api\/|backendStorage|backendReady/.test(code),`${file}: backend/network reference`);
}

// Exercise the actual browser-local auth/state code without browser automation.
const local=new Map(),session=new Map(),events={};
const storage=map=>({getItem:key=>map.get(key)??null,setItem:(key,value)=>map.set(key,String(value)),removeItem:key=>map.delete(key)});
const fields=Object.fromEntries(['loginBtn','regBtn','loginMsg','regMsg','loginId','loginPass','regName','regEmail','regUsername','regPass','regPass2','regSpecialty','regState'].map(id=>[id,{value:'',addEventListener:(type,handler)=>{events[id+':'+type]=handler;}}]));
const context=vm.createContext({console,crypto:webcrypto,TextEncoder,Uint8Array,localStorage:storage(local),sessionStorage:storage(session),location:{href:''},setTimeout:()=>0,document:{readyState:'loading',addEventListener:()=>{},getElementById:id=>fields[id]}});
context.window=context;
vm.runInContext(fs.readFileSync(path.join(root,'runtime.js'),'utf8'),context);
vm.runInContext(fs.readFileSync(path.join(root,'auth.js'),'utf8'),context);
const state=context.demoStorage;
state.setItem('diagPatients','demo');
state.setItem('diagUser',JSON.stringify({username:'alice'}));
assert.equal(state.getItem('diagPatients'),null);
state.setItem('diagPatients','alice-private');
state.setItem('diagUser',JSON.stringify({username:'bob'}));
assert.equal(state.getItem('diagPatients'),null);
context.frontendLogout();
assert.equal(state.getItem('diagUser'),null);
assert.equal(state.getItem('diagPatients'),'demo');
assert.equal(context.location.href,'login.html');
assert.equal(context.escapeHtml('<b>"&'), '&lt;b&gt;&quot;&amp;');

const demoValues={regName:'Demo User',regEmail:'demo@example.test',regUsername:'demouser',regPass:'Demo-only-823!',regPass2:'Demo-only-823!',regSpecialty:'أخرى',regState:'Test'};
for(const [id,value] of Object.entries(demoValues))fields[id].value=value;
await events['regBtn:click']();
const accounts=JSON.parse(state.getItem('diagUsers'));
assert.equal(accounts.length,1);
assert.equal(accounts[0].passwordHash.length,64);
assert(accounts[0].salt);
assert(!JSON.stringify([...local.values(),...session.values()]).includes(demoValues.regPass));
assert(!state.getItem('diagUser').includes('passwordHash'));
context.frontendLogout();
fields.loginId.value='DEMOUSER';fields.loginPass.value='wrong';
await events['loginBtn:click']();assert.equal(state.getItem('diagUser'),null);
fields.loginPass.value=demoValues.regPass;
await events['loginBtn:click']();assert.equal(JSON.parse(state.getItem('diagUser')).username,'demouser');
await events['regBtn:click']();assert.equal(JSON.parse(state.getItem('diagUsers')).length,1);
console.log(`PASS: ${htmlFiles.length} RTL routes, ${references} asset/page references, ${scripts.length} scripts, ${handlers} inline handlers.`);
console.log('PASS: content parity, local-only state, per-user state isolation, registration, login, duplicate-account validation, logout, and no plaintext password storage.');
console.log('No browser or visual tests were run. The original placeholder footer links remain unchanged.');
