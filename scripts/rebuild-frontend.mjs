import fs from 'node:fs';
import path from 'node:path';

// Dependency-free static compiler. The original pages remain the content source.
const root = path.resolve(import.meta.dirname, '..');
const out = path.join(root, 'frontend');
fs.mkdirSync(path.join(out, 'pages'), { recursive: true });
const pages = ['index', 'login', 'register', 'pricing', 'payment', 'patient', 'diagnosis', 'results', 'test', 'charts'];
const voids = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
const el = (tag, attrs = {}, children = []) => ({tag, attrs, children});
const text = value => ({text:value});
const cls = (n, name) => n.attrs?.class?.split(/\s+/).includes(name);
const walk = n => [n, ...(n.children || []).flatMap(walk)];
const find = (n, name) => walk(n).find(x => cls(x, name));
const findId = (n, id) => walk(n).find(x => x.attrs?.id === id);
const detach = (root, node) => { for (const n of walk(root)) if(n.children?.includes(node)) {n.children.splice(n.children.indexOf(node),1);break;} return node; };
const extract = (root, name) => detach(root, find(root, name));
const innerText = n => n?.text ?? (n?.children || []).map(innerText).join('');
const addClass = (n, v) => { n.attrs.class = [n.attrs.class, v].filter(Boolean).join(' '); return n; };
const attrEscape = s => String(s).replace(/"/g, '&quot;');
const serialize = n => n.text !== undefined ? n.text : n.tag === '#document' ? n.children.map(serialize).join('') : `<${n.tag}${Object.entries(n.attrs).map(([k,v])=>` ${k}="${attrEscape(v)}"`).join('')}>${voids.has(n.tag) ? '' : n.children.map(serialize).join('')+`</${n.tag}>`}`;

export function parse(html) {
  const doc=el('#document'), stack=[doc]; let pos=0;
  const token= /<!--[\s\S]*?-->|<![^>]*>|<\/?[a-zA-Z][^>]*>/g;
  let m;
  while ((m=token.exec(html))) {
    if(m.index>pos)stack.at(-1).children.push(text(html.slice(pos,m.index)));
    pos=token.lastIndex;
    if(m[0].startsWith('<!')) continue;
    const tag=m[0].match(/^<\/?([\w:-]+)/)[1].toLowerCase();
    if(m[0].startsWith('</')) { const idx=stack.findLastIndex(n=>n.tag===tag); if(idx>0)stack.length=idx; continue; }
    const attrs={}; const raw=m[0].replace(/^<[\w:-]+/,'').replace(/\/?\s*>$/,'');
    for(const a of raw.matchAll(/([^\s=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g))attrs[a[1]]=a[2]??a[3]??a[4]??'';
    const node=el(tag,attrs);stack.at(-1).children.push(node);
    if(tag==='script'||tag==='style') {
      const end=html.toLowerCase().indexOf(`</${tag}`,pos);
      node.children.push(text(html.slice(pos,end)));pos=html.indexOf('>',end)+1;token.lastIndex=pos;
    } else if(!voids.has(tag)&&!m[0].endsWith('/>'))stack.push(node);
  }
  if(pos<html.length)stack.at(-1).children.push(text(html.slice(pos)));
  return doc;
}

const iconMap = {
  '🏠':'home','🔬':'microscope','🩺':'stethoscope','💰':'coins','👤':'user','👥':'users','👨‍💼':'briefcase',
  '💼':'briefcase','💾':'save','📈':'trend','📊':'chart','📋':'clipboard','📭':'inbox','🎯':'target','👁':'eye',
  '🕘':'clock','🗓':'calendar','⚡':'bolt','🌧':'rain','🔍':'search','🧠':'brain','📝':'file','📄':'file','🤖':'bot',
  '🔐':'lock','🔒':'lock','📁':'folder','💡':'light','💳':'card','🧾':'receipt','❤':'heart','🌱':'leaf','🏆':'award',
  '🧪':'flask','⚙':'settings','🧮':'calculator','✅':'check','✓':'check','✔':'check','✕':'close','⚠':'warning',
  '🔵':'circle','🟢':'circle','🟣':'circle','🔴':'circle','🟠':'circle','⭐':'award','🆕':'plus',
};
const pattern=new RegExp('('+Object.keys(iconMap).sort((a,b)=>b.length-a.length).join('|')+')(?:\\uFE0F)?','g');
const icon=name=>el('svg',{class:'icon',viewBox:'0 0 24 24','aria-hidden':'true',focusable:'false'},[el('use',{href:`icons.svg#${name}`})]);
function convertIcons(n){
  if(!n.children||['script','style','textarea','svg'].includes(n.tag))return;
  n.children=n.children.flatMap(x=>{
    if(x.text===undefined){convertIcons(x);return [x];}
    const result=[];let pos=0;pattern.lastIndex=0;let m;
    while((m=pattern.exec(x.text))){if(m.index>pos)result.push(text(x.text.slice(pos,m.index)));result.push(icon(iconMap[m[1]]));pos=m.index+m[0].length;}
    if(pos<x.text.length)result.push(text(x.text.slice(pos)));
    return result;
  });
}
const contentWords = doc => walk(doc).filter(n=>n.text!==undefined).map(n=>n.text).join(' ').replace(pattern,' ').replace(/\uFE0F|[‹←→]/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').split(/\s+/).filter(Boolean).sort();
const audit=[];

for(const page of pages){
  const doc=parse(fs.readFileSync(path.join(root,'public',`${page}.html`),'utf8'));
  const head=walk(doc).find(n=>n.tag==='head');const body=walk(doc).find(n=>n.tag==='body');
  const scripts=walk(body).filter(n=>n.tag==='script');
  const code=scripts.filter(n=>!n.attrs.src).map(innerText).join('\n');
  scripts.forEach(n=>detach(body,n));
  const originalWords=contentWords(body);
  const nav=detach(body,walk(body).find(n=>n.tag==='nav'));
  const footer=detach(body,walk(body).find(n=>n.tag==='footer'));
  const crumb=extract(body,'crumb');
  for(const n of walk(body).filter(n=>cls(n,'bg-blob')))detach(body,n);
  const overlays=walk(body).filter(n=>['modal','patients-modal','analyzing-overlay','toast'].some(c=>cls(n,c)));
  overlays.forEach(n=>detach(body,n));
  head.children=head.children.filter(n=>n.tag==='meta'||n.tag==='title');
  head.children.push(el('link',{rel:'icon',type:'image/svg+xml',href:'brand.svg'}),el('link',{rel:'stylesheet',href:'design.css?v=20260905'}),el('script',{src:'runtime.js?v=20260905',defer:''}));
  if(page==='login'||page==='register')head.children.push(el('script',{src:'auth.js',defer:''}));
  head.children.push(el('script',{src:`pages/${page}.js?v=20260905`,defer:''}));
  body.attrs={'class': ['index','login','register','pricing'].includes(page)?`public-site page-${page}`:`workspace-site page-${page}`,'data-page':page};
  addClass(nav,'site-navigation');
  const brand=find(nav,'nav-brand');brand.attrs.href='index.html';
  const navLinks=find(nav,'nav-links');
  const destinations=['index.html','index.html#workflow','index.html#workflow','pricing.html'];
  navLinks.children.filter(n=>n.tag==='a').forEach((a,i)=>a.attrs.href=destinations[i]);
  for(const n of walk(doc)){
    if(n.tag==='img'&&n.attrs.src?.includes('logo-')){n.attrs.src='brand.svg';n.attrs.width='42';n.attrs.height='42';}
    if(n.tag==='a'&&n.attrs.href==='#'){
      const label=innerText(n).trim();
      const routes={'الأسعار':'pricing.html','كيف يعمل':'index.html#workflow','دليل الاستخدام':'index.html#workflow','مميزات المنصة':'index.html#workflow','الأسئلة الشائعة':'index.html#questions','من نحن':'index.html#intro'};
      if(routes[label])n.attrs.href=routes[label];
    }
    if(n.attrs?.style){
      // Retain inline behavior/state and proportional charts, not the old look.
      const keep=n.attrs.style.split(';').filter(s=>/^\s*(display|width|height|direction|text-align)\s*:/.test(s));
      if(keep.length)n.attrs.style=keep.join(';');else delete n.attrs.style;
    }
  }
  // These nodes were extracted before walking the source document.
  for(const n of [...walk(nav),...walk(footer)]){
    if(n.tag==='img'&&n.attrs.src?.includes('logo-'))n.attrs.src='brand.svg';
    if(n.tag==='a'&&n.attrs.href==='#'){
      const label=innerText(n).trim(); const routes={'الأسعار':'pricing.html','كيف يعمل':'index.html#workflow','دليل الاستخدام':'index.html#workflow','مميزات المنصة':'index.html#workflow','الأسئلة الشائعة':'index.html#questions','من نحن':'index.html#intro'};
      if(routes[label])n.attrs.href=routes[label];
    }
  }
  if(page==='index'){
    const hero=extract(body,'hero'),steps=extract(body,'steps'),cta=extract(body,'cta');
    const copy=hero.children.find(n=>n.tag==='div'&&!cls(n,'hero-side'));addClass(copy,'hero-copy');
    const trust=extract(copy,'hero-trust'),faq=extract(hero,'app-card'),psych=extract(hero,'hero-psych');
    const stepsTitle=extract(steps,'steps-title');const workflow=extract(steps,'steps-grid');
    // A centered editorial opening; the original workflow becomes a full-width
    // product rail. The FAQ moves to its own proper section below the workflow.
    const newHero=el('section',{class:'hero-opening',id:'intro'},[copy,trust]);
    const process=el('section',{class:'process-section',id:'workflow'},[stepsTitle,workflow]);
    const faqSection=el('section',{class:'questions-section',id:'questions'},[faq,psych]);
    find(copy,'badge').attrs.class='badge';
    const secondary=find(copy,'btn-outline');secondary.attrs['data-scroll']='workflow';
    for(const q of walk(faq).filter(n=>cls(n,'mini-q'))){
      const small=q.children.find(n=>n.tag==='small');detach(q,small);
      q.tag='details';q.attrs.open='';q.children=[el('summary',{},q.children),small];
    }
    body.children=[nav,el('main',{},[newHero,process,faqSection,cta]),footer];
  }else if(page==='login'||page==='register'){
    const wrap=extract(body,'auth-wrap'),card=extract(wrap,'auth-card');
    const artNodes=card.children.filter(n=>cls(n,'auth-ico')||n.tag==='h1'||cls(n,'sub'));
    artNodes.forEach(n=>detach(card,n));
    const fieldSurface=el('form',{class:'auth-fields',novalidate:'',onsubmit:'return false'},card.children);
    // Reuse the exact existing heading/subtitle in a separate branded panel.
    const headingPanel=el('section',{class:'auth-introduction'},artNodes);
    if(page==='register')fieldSurface.attrs['data-submit']='regBtn';else fieldSurface.attrs['data-submit']='loginBtn';
    body.children=[nav,el('main',{class:'auth-layout'},[headingPanel,fieldSurface]),footer];
  }else if(page==='pricing'){
    const pricing=extract(body,'pricing');
    body.children=[nav,el('main',{class:'public-content'},[crumb,pricing].filter(Boolean)),footer];
  }else{
    // Move existing navigation + breadcrumb labels into a persistent workspace
    // rail. No invented pages, menu labels, or feature copy.
    const actions=extract(nav,'nav-actions');
    if(crumb){
      crumb.attrs.class='workflow-navigation';
      crumb.children=crumb.children.filter(n=>!cls(n,'sep'));
      for(const n of crumb.children.filter(n=>n.tag==='a'||n.tag==='span')){
        if(n.tag==='span'){n.tag='a';n.attrs.href=`${page}.html`;n.attrs['aria-current']='page';}
        const label=innerText(n).trim(); const mapping={'الرئيسية':'home','الأسعار':'coins','الدفع':'card','ملف المريض':'users','التشخيص':'brain','النتيجة':'clipboard','الاختبار':'flask','الرسوم البيانية':'chart'};
        n.children.unshift(icon(mapping[label]||'file'));
      }
      nav.children.push(crumb);
    }
    nav.tag='aside';
    const content=body.children.filter(n=>n.tag);
    const title=content.flatMap(walk).find(n=>n.tag==='h1');
    const pageTitle=title ? detach(body,title):undefined;
    // Reuses, rather than duplicates, the existing page title in its toolbar.
    const toolbar=el('header',{class:'workspace-toolbar'},[pageTitle,actions].filter(Boolean));
    body.children=[nav,el('div',{class:'workspace-stage'},[toolbar,el('main',{class:'workspace-content'},content),footer]),...overlays];
    if(page==='patient'){
      const card=find(body,'patient-card');const head=extract(card,'patient-head');
      const form=find(card,'patient-body');
      const visitField=walk(form).find(n=>cls(n,'field')&&find(n,'visits'));
      if(visitField)detach(card,visitField);
      const actions=extract(card,'patient-actions'),note=extract(card,'note');
      card.children=[el('aside',{class:'patient-summary'},[head,visitField].filter(Boolean)),form,actions,note].filter(Boolean);
    }
    if(page==='diagnosis'){
      const wrap=find(body,'diag-wrap'),stats=extract(wrap,'stats'),box=extract(wrap,'diag-box');
      wrap.children.push(el('div',{class:'diagnosis-layout'},[box,stats]));
    }
    if(page==='charts'){
      const wrap=find(body,'chart-wrap');const cards=wrap.children.filter(n=>cls(n,'card-block'));
      cards.forEach(n=>detach(wrap,n));wrap.children.push(el('div',{class:'analytics-grid'},cards));
      const chart=findId(body,'lineSvg'),parent=walk(body).find(n=>n.children?.includes(chart));
      if(parent)parent.children.splice(parent.children.indexOf(chart),1,el('div',{class:'chart-plot',tabindex:'0','aria-label':'الرسوم البيانية'},[chart]));
    }
    if(page==='test'){
      const wrap=find(body,'test-wrap');const panel=extract(wrap,'res-panel');const questions=detach(wrap,findId(wrap,'questions'));
      const bar=extract(wrap,'t-footer');const save=detach(wrap,findId(wrap,'saveFileBtn'));
      wrap.children.push(el('div',{class:'assessment-layout'},[questions,el('aside',{class:'assessment-summary'},[panel,bar,save])]));
    }
  }
  if(!body.children.includes(overlays[0])&&!body.attrs.class.startsWith('workspace'))body.children.push(...overlays);
  let fieldNo=0;
  for(const n of walk(body).filter(n=>cls(n,'field'))){
    const label=walk(n).find(x=>x.tag==='label'),control=walk(n).find(x=>['input','select','textarea'].includes(x.tag));
    if(label&&control){control.attrs.id ||= `field-${++fieldNo}`;label.attrs.for=control.attrs.id;}
  }
  for(const n of walk(body).filter(n=>n.tag==='button'))n.attrs.type ||= 'button';
  for(const n of walk(body).filter(n=>['pmClose','mClose'].includes(n.attrs?.id)))n.attrs['aria-label']='إغلاق';
  for(const n of walk(body).filter(n=>['symptoms','notesArea'].includes(n.attrs?.id)))n.attrs['aria-label']=n.attrs.placeholder;
  convertIcons(body);
  const resultWords=contentWords(body);
  if(JSON.stringify(originalWords)!==JSON.stringify(resultWords)) {
    const counts=a=>a.reduce((m,x)=>(m[x]=(m[x]||0)+1,m),{});const a=counts(originalWords),b=counts(resultWords);
    throw new Error(`Content changed in ${page}: `+JSON.stringify([...new Set([...Object.keys(a),...Object.keys(b)])].filter(x=>a[x]!==b[x]).map(x=>[x,a[x],b[x]])));
  }
  audit.push({page:`${page}.html`,preservedWords:resultWords.length});
  let clientCode=code.replaceAll('backendStorage','demoStorage').replaceAll('window.backendReady','window.frontendReady').replaceAll('backendLogout','frontendLogout');
  // Escape untrusted names on existing string-templated account buttons.
  clientCode=clientCode.replaceAll("(u.isAdmin ? 'المدير' : u.name)","(u.isAdmin ? 'المدير' : escapeHtml(u.name))");
  // Keep local template values as text, including names in the patient chooser.
  if(page==='patient'){
    clientCode=clientCode.replace(/function renderModal\(\) \{[\s\S]*?(?=\n        ptRegistered)/,section=>section.replace(/p\.(name|age|sex|marital|fileNum)\b/g,'escapeHtml(p.$1)').replace("(p.tag || 'جلسة تشخيص')","escapeHtml(p.tag || 'جلسة تشخيص')"));
    clientCode=clientCode.replace("(p.visit || 'أول استشارة عبر منصة DIAGNO-ASSIST.')","escapeHtml(p.visit || 'أول استشارة عبر منصة DIAGNO-ASSIST.')");
    clientCode=clientCode.replace("banner.style.cssText = 'border-color:#2563eb; background:#e9f1ff; color:#2563eb; font-weight:700;';",'// The shared design system styles the new-patient banner.');
  }
  if(page==='results'){
    const mark='<svg class="icon selection-mark" viewBox="0 0 24 24" aria-hidden="true"><use href="icons.svg#check"></use></svg> ';
    clientCode=clientCode.replace("(o.sel ? '⭐ ' : '')",`(o.sel ? '${mark}' : '')`);
    clientCode=clientCode.replace("o.innerHTML = o.innerHTML.replace(/^⭐ /, '');","o.querySelector('.selection-mark')?.remove();");
    clientCode=clientCode.replace("opt.innerHTML = '⭐ ' + opt.innerHTML;",`opt.insertAdjacentHTML('afterbegin', '${mark}');`);
  }
  if(page==='charts'){
    clientCode=clientCode.replace("+ z.y2 +", "+ Math.min(z.y1, z.y2) +").replace("(z.y1 - z.y2)","Math.abs(z.y1 - z.y2)");
    clientCode=clientCode.replace("'</linearGradient></defs>' +", "'</linearGradient></defs>' + out +");
    clientCode=clientCode.replaceAll('stop-color="#2563eb"','stop-color="#087568"');
  }
  fs.writeFileSync(path.join(out,'pages',`${page}.js`),clientCode);
  fs.writeFileSync(path.join(out,`${page}.html`),'<!doctype html>\n'+serialize(doc).replace(/^\uFEFF/,''));
}
let icons=fs.readFileSync(path.join(root,'public','ui-icons.svg'),'utf8');
icons=icons.replace('</defs>','<symbol id="plus" viewBox="0 0 24 24"><path d="M12 4v16M4 12h16"/></symbol></defs>');
fs.writeFileSync(path.join(out,'icons.svg'),icons);
fs.copyFileSync(path.join(root,'public','psychologist.svg'),path.join(out,'psychologist.svg'));
fs.writeFileSync(path.join(out,'.nojekyll'),'');
fs.writeFileSync(path.join(out,'content-audit.json'),JSON.stringify(audit,null,2));
console.log(`Rebuilt ${pages.length} frontend-only pages. Original words preserved on every page.`);
