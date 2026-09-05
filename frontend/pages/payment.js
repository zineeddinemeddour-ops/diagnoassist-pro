
        const payBtn = document.getElementById('payBtn');
        const successModal = document.getElementById('successModal');
        const receiptToast = document.getElementById('receiptToast');

        payBtn.addEventListener('click', () => {
            const num = document.getElementById('cardNum').value.replace(/\s/g, '');
            const name = document.getElementById('cardName').value.trim();
            const exp = document.getElementById('cardExp').value.trim();
            const cvv = document.getElementById('cardCvv').value.trim();

            if (num.length !== 16 || !name || exp.length < 4 || cvv.length !== 3) {
                alert('يرجى التحقق من صحة بيانات البطاقة');
                return;
            }
            successModal.classList.add('show');
        });

        document.getElementById('closeSuccess').addEventListener('click', () => {
            successModal.classList.remove('show');
            receiptToast.classList.add('show');
            setTimeout(() => {
                window.location.href = 'patient.html';
            }, 4000);
        });
    
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