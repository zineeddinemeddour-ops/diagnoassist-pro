window.backendReady.then(function () {
  const msg = document.getElementById("regMsg");
  const button = document.getElementById("regBtn");

  function showErr(text) {
    msg.className = "auth-msg err";
    msg.textContent = text;
  }

  function toHex(bytes) {
    return Array.from(bytes, function (byte) {
      return byte.toString(16).padStart(2, "0");
    }).join("");
  }

  async function passwordHash(password, salt) {
    const bytes = new TextEncoder().encode(salt + ":" + password);
    return toHex(new Uint8Array(await crypto.subtle.digest("SHA-256", bytes)));
  }

  button.addEventListener("click", async function () {
    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const username = document.getElementById("regUsername").value.trim();
    const password = document.getElementById("regPass").value;
    const password2 = document.getElementById("regPass2").value;
    const specialty = document.getElementById("regSpecialty").value;
    const state = document.getElementById("regState").value.trim();

    if (!name || !email || !username || !password) { showErr("يرجى ملء جميع الحقول الإلزامية (*)."); return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { showErr("صيغة البريد الإلكتروني غير صحيحة."); return; }
    if (username.length < 3) { showErr("اسم المستخدم يجب أن يكون 3 أحرف على الأقل."); return; }
    if (password.length < 6) { showErr("كلمة المرور يجب أن تكون 6 أحرف على الأقل."); return; }
    if (password !== password2) { showErr("كلمتا المرور غير متطابقتين."); return; }

    button.disabled = true;
    try {
      const users = JSON.parse(backendStorage.getItem("diagUsers") || "[]");
      if (users.some(function (user) { return user.username.toLowerCase() === username.toLowerCase(); })) {
        showErr("اسم المستخدم محجوز مسبقًا — اختر اسمًا آخر.");
        return;
      }
      if (users.some(function (user) { return user.email.toLowerCase() === email.toLowerCase(); })) {
        showErr("هذا البريد الإلكتروني مسجّل مسبقًا.");
        return;
      }

      const salt = toHex(crypto.getRandomValues(new Uint8Array(16)));
      const user = {
        name,
        email,
        username,
        specialty: specialty || "أخرى",
        state,
        salt,
        passwordHash: await passwordHash(password, salt),
      };
      users.push(user);
      backendStorage.setItem("diagUsers", JSON.stringify(users));
      backendStorage.setItem("diagUser", JSON.stringify({ name, email, username, specialty: user.specialty, state }));
      msg.className = "auth-msg ok";
      msg.textContent = "✓ تم إنشاء الحساب بنجاح — مرحبًا بك " + name + "، جارٍ فتح المنصة...";
      setTimeout(function () { window.location.href = "pricing.html"; }, 1100);
    } finally {
      button.disabled = false;
    }
  });
});
