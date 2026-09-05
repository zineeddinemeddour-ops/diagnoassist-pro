window.frontendReady.then(() => {

        const DEFAULT_PATIENTS = [
            {
                name: 'محمد عبد الله', phone: '0550 12 34 56', birth: '15/03/1998', age: '28 سنة',
                sex: 'ذكر', marital: 'أعزب', edu: 'جامعي', job: 'معلم', address: 'الجزائر العاصمة، الجزائر',
                email: 'mohamed.eljems@gmail.com', fileNum: 'PT-2026-0135', tag: 'اضطراب ما بعد الصدمة',
                reason: 'تعرض لصدمة نفسية مؤخرًا، ويعاني من مشاعر وذكريات متعلقة بها كالقلق الشديد والاسترجاع المتكرر للموقف الصادم، مع صعوبة في النوم والتركيز.',
                notes: 'لا تاريخ سابق للأمراض النفسية — أول استشارة على المنصة. يُلاحظ تجنب المواقف المذكّرة بالحادث، وتراجع الاهتمام بالأنشطة اليومية منذ ثلاثة أسابيع.',
                visit: 'حضر المريض في الموعد وبدا متعاونًا. تم بناء علاقة تواصل أولية وشرح آلية المنصة، ووافق على المتابعة الأسبوعية.'
            },
            {
                name: 'أسماء بن علي', phone: '0661 98 45 32', birth: '22/09/2002', age: '24 سنة',
                sex: 'أنثى', marital: 'عزباء', edu: 'جامعي', job: 'طالبة', address: 'وهران، الجزائر',
                email: 'asma.benali@gmail.com', fileNum: 'PT-2026-0136', tag: 'اكتئاب (MDD)',
                reason: 'أعراض اكتئابية: حزن مستمر، فقدان المتعة، انسحاب اجتماعي، وتدهور في الأداء الدراسي منذ عدة أشهر.',
                notes: 'بكاء متكرر واضطرابات نوم وشهية. رفضت الفكرة الانتحارية لكنها تعبّرت عن يأس. يُنصح بجلسات دعم نفسي ومتابعة أسبوعية.',
                visit: 'أبدت المريضة تعاونًا رغم انخفاض الطاقة. تم الاستماع العميق ووضع خطة دعم أولية بجلسات أسبوعية.'
            },
            {
                name: 'خالد مرابط', phone: '0770 44 21 09', birth: '03/05/1991', age: '35 سنة',
                sex: 'ذكر', marital: 'متزوج', edu: 'متوسط', job: 'سائق', address: 'قسنطينة، الجزائر',
                email: 'khalid.merabet@gmail.com', fileNum: 'PT-2026-0137', tag: 'قلق عام (GAD)',
                reason: 'قلق مفرط ومستمر حول العمل والعائلة، مع توتر عضلي وأرق واضطراب في التركيز.',
                notes: 'يشكو من قلق يومي منذ أكثر من سنة دون سبب محدد. تملكه شكوك متكررة حول صحته. يُنصح بفحص سريري وتقنيات استرخاء.',
                visit: 'بدا المريض متوترًا وعصبيًا. تم شرح تقنيات التنفس العميق ووضع خطة لمواجهة الأفكار المقلقة.'
            },
            {
                name: 'فاطمة الزهراء حمداني', phone: '0555 77 66 11', birth: '10/11/1985', age: '41 سنة',
                sex: 'أنثى', marital: 'متزوجة', edu: 'ابتدائي', job: 'ربة بيت', address: 'سطيف، الجزائر',
                email: 'fatima.hamdani@gmail.com', fileNum: 'PT-2026-0138', tag: 'نوبات هلع',
                reason: 'نوبات هلع متكررة مع خفقان وضيق تنفس وشعور بفقدان السيطرة، تظهر فجأة دون مثير واضح.',
                notes: 'أول نوبة قبل سنة أثناء مناسبة عائلية. تتجنب الأماكن المزدحمة خوفًا من تكرار النوبة. يُنصح بجلسات علاج معرفي سلوكي.',
                visit: 'وصفت المريضة تفاصيل نوباتها بدقة. تم طمأنتها وشرح آلية النوبة الفسيولوجية وبدء تسجيل المذكّرات اليومية.'
            },
            {
                name: 'يوسف بوقرة', phone: '0699 30 88 77', birth: '14/02/2007', age: '19 سنة',
                sex: 'ذكر', marital: 'أعزب', edu: 'ثانوي', job: 'طالب', address: 'البليدة، الجزائر',
                email: 'youssef.boukerra@gmail.com', fileNum: 'PT-2026-0139', tag: 'اضطراب ما بعد الصدمة',
                reason: 'حالة خوف واسترجاع مستمر بعد تعرضه لحادث مروري، مع نوبات فزع ليلية وصعوبة في العودة إلى الدراسة.',
                notes: 'يستيقظ مذعورًا عدة مرات في الأسبوع. يرفض ركوب السيارات منذ الحادث. يُنصح ببروتوكول علاجي متخصص للصدمة.',
                visit: 'أبدى المريض ترددًا في بداية الجلسة ثم فتح عن الحادث. تم بناء الثقة وتحديد أهداف علاجية قصيرة المدى.'
            },
            {
                name: 'نادية شريف', phone: '0771 55 44 33', birth: '27/08/1993', age: '33 سنة',
                sex: 'أنثى', marital: 'مطلقة', edu: 'جامعي', job: 'محاسبة', address: 'عنابة، الجزائر',
                email: 'nadia.cheraif@gmail.com', fileNum: 'PT-2026-0140', tag: 'اكتئاب (MDD)',
                reason: 'شعور بالحزن والفراغ بعد الطلاق، مع خمول، صعوبة في التركيز، وتقلبات في الوزن والشهية.',
                notes: 'أفكار سلبية عن الذات وتردد في اتخاذ القرارات. لا أفكار انتحارية حالية. يُنصح بمتابعة دوائية استشارية وجلسات دعم.',
                visit: 'عبّرت المريضة عن مشاعرها بحرية. تم تفريغ الانفعالات وتحديد شبكة دعم اجتماعي قريبة منها.'
            }
        ];

        const PKEY = 'diagPatients';
        const ACTIVE_KEY = 'diagActivePatient';
        const SLOTS = 5;

        function seedPatients() {
            const existing = JSON.parse(demoStorage.getItem(PKEY) || 'null');
            if (existing && existing.length) return existing;
            const seeded = DEFAULT_PATIENTS.map((p, i) => ({ id: 'p' + (i + 1), ...p }));
            demoStorage.setItem(PKEY, JSON.stringify(seeded));
            return seeded;
        }
        let patients = seedPatients();
        let active = JSON.parse(demoStorage.getItem(ACTIVE_KEY) || 'null');
        const ptKey = base => active ? base + '_' + active.id : base;

        const ptRegistered = document.getElementById('ptRegistered');
        const ptNew = document.getElementById('ptNew');
        const pmModal = document.getElementById('patientsModal');
        const pmList = document.getElementById('pmList');
        const pmClose = document.getElementById('pmClose');
        const activeChip = document.getElementById('activeChip');

        function todayStr() {
            const d = new Date();
            return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
        }
        function card() { return document.querySelector('.patient-card'); }
        function setActive(btn) {
            ptRegistered.classList.toggle('active', btn === ptRegistered);
            ptNew.classList.toggle('active', btn === ptNew);
        }
        function setActivePatient(idOrNull) {
            active = idOrNull ? patients.find(p => p.id === idOrNull) || null : null;
            if (active) demoStorage.setItem(ACTIVE_KEY, JSON.stringify(active));
            else demoStorage.removeItem(ACTIVE_KEY);
            if (activeChip) activeChip.textContent = active
                ? ('المريض النشط: ' + active.name + ' (' + active.fileNum + ')')
                : 'أدخل بيانات المريض لبدء أول جلسة تشخيص';
        }
        function collectForm() {
            const c = card();
            const inputs = c.querySelectorAll('input');
            const selects = c.querySelectorAll('select');
            const areas = c.querySelectorAll('textarea');
            return {
                name: inputs[0].value.trim(), phone: inputs[1].value.trim(), birth: inputs[2].value.trim(),
                age: inputs[3].value.trim(), sex: selects[0].value, marital: selects[1].value, edu: selects[2].value,
                job: inputs[4].value.trim(), address: inputs[5].value.trim(), email: inputs[6].value.trim(),
                reason: areas[0].value.trim(), notes: areas[1].value.trim()
            };
        }
        function clearForm() {
            const c = card();
            c.querySelectorAll('input').forEach(i => i.value = '');
            c.querySelectorAll('textarea').forEach(t => t.value = '');
            c.querySelectorAll('select').forEach(s => s.selectedIndex = 0);
        }
        function setOption(select, value) {
            for (let i = 0; i < select.options.length; i++) {
                if (select.options[i].value === value || select.options[i].textContent === value) {
                    select.selectedIndex = i;
                    return;
                }
            }
        }
        function fillForm(p) {
            const c = card();
            const inputs = c.querySelectorAll('input');
            const selects = c.querySelectorAll('select');
            const areas = c.querySelectorAll('textarea');
            const vals = [p.name, p.phone, p.birth, p.age, p.job, p.address, p.email];
            inputs.forEach((i, idx) => { if (vals[idx] !== undefined) i.value = vals[idx]; });
            setOption(selects[0], p.sex);
            setOption(selects[1], p.marital);
            setOption(selects[2], p.edu);
            if (areas[0]) areas[0].value = p.reason || '';
            if (areas[1]) areas[1].value = p.notes || '';
            c.querySelector('.p-name').textContent = p.name || 'مريض جديد';
            c.querySelector('.p-sub').textContent = 'ملف مريض — قابل للتعديل دائمًا';
            c.querySelector('.file-num').textContent = p.fileNum ? ('ملف رقم: ' + p.fileNum) : '📄 —';
            const visits = c.querySelector('.visits');
            if (visits) {
                visits.innerHTML = '<div class="visit"><span class="v-date">' + todayStr() + '</span>' +
                    '<div class="v-body"><b>الزيارة الأولى</b><p>' + escapeHtml(p.visit || 'أول استشارة عبر منصة DIAGNO-ASSIST.') + '</p></div></div>';
            }
            const prev = c.querySelector('.new-banner');
            if (prev) prev.remove();
        }
        function openNewPatient() {
            setActivePatient(null);
            clearForm();
            const c = card();
            const prev = c.querySelector('.new-banner');
            if (prev) prev.remove();
            const banner = document.createElement('div');
            banner.className = 'note new-banner';
            // The shared design system styles the new-patient banner.
            banner.textContent = '🆕 ملف مريض جديد — املأ البيانات ثم اضغط "💾 حفظ في قائمة المرضى".';
            c.querySelector('.patient-body').prepend(banner);
            c.querySelector('.p-name').textContent = 'مريض جديد';
            c.querySelector('.p-sub').textContent = 'ملف جديد — غير محفوظ بعد';
            c.querySelector('.file-num').textContent = '📄 —';
            setActive(ptNew);
        }
        function ensureSaved() {
            const data = collectForm();
            if (!data.name) throw 'أدخل اسم المريض أولًا قبل الحفظ.';
            if (active && active.id) {
                Object.assign(active, data);
                if (!active.visit) active.visit = 'أول استشارة عبر منصة DIAGNO-ASSIST.';
                const i = patients.findIndex(p => p.id === active.id);
                patients[i] = active;
                demoStorage.setItem(PKEY, JSON.stringify(patients));
                setActivePatient(active.id);
                return active;
            }
            const id = 'p' + (patients.length + 1);
            const maxN = patients.reduce((m, p) => Math.max(m, parseInt(String(p.fileNum || '').replace(/[^\d]/g, '') || 0)), 135);
            const np = { id: id, ...data, fileNum: 'PT-2026-' + String(maxN + 1).padStart(4, '0'), tag: 'جلسة تشخيص', visit: 'أول استشارة عبر منصة DIAGNO-ASSIST.' };
            patients.push(np);
            demoStorage.setItem(PKEY, JSON.stringify(patients));
            fillForm(np);
            setActivePatient(id);
            renderModal();
            return np;
        }
        function hasData(p) {
            const k = base => p ? base + '_' + p.id : base;
            return demoStorage.getItem(k('diagTestAnswered')) === '1' ||
                JSON.parse(demoStorage.getItem(k('diagSessionsV2')) || 'null') !== null ||
                JSON.parse(demoStorage.getItem(k('diagSessionsMddV2')) || 'null') !== null;
        }
        function renderModal() {
            pmList.innerHTML = '';
            patients.forEach(p => {
                const div = document.createElement('div');
                div.className = 'pm-item' + (active && active.id === p.id ? ' active' : '');
                div.dataset.id = p.id;
                div.innerHTML = '<div class="pm-name">' + escapeHtml(p.name) + '</div>' +
                    '<div class="pm-meta">' + escapeHtml(p.age) + ' • ' + escapeHtml(p.sex) + ' • ' + escapeHtml(p.marital) + '<br>ملف: ' + escapeHtml(p.fileNum) + '</div>' +
                    '<span class="pm-tag">' + escapeHtml(p.tag || 'جلسة تشخيص') + '</span>' +
                    (hasData(p) ? '<br><span class="pm-tag" style="background:#e6faf4;color:#15803d;">📁 اختبار + رسوم</span>' : '');
                pmList.appendChild(div);
            });
            for (let i = 0; i < SLOTS; i++) {
                const div = document.createElement('div');
                div.className = 'pm-item slot';
                div.dataset.slot = i;
                div.innerHTML = '<span class="plus">＋</span><span class="slot-txt">خانة شاغرة — مريض جديد</span>';
                pmList.appendChild(div);
            }
        }

        ptRegistered.addEventListener('click', () => {
            setActive(ptRegistered);
            location.reload();
        });
        ptNew.addEventListener('click', openNewPatient);

        function openPatientsList() {
            renderModal();
            pmModal.classList.add('show');
        }
        document.getElementById('patientsListBtn').addEventListener('click', openPatientsList);
        document.getElementById('patientsListBtn2').addEventListener('click', openPatientsList);
        pmClose.addEventListener('click', () => pmModal.classList.remove('show'));
        pmModal.addEventListener('click', e => {
            if (e.target === pmModal) pmModal.classList.remove('show');
        });
        pmList.addEventListener('click', e => {
            const item = e.target.closest('.pm-item');
            if (!item) return;
            if (item.dataset.id) {
                const p = patients.find(x => x.id === item.dataset.id);
                if (p) { fillForm(p); setActivePatient(p.id); setActive(ptRegistered); }
            } else if (item.dataset.slot !== undefined) {
                openNewPatient();
            }
            pmModal.classList.remove('show');
        });

        document.getElementById('savePatientBtn').addEventListener('click', () => {
            try {
                const p = ensureSaved();
                alert('✓ تم حفظ الملف — ملف رقم: ' + p.fileNum + ' — وهو الآن الملف النشط.');
            } catch (e) { alert(e); }
        });
        document.getElementById('startDiagBtn').addEventListener('click', () => {
            try { ensureSaved(); } catch (e) { alert(e); return; }
            location.href = 'diagnosis.html';
        });

        if (active && patients.some(p => p.id === active.id)) {
            fillForm(active);
            setActive(ptRegistered);
        }
        setActivePatient(active && active.id ? active.id : null);

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