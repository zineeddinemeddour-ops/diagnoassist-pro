/* Progressive animation: content remains usable without JS or observers. */
(() => {
  'use strict';
  function ready(){
    const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer=window.matchMedia('(hover: hover) and (pointer: fine)');
    const toggle=document.getElementById('motionToggle');
    let paused=false;
    try{paused=localStorage.getItem('diagnoassist-motion-paused')==='true';}catch{}
    let observer=null;
    const reveal=node=>{node.classList.remove('motion-pending');node.classList.add('motion-in');observer?.unobserve(node);};
    function clearPending(){document.querySelectorAll('.motion-pending').forEach(reveal);}
    function setPreference(){
      document.documentElement.classList.toggle('reduced-motion',preference.matches);
      document.documentElement.classList.toggle('motion-paused',paused);
      if(toggle){
        toggle.disabled=preference.matches;
        toggle.setAttribute('aria-pressed',String(paused||preference.matches));
        const label=preference.matches?'الحركة مخفّضة حسب إعدادات الجهاز':paused?'تشغيل الحركة':'إيقاف الحركة';
        toggle.setAttribute('aria-label',label);toggle.title=label;
      }
      if(preference.matches||paused){clearPending();observer?.disconnect();document.querySelectorAll('.press-ripple').forEach(node=>node.remove());}
    }
    setPreference();
    preference.addEventListener?.('change',setPreference);
    toggle?.addEventListener('click',()=>{paused=!paused;try{localStorage.setItem('diagnoassist-motion-paused',String(paused));}catch{}setPreference();});
    const visibility=()=>document.documentElement.classList.toggle('tab-hidden',document.hidden);
    visibility();document.addEventListener('visibilitychange',visibility);
    if('IntersectionObserver' in window){
      const ambient=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('ambient-offscreen',!entry.isIntersecting)),{rootMargin:'40px'});
      document.querySelectorAll('.hero-visual,.icon-stage').forEach(node=>ambient.observe(node));
    }
    const questions=[...document.querySelectorAll('.mini-q')];
    questions.forEach(question=>question.addEventListener('toggle',()=>{if(question.open)questions.forEach(other=>{if(other!==question)other.open=false;});}));
    if(!preference.matches&&!paused&&'IntersectionObserver' in window){
      observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)reveal(entry.target);}),{threshold:.08,rootMargin:'0px 0px -24px 0px'});
      const targets=document.querySelectorAll('.step,.questions-section .app-card,.cta-box,.plan,.stat-card,.sum-card,.card-block,.auth-layout,.patient-card,.diag-box,.test-head');
      targets.forEach((node,index)=>{
        // Hide only offscreen targets after the observer is ready.
        if(node.getBoundingClientRect().top>=window.innerHeight){node.style.setProperty('--reveal-delay',`${Math.min(index%3*55,110)}ms`);node.classList.add('motion-pending');observer.observe(node);}
      });
      document.addEventListener('focusin',event=>{const pending=event.target.closest('.motion-pending');if(pending)reveal(pending);});
      window.addEventListener('beforeprint',clearPending);
      window.addEventListener('pageshow',()=>{document.querySelectorAll('.motion-pending').forEach(node=>{if(node.getBoundingClientRect().top<window.innerHeight)reveal(node);});});
    }
    const hero=document.querySelector('.hero-opening');
    const scene=document.querySelector('.hero-art-scene');
    if(hero&&scene){
      let frame=0,point=null;
      const reset=()=>{point=null;cancelAnimationFrame(frame);frame=0;scene.style.removeProperty('--scene-x');scene.style.removeProperty('--scene-y');};
      hero.addEventListener('pointermove',event=>{
        if(preference.matches||paused||!finePointer.matches)return;
        point={x:event.clientX,y:event.clientY};
        if(frame)return;
        frame=requestAnimationFrame(()=>{
          frame=0;if(!point)return;
          const box=hero.getBoundingClientRect();
          const x=Math.max(-1,Math.min(1,(point.x-box.left)/box.width*2-1));
          const y=Math.max(-1,Math.min(1,(point.y-box.top)/box.height*2-1));
          scene.style.setProperty('--scene-y',`${x*5}deg`);scene.style.setProperty('--scene-x',`${-y*3}deg`);
        });
      },{passive:true});
      hero.addEventListener('pointerleave',reset);
      preference.addEventListener?.('change',reset);
      finePointer.addEventListener?.('change',reset);
      toggle?.addEventListener('click',reset);
    }
    document.querySelectorAll('.step').forEach(card=>{
      let frame=0;
      card.addEventListener('pointermove',event=>{
        if(preference.matches||paused||!finePointer.matches||frame)return;
        const x=event.clientX,y=event.clientY;
        frame=requestAnimationFrame(()=>{frame=0;const box=card.getBoundingClientRect();card.style.setProperty('--card-x',`${x-box.left}px`);card.style.setProperty('--card-y',`${y-box.top}px`);});
      },{passive:true});
      card.addEventListener('pointerleave',()=>{cancelAnimationFrame(frame);frame=0;card.style.removeProperty('--card-x');card.style.removeProperty('--card-y');});
    });
    document.addEventListener('click',event=>{
      if(preference.matches||paused)return;
      const control=event.target.closest('.btn-purple,.btn-buy,.auth-btn,.btn-analyze,.btn-test,.btn-pay,.btn-save,.btn-save-file,.btn-white');
      if(!control||control.disabled||control.classList.contains('dim'))return;
      control.querySelector('.press-ripple')?.remove();
      const rect=control.getBoundingClientRect(),ripple=document.createElement('span');
      const x=event.detail?event.clientX-rect.left:rect.width/2,y=event.detail?event.clientY-rect.top:rect.height/2;
      ripple.className='press-ripple';ripple.setAttribute('aria-hidden','true');
      ripple.style.setProperty('--ripple-size',`${Math.max(rect.width,rect.height)*2}px`);
      ripple.style.setProperty('--ripple-x',`${x}px`);ripple.style.setProperty('--ripple-y',`${y}px`);
      control.append(ripple);ripple.addEventListener('animationend',()=>ripple.remove(),{once:true});
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready);else ready();
})();
