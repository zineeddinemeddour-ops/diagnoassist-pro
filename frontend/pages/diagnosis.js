window.frontendReady.then(() => {

        const area = document.getElementById('symptoms');
        const pill = document.getElementById('countPill');

        function normalize(t) {
            return (t || '').replace(/[\u064B-\u0652\u0670]/g, '');
        }

        function countSymptoms() {
            const text = area.value.trim();
            if (!text) { pill.textContent = '0 / 15 عرض'; pill.className = 'count-pill'; return; }
            const words = text.split(/[\s،,؛;\n]+/).filter(w => w.length > 0);
            const n = words.length;
            pill.textContent = n + ' / 15 عرض';
            pill.className = n >= 15 ? 'count-pill ok' : 'count-pill warn';
        }
        area.addEventListener('input', countSymptoms);

        const DISORDERS = [
            {
                id: 'ptsd',
                name: 'اضطراب ما بعد الصدمة (PTSD)',
                ico: '🧠',
                min: 6,
                groups: [
                    { label: 'استرجاع مؤلم', k: ['استرجاع', 'اجترار', 'ذكريات', 'تذكر', 'ذاكرة', 'ماضي', 'مراودة'] },
                    { label: 'كوابيس مزعجة', k: ['كابوس', 'كوابيس', 'أحلام مزعجة', 'أحلام مخيفة'] },
                    { label: 'ذكريات مفاجئة', k: ['ومضة', 'فلاش', 'ومضات', 'ذكريات مفاجئة'] },
                    { label: 'إعادة عيش الحدث', k: ['يعيش الحدث', 'يحدث الآن', 'إعادة عيش', 'يتكرر أمامه'] },
                    { label: 'ضيق عند المذكّرات', k: ['ضيق تنفس', 'خنقة', 'اختناق', 'مذكّر', 'مذكّرات', 'تذكير'] },
                    { label: 'تجنّب الأماكن', k: ['تجنب الأماكن', 'يبتعد', 'يهرب', 'تحاشى', 'يتفادى'] },
                    { label: 'تجنّب الأفكار', k: ['تجنب الأفكار', 'يكبت', 'تجنب', 'تفادي التفكير', 'الهروب من التفكير'] },
                    { label: 'صعوبة تذكر التفاصيل', k: ['نسيان تفاصيل', 'لا يتذكر', 'صعوبة تذكر', 'فجوات ذاكرة'] },
                    { label: 'أفكار سلبية', k: ['أفكار سلبية', 'تشاؤم', 'سوداوية', 'سلبي'] },
                    { label: 'لوم النفس أو الآخرين', k: ['لوم', 'يلوم', 'ذنب'] },
                    { label: 'فقدان الاهتمام', k: ['فقدان الاهتمام', 'اهتمام', 'متعة', 'لا يستمتع', 'أنشطة'] },
                    { label: 'غربة وانفصال', k: ['غربة', 'انفصال', 'عزلة', 'وحدة', 'منفصل'] },
                    { label: 'غياب المشاعر الإيجابية', k: ['مشاعر إيجابية', 'فرح', 'سعادة', 'مرح', 'حب'] },
                    { label: 'اضطراب النوم', k: ['أرق', 'نوم', 'سهر', 'استيقاظ ليلي'] },
                    { label: 'نوبات غضب', k: ['غضب', 'انفعال', 'عصبية', 'نوبات غضب'] },
                    { label: 'صعوبة التركيز', k: ['تركيز', 'تشتت', 'ذهن', 'انتباه'] },
                    { label: 'فرط اليقظة', k: ['يقظة', 'ترقب', 'حذر', 'مراقبة', 'خطر'] },
                    { label: 'استجابة جفل', k: ['جفل', 'انتفاض', 'يفزع', 'ينزعج', 'أصوات'] },
                    { label: 'سلوك متهور', k: ['اندفاعي', 'طائش', 'تهور', 'تدميري'] },
                    { label: 'خدر عاطفي', k: ['خدر', 'تجمد', 'لا يشعر', 'انفصال عاطفي'] },
                    { label: 'فقدان الأمل', k: ['أمل', 'مستقبل', 'يأس'] },
                    { label: 'حساسية للمثيرات', k: ['حساسية', 'منبهات', 'ضوضاء', 'إضاءة'] },
                    { label: 'خوف من تكرار الصدمة', k: ['خوف', 'تكرر', 'يتكرر', 'خشية', 'فزع'] },
                    { label: 'انسحاب اجتماعي', k: ['انسحاب', 'اجتماعي', 'مناسبات', 'تجمعات', 'أصدقاء'] }
                ]
            },
            {
                id: 'mdd',
                name: 'الاكتئاب الشديد (MDD)',
                ico: '🌧️',
                min: 5,
                groups: [
                    { label: 'مزاج منخفض', k: ['مزاج منخفض', 'حزن', 'يأس', 'فراغ', 'بكاء', 'دموع', 'كآبة', 'محبط', 'زعل'] },
                    { label: 'فقدان الاهتمام والمتعة', k: ['اهتمام', 'متعة', 'استمتاع', 'لا يهتم', 'ملل', 'انعدام', 'أنشطة'] },
                    { label: 'تغير الوزن أو الشهية', k: ['وزن', 'شهية', 'أكل', 'طعام', 'نحف', 'سمنة'] },
                    { label: 'أرق أو فرط نوم', k: ['أرق', 'نوم', 'سهر', 'فرط نوم', 'نعاس', 'نوام'] },
                    { label: 'هياج أو خمول حركي', k: ['هياج', 'خمول', 'بطء', 'تململ', 'كسل', 'حركي'] },
                    { label: 'تعب وفقدان الطاقة', k: ['تعب', 'طاقة', 'إرهاق', 'إجهاد', 'ضعف', 'فقدان الطاقة'] },
                    { label: 'انعدام القيمة أو الذنب', k: ['ذنب', 'قيمة', 'فاشل', 'عديم', 'مذنب', 'دونية', 'لوم'] },
                    { label: 'صعوبة التركيز أو الحسم', k: ['تركيز', 'قرار', 'حسم', 'تردد', 'تشتت', 'تفكير'] },
                    { label: 'أفكار الموت والانتحار', k: ['موت', 'انتحار', 'يموت', 'إنهاء', 'أفكار سوداء'] }
                ]
            }
        ];

        function analyze(text) {
            const norm = normalize(text);
            return DISORDERS.map(d => {
                const hits = [];
                d.groups.forEach((g, i) => {
                    if (g.k.some(kw => norm.includes(normalize(kw)))) hits.push(i);
                });
                return {
                    id: d.id, name: d.name, ico: d.ico,
                    matched: hits.length, total: d.groups.length,
                    pct: Math.round(hits.length / d.groups.length * 100),
                    min: d.min,
                    labels: hits.map(i => d.groups[i].label)
                };
            }).sort((a, b) => b.pct - a.pct);
        }

        const AP = JSON.parse(demoStorage.getItem('diagActivePatient') || 'null');
        const ptKey = base => AP ? base + '_' + AP.id : base;

        document.getElementById('analyzeBtn').addEventListener('click', () => {
            const text = area.value.trim();
            const words = text.split(/[\s،,؛;\n]+/).filter(w => w.length > 0);
            if (words.length < 15) {
                alert('يرجى إدخال ما لا يقل عن 15 عرضًا بمصطلحات نفسية قبل التحليل.');
                return;
            }

            const results = analyze(text);
            let winner = null;
            if (results[0] && results[0].matched >= results[0].min && results[0].pct >= 30) winner = results[0];
            else if (results[1] && results[1].matched >= results[1].min && results[1].pct >= 30) winner = results[1];
            const other = results.find(r => r.id !== (winner ? winner.id : null)) || null;

            demoStorage.setItem(ptKey('diagResult'), JSON.stringify({
                winner: winner,
                other: other,
                text: text,
                date: new Date().toLocaleString()
            }));

            const overlay = document.getElementById('analyzingOverlay');
            const stepLine = document.getElementById('stepLine');
            overlay.classList.add('show');
            document.body.style.overflow = 'hidden';

            const steps = [
                '1. فحص حضور الكلمات المفتاحية في الأعراض المدخلة...',
                '2. مطابقة الأعراض مع قاعدتي PTSD و MDD...',
                '3. اختيار الاضطراب الأعلى تطابقًا فقط...',
                '4. إعداد نتيجة التحليل النهائية...'
            ];
            let s = 0;
            const stepTimer = setInterval(() => {
                s = Math.min(s + 1, steps.length - 1);
                stepLine.textContent = steps[s];
            }, 2500);

            setTimeout(() => {
                clearInterval(stepTimer);
                window.location.href = 'results.html';
            }, 10000);
        });

        document.querySelectorAll('.suggest .chip').forEach(chip => {
            chip.addEventListener('click', () => {
                area.value += (area.value.trim() ? '، ' : '') + chip.textContent;
                countSymptoms();
            });
        });

        const DEMO_TEXTS = {
            ptsd: 'استرجاع متكرر ومؤلم للحدث الصادم دون رغبة، كوابيس مزعجة ومتكررة مرتبطة بالحدث، ذكريات مفاجئة تعيد إحياء الصدمة، شعور وكأن الحدث يحدث الآن مجددًا، ضيق نفسي شديد عند التعرض لأي مذكّر بالصدمة، تجنّب الأماكن أو الأشخاص المرتبطين بالحدث، تجنّب الأفكار والمشاعر المذكّرة بالصدمة، صعوبة في تذكر تفاصيل مهمة من الحدث، أفكار سلبية مستمرة عن الذات أو العالم، لوم النفس أو الآخرين على ما حدث، انخفاض الاهتمام بالأنشطة التي كانت ممتعة، الشعور بالانفصال والغربة عن الآخرين، عدم القدرة على الشعور بمشاعر إيجابية، اضطراب النوم وصعوبة الدخول أو الاستمرار فيه، نوبات غضب وتهيّج مفرط، صعوبة التركيز، فرط اليقظة والترقب الدائم للخطر، استجابة جفل مفرطة والانتفاض من الأصوات المفاجئة، سلوك متهور أو مدمر للذات، خدر عاطفي، فقدان الأمل ونظرة سلبية للمستقبل، الحساسية الزائدة للمثيرات البيئية، الخوف من تكرار الصدمة، الانسحاب الاجتماعي والعزلة',
            mdd: 'مزاج منخفض معظم اليوم كل يوم تقريبًا، انخفاض واضح في الاهتمام أو الاستمتاع في كل الأنشطة، فقدان وزن بارز أو زيادة مع انخفاض أو ارتفاع الشهية، أرق أو فرط نوم كل يوم تقريبًا، هياج نفسي حركي أو خمول، تعب أو فقدان الطاقة كل يوم تقريبًا، أحاسيس بانعدام القيمة أو شعور مفرط بالذنب، انخفاض القدرة على التفكير أو التركيز أو عدم الحسم، أفكار متكررة عن الموت أو تفكير انتحاري'
        };
        document.getElementById('demoPtsd').addEventListener('click', () => {
            area.value = DEMO_TEXTS.ptsd;
            countSymptoms();
            area.focus();
        });
        document.getElementById('demoMdd').addEventListener('click', () => {
            area.value = DEMO_TEXTS.mdd;
            countSymptoms();
            area.focus();
        });
    
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