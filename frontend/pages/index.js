window.frontendReady.then(() => {

        (function () {
            const btn = document.querySelector('.nav-actions .btn-purple');
            if (!btn) return;
            const u = JSON.parse(demoStorage.getItem('diagUser') || 'null');
            if (u) {
                btn.innerHTML = (u.isAdmin ? '👨‍💼' : '👤') + ' ' + (u.isAdmin ? 'المدير' : escapeHtml(u.name));
                btn.style.background = '#e9f1ff';
                btn.style.color = '#2563eb';
                btn.style.border = '1.5px solid #2563eb';
                btn.onclick = () => {
                    if (confirm('هل تريد تسجيل الخروج من حسابك؟')) {
                        frontendLogout();
                    }
                };
            } else {
                btn.onclick = () => { location.href = 'login.html'; };
            }
        })();
    
});