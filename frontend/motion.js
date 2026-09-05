/* Progressive animation: content remains usable without JS or observers. */
(() => {
  'use strict';
  function ready(){
    const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer=window.matchMedia('(hover: hover) and (pointer: fine)');
    let observer=null;
    const reveal=node=>{node.classList.remove('motion-pending');node.classList.add('motion-in');observer?.unobserve(node);};
    function clearPending(){document.querySelectorAll('.motion-pending').forEach(reveal);}
    function setPreference(){
      document.documentElement.classList.toggle('reduced-motion',preference.matches);
      if(preference.matches){clearPending();observer?.disconnect();document.querySelectorAll('.press-ripple').forEach(node=>node.remove());}
    }
    setPreference();
    preference.addEventListener?.('change',setPreference);
    if(!preference.matches&&'IntersectionObserver' in window){
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
        if(preference.matches||!finePointer.matches)return;
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
    }
    document.addEventListener('click',event=>{
      if(preference.matches)return;
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
