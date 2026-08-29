window.backendReady.then(function () {
  const msg = document.getElementById("loginMsg");
  const button = document.getElementById("loginBtn");

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
    const identifier = document.getElementById("loginId").value.trim();
    const password = document.getElementById("loginPass").value.trim();
    if (!identifier || !password) {
      msg.className = "auth-msg err";
      msg.textContent = "يرجى إدخال اسم المستخدم/البريد وكلمة المرور.";
      return;
    }

    button.disabled = true;
    try {
      const users = JSON.parse(backendStorage.getItem("diagUsers") || "[]");
      if (!users.length) {
        msg.className = "auth-msg err";
        msg.textContent = "لا يوجد حساب مسجّل بعد على هذا الجهاز — أنشئ حسابًا جديدًا من الرابط أسفل البطاقة.";
        return;
      }
      const user = users.find(function (candidate) {
        return candidate.username.toLowerCase() === identifier.toLowerCase() || candidate.email.toLowerCase() === identifier.toLowerCase();
      });
      const valid = user && user.passwordHash && user.salt && await passwordHash(password, user.salt) === user.passwordHash;
      if (!valid) {
        msg.className = "auth-msg err";
        msg.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة. حاول مجددًا.";
        return;
      }
      const sessionUser = { name: user.name, email: user.email, username: user.username, specialty: user.specialty, state: user.state };
      backendStorage.setItem("diagUser", JSON.stringify(sessionUser));
      msg.className = "auth-msg ok";
      msg.textContent = "✓ مرحبًا بعودتك " + user.name + " — جارٍ فتح المنصة...";
      setTimeout(function () { window.location.href = "pricing.html"; }, 900);
    } finally {
      button.disabled = false;
    }
  });
});
