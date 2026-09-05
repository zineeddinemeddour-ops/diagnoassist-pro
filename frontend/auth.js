/* Browser-local demonstration only. Credentials never leave this browser. */
(() => {
  const login=document.getElementById('loginBtn');
  const register=document.getElementById('regBtn');
  const hex=bytes=>Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('');
  async function hash(password,salt){
    const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveBits']);
    return hex(new Uint8Array(await crypto.subtle.deriveBits({name:'PBKDF2',salt:new TextEncoder().encode(salt),iterations:310000,hash:'SHA-256'},key,256)));
  }
  const value=id=>document.getElementById(id).value;
  function accounts(){try{return JSON.parse(demoStorage.getItem('diagUsers')||'[]');}catch{return [];}}
  function saveSession(user){const {passwordHash,salt,...profile}=user;demoStorage.setItem('diagUser',JSON.stringify(profile));}
  function message(el,text,ok=false){el.className='auth-msg '+(ok?'ok':'err');el.textContent=text;}
  if(login)login.addEventListener('click',async()=>{
    const msg=document.getElementById('loginMsg'),identifier=value('loginId').trim().toLowerCase(),password=value('loginPass');
    if(!identifier||!password){message(msg,'يرجى إدخال اسم المستخدم/البريد وكلمة المرور.');return;}
    const users=accounts();
    if(!users.length){message(msg,'لا يوجد حساب مسجّل بعد على هذا الجهاز — أنشئ حسابًا جديدًا من الرابط أسفل البطاقة.');return;}
    login.disabled=true;
    try{
      const user=users.find(u=>u.username.toLowerCase()===identifier||u.email.toLowerCase()===identifier);
      if(!user||!user.salt||!user.passwordHash||await hash(password,user.salt)!==user.passwordHash){message(msg,'اسم المستخدم أو كلمة المرور غير صحيحة. حاول مجددًا.');return;}
      saveSession(user);message(msg,'✓ مرحبًا بعودتك '+user.name+' — جارٍ فتح المنصة...',true);
      setTimeout(()=>{location.href='pricing.html';},700);
    }catch{message(msg,'اسم المستخدم أو كلمة المرور غير صحيحة. حاول مجددًا.');}
    finally{login.disabled=false;}
  });
  if(register)register.addEventListener('click',async()=>{
    const msg=document.getElementById('regMsg'),name=value('regName').trim(),email=value('regEmail').trim(),username=value('regUsername').trim(),password=value('regPass'),password2=value('regPass2');
    if(!name||!email||!username||!password){message(msg,'يرجى ملء جميع الحقول الإلزامية (*).');return;}
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){message(msg,'صيغة البريد الإلكتروني غير صحيحة.');return;}
    if(username.length<3){message(msg,'اسم المستخدم يجب أن يكون 3 أحرف على الأقل.');return;}
    if(password.length<6){message(msg,'كلمة المرور يجب أن تكون 6 أحرف على الأقل.');return;}
    if(password!==password2){message(msg,'كلمتا المرور غير متطابقتين.');return;}
    const users=accounts();
    if(users.some(u=>u.username.toLowerCase()===username.toLowerCase())){message(msg,'اسم المستخدم محجوز مسبقًا — اختر اسمًا آخر.');return;}
    if(users.some(u=>u.email.toLowerCase()===email.toLowerCase())){message(msg,'هذا البريد الإلكتروني مسجّل مسبقًا.');return;}
    register.disabled=true;
    try{
      const salt=hex(crypto.getRandomValues(new Uint8Array(16)));
      const user={name,email,username,specialty:value('regSpecialty')||'أخرى',state:value('regState').trim(),salt,passwordHash:await hash(password,salt)};
      users.push(user);demoStorage.setItem('diagUsers',JSON.stringify(users));saveSession(user);
      message(msg,'✓ تم إنشاء الحساب بنجاح — مرحبًا بك '+name+'، جارٍ فتح المنصة...',true);setTimeout(()=>{location.href='pricing.html';},700);
    }catch{message(msg,'يرجى ملء جميع الحقول الإلزامية (*).');}
    finally{register.disabled=false;}
  });
})();
