window.frontendReady.then(() => {

        const DIFF = {
            ptsd: [
                { name: 'اضطراب الإجهاد الحاد (ASD)', pct: 72, text: 'نفس الأعراض لكن خلال شهر واحد فقط من التعرض للحدث الصادم.' },
                { name: 'اضطراب القلق العام (GAD)', pct: 64, text: 'تيقظ مبالغ فيه، قلق، صعوبة التركيز والنوم دون صدمة محددة.' },
                { name: 'اضطراب الهلع', pct: 46, text: 'تفاعلات فيزيولوجية حادة وسلوك تجنبي للمواقف المخيفة.' },
                { name: 'اضطراب الشخصية الحدّية (BPD)', pct: 38, text: 'انفصال عاطفي، غضب، تهور، تقلب المشاعر المستقر منذ الصغر.' },
                { name: 'اضطراب الوسواس القهري (OCD)', pct: 31, text: 'أفكار متطفلة متكررة ومستمرة دون رابط بحادث صادم.' }
            ],
            mdd: [
                { name: 'اضطراب ثنائي القطب (النوع الثاني)', pct: 62, text: 'نوبات اكتئاب متناوبة مع نوبات هوس خفيف (تحت هوس).' },
                { name: 'اضطراب الاكتئاب المستمر (الجزئي)', pct: 55, text: 'مزاج مكتئب مزمن لسنتين أو أكثر بأعراض أخف شدة.' },
                { name: 'اضطراب التكيف مع كآبة', pct: 48, text: 'كآبة لاحقة لضغط نفسي محدد، أقصر مدة وأقل شدة.' },
                { name: 'اضطراب القلق العام (GAD)', pct: 44, text: 'قلق وتوتر مترافق مع أعراض جسدية دون مزاج مكتئب سائد.' },
                { name: 'اكتئاب ناتج عن مادة أو حالة طبية', pct: 36, text: 'أعراض اكتئاب سببها مباشرةً تعاطي مادة أو مرض جسدي.' }
            ]
        };

        const AP = JSON.parse(demoStorage.getItem('diagActivePatient') || 'null');
        const ptKey = base => AP ? base + '_' + AP.id : base;

        const res = JSON.parse(demoStorage.getItem(ptKey('diagResult')) || 'null');

        const chartsLink = document.getElementById('chartsLink');
        const chartHint = document.getElementById('chartHint');
        if (demoStorage.getItem(ptKey('diagTestAnswered')) === '1') {
            chartsLink.classList.remove('dim');
            chartHint.style.display = 'none';
        } else {
            chartsLink.classList.add('dim');
            chartHint.style.display = 'block';
        }

        if (!res || !res.winner) {
            document.getElementById('noResult').style.display = 'block';
            document.getElementById('resContent').style.display = 'none';
        } else {
            const w = res.winner;
            document.getElementById('resDate').textContent = res.date || '';
            document.getElementById('mdPct').textContent = w.pct + '%';
            document.getElementById('mdName').textContent = w.ico + ' ' + w.name;
            document.getElementById('mdDesc').textContent =
                'تم اختيار هذا الاضطراب تلقائيًا لكونه الأعلى تطابقًا مع الكلمات المفتاحية المكتشفة في الأعراض المدخلة (' +
                w.matched + ' من أصل ' + w.total + ' مجموعة أعراض).';
            document.getElementById('mdBadge').textContent = '✅ الاضطراب المختار — تجاوز العتبة المطلوبة (' + w.min + ' مجموعات)';

            document.getElementById('wName').textContent = w.name;
            document.getElementById('wPct').textContent = w.pct + '%';
            document.getElementById('wBar').style.width = w.pct + '%';
            document.getElementById('wText').textContent =
                'حضور ' + w.matched + ' مجموعات أعراض من أصل ' + w.total + ' — التطابق ' + w.pct + '% حسب الكلمات المفتاحية.';
            document.getElementById('wKw').innerHTML =
                (w.labels || []).map(l => '<span class="kw-chip">✓ ' + l + '</span>').join('');

            const diffList = document.getElementById('diffList');
            const diffs = DIFF[res.winner.id] || [];
            diffList.innerHTML =
                '<h3 class="diff-head">🔬 التشخيص الفارقي: اضطرابات مشابهة لـ "' + w.name + '" (مرتبة تنازليًا — دون خلط مع الاضطراب الآخر)</h3>' +
                diffs.map((d, i) =>
                    '<div class="diff-item">' +
                    '<div class="d-top">' +
                    '<span class="d-name"><span class="rank">' + (i + 1) + '</span>' + d.name + '</span>' +
                    '<span class="d-per">' + d.pct + '%</span>' +
                    '</div>' +
                    '<div class="d-bar"><i style="animation-duration:1.1s; width:' + d.pct + '%"></i></div>' +
                    '<div class="d-text">' + d.text + '</div>' +
                    '</div>'
                ).join('') ||
                '<div class="diff-item"><div class="d-text">لا توجد قائمة فارقية محفوظة لهذا الاضطراب.</div></div>';

            if (res.other) {
                document.getElementById('otherNote').innerHTML =
                    'لم يُختر الاضطراب الآخر (<b>' + res.other.name + '</b>) لأنه الأقل تطابقًا: <b>' +
                    res.other.pct + '%</b> (' + res.other.matched + ' / ' + res.other.total + ' مجموعات).';
            } else {
                document.getElementById('otherNote').textContent = 'الاضطراب الآخر لم يبلغ عتبة التطابق المطلوبة.';
            }

            const selList = document.getElementById('selList');
            const opts = [];
            if (res.winner) opts.push({ id: res.winner.id, name: res.winner.name, sel: true });
            (DIFF[res.winner.id] || []).forEach(d => {
                opts.push({ id: 'diff', name: d.name, sel: false });
            });
            selList.innerHTML = opts.map(o =>
                '<div class="sel-opt' + (o.sel ? ' sel' : '') + '" data-id="' + o.id + '">' +
                (o.sel ? '<svg class="icon selection-mark" viewBox="0 0 24 24" aria-hidden="true"><use href="icons.svg#check"></use></svg> ' : '') + o.name + '</div>'
            ).join('');
            const testLink = document.getElementById('testLink');
            selList.querySelectorAll('.sel-opt').forEach(opt => {
                opt.addEventListener('click', () => {
                    selList.querySelectorAll('.sel-opt').forEach(o => {
                        o.classList.remove('sel');
                        o.querySelector('.selection-mark')?.remove();
                    });
                    opt.classList.add('sel');
                    opt.insertAdjacentHTML('afterbegin', '<svg class="icon selection-mark" viewBox="0 0 24 24" aria-hidden="true"><use href="icons.svg#check"></use></svg> ');
                    testLink.classList.remove('dim');
                });
            });
            testLink.addEventListener('click', e => {
                const sel = selList.querySelector('.sel-opt.sel');
                if (!sel || sel.dataset.id === 'diff') {
                    e.preventDefault();
                    alert('لا يوجد اختبار مطبّق لهذا الاضطراب على المنصة حاليًا — اختر أحد الاضطرابين الأساسيين (اضطراب ما بعد الصدمة أو الاكتئاب MDD).');
                    return;
                }
                demoStorage.setItem(ptKey('chosenTest'), sel.dataset.id);
            });
        }
    
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