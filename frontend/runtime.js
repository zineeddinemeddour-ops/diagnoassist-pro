/* Frontend-only state. No network calls, backend endpoints or payment services. */
(() => {
  'use strict';
  const prefix='diagnoassist-frontend-v3:';
  const memory=new Map();
  function read(storage,key){try{return storage.getItem(key);}catch{return memory.get(key)??null;}}
  function write(storage,key,value){try{storage.setItem(key,value);}catch{memory.set(key,value);}}
  function remove(storage,key){try{storage.removeItem(key);}catch{}memory.delete(key);}
  function stateKey(key){
    if(key==='diagUsers')return prefix+'accounts';
    let user=null;try{user=JSON.parse(read(sessionStorage,prefix+'session')||'null');}catch{}
    return prefix+(user?.username||'demo')+':'+key;
  }
  window.demoStorage={
    getItem(key){return key==='diagUser'?read(sessionStorage,prefix+'session'):read(localStorage,stateKey(key));},
    setItem(key,value){if(key==='diagUser')write(sessionStorage,prefix+'session',String(value));else write(localStorage,stateKey(key),String(value));},
    removeItem(key){if(key==='diagUser')remove(sessionStorage,prefix+'session');else remove(localStorage,stateKey(key));}
  };
  window.frontendReady=Promise.resolve();
  window.frontendLogout=()=>{window.demoStorage.removeItem('diagUser');location.href='login.html';};
  window.escapeHtml=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const map={'🏠':'home','🔬':'microscope','🩺':'stethoscope','💰':'coins','👤':'user','👥':'users','👨‍💼':'briefcase','💼':'briefcase','💾':'save','📈':'trend','📊':'chart','📋':'clipboard','📭':'inbox','🎯':'target','👁':'eye','🕘':'clock','🗓':'calendar','⚡':'bolt','🌧':'rain','🔍':'search','🧠':'brain','📝':'file','📄':'file','🤖':'bot','🔐':'lock','🔒':'lock','📁':'folder','💡':'light','💳':'card','🧾':'receipt','❤':'heart','🌱':'leaf','🏆':'award','🧪':'flask','⚙':'settings','🧮':'calculator','✅':'check','✓':'check','✔':'check','✕':'close','⚠':'warning','🔵':'circle','🟢':'circle','🟣':'circle','🔴':'circle','🟠':'circle','⭐':'award','🆕':'plus'};
  const regex=new RegExp('('+Object.keys(map).sort((a,b)=>b.length-a.length).join('|')+')(?:\\uFE0F)?','g');
  function icons(root){
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(node){if(node.parentElement?.closest('svg,script,style,textarea,input,option'))return NodeFilter.FILTER_REJECT;regex.lastIndex=0;return regex.test(node.data)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;}});
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    for(const node of nodes){
      const frag=document.createDocumentFragment();let cursor=0;regex.lastIndex=0;let m;
      while((m=regex.exec(node.data))){
        frag.append(node.data.slice(cursor,m.index));
        const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
        svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('class','icon');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
        const use=document.createElementNS('http://www.w3.org/2000/svg','use');use.setAttribute('href','icons.svg#'+map[m[1]]);svg.append(use);frag.append(svg);cursor=m.index+m[0].length;
      }
      frag.append(node.data.slice(cursor));node.replaceWith(frag);
    }
  }
  function ready(){
    const account=document.querySelector('.nav-actions .btn-purple');
    if(window.demoStorage.getItem('diagUser'))account?.classList.add('account-control');
    document.querySelectorAll('[data-scroll]').forEach(button=>button.addEventListener('click',()=>document.getElementById(button.dataset.scroll)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})));
    document.querySelectorAll('form[data-submit]').forEach(form=>{
      form.addEventListener('submit',event=>{event.preventDefault();document.getElementById(form.dataset.submit)?.click();});
      form.addEventListener('keydown',event=>{if(event.key==='Enter'&&event.target.matches('input')){event.preventDefault();document.getElementById(form.dataset.submit)?.click();}});
    });
    document.querySelectorAll('.suggest .chip').forEach(chip=>{
      chip.setAttribute('role','button');chip.tabIndex=0;
      chip.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();chip.click();}});
    });
    document.querySelectorAll('.auth-msg').forEach(msg=>{msg.setAttribute('role','status');msg.setAttribute('aria-live','polite');});
    icons(document.body);
    const observer=new MutationObserver(mutations=>{
      for(const m of mutations)for(const node of m.addedNodes){if(node.nodeType===Node.TEXT_NODE&&node.parentElement)icons(node.parentElement);else if(node.nodeType===Node.ELEMENT_NODE)icons(node);}
      document.querySelectorAll('.sel-opt,.pm-item').forEach(item=>{item.tabIndex=0;item.setAttribute('role','button');item.setAttribute('aria-pressed',String(item.classList.contains('sel')||item.classList.contains('active')));if(!item.dataset.keyboard){item.dataset.keyboard='true';item.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();item.click();}});}});
      document.querySelectorAll('.tq-scale button').forEach(button=>button.setAttribute('aria-pressed',String(button.classList.contains('sel'))));
    });
    observer.observe(document.body,{childList:true,subtree:true});
    document.addEventListener('click',event=>{
      const scale=event.target.closest('.tq-scale');
      if(scale)scale.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(button.classList.contains('sel'))));
    });
    document.querySelectorAll('.modal,.patients-modal').forEach(dialog=>{
      dialog.setAttribute('role','dialog');dialog.setAttribute('aria-modal','true');
      const title=dialog.querySelector('h2,h3,b');if(title){title.id ||= dialog.id+'Title';dialog.setAttribute('aria-labelledby',title.id);}
      let previous=null;
      new MutationObserver(()=>{
        if(dialog.classList.contains('show')){previous=document.activeElement;dialog.querySelector('button,[tabindex],input')?.focus();}
        else if(previous?.isConnected){previous.focus();previous=null;}
      }).observe(dialog,{attributes:true,attributeFilter:['class']});
      dialog.addEventListener('keydown',event=>{
        if(event.key==='Escape')dialog.classList.remove('show');
        if(event.key==='Tab'){
          const focusable=[...dialog.querySelectorAll('button,a[href],input,[tabindex="0"]')].filter(x=>!x.disabled&&x.offsetParent!==null);
          const first=focusable[0],last=focusable.at(-1);
          if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}
          else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
        }
      });
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready);else ready();
})();
