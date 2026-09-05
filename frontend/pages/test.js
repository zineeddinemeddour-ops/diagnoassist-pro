window.frontendReady.then(() => {

        const ITEMS_PTSD = [
            'تتقحّم ذاكرتي تفاصيل الحدث الصادم دون رغبة مني',
            'تباغتني مشاعر العجز التي عشتها أثناء الصدمة وكأنها تحدث الآن',
            'أشعر بأنني أعيد معايشة الحدث الصادم من جديد',
            'تتكرر مراودة الذكريات عن الحدث الصادم دون إرادتي',
            'أجد صعوبة في إخراج تفاصيل الحدث الصادم من رأسي',
            'تداهمني نوبات من الخوف المفاجئ دون سبب واضح منذ وقوع الصدمة',
            'تراودني كوابيس تتعلق بالحادث الذي تعرضت له',
            'تعيد لي الكوابيس مشاعر مرتبطة بالصدمة',
            'تجتاحني تقلبات مزاجية حادة لا أستطيع السيطرة عليها',
            'عندما تهاجمني ذكرى الصدمة يختل إدراكي للوقت أو المكان للحظات',
            'أشعر أن ذكريات الصدمة تلاحقني حتى في لحظات الاسترخاء أو قبل النوم مباشرة',
            'أشعر فجأة وكأنني أرى الحدث الصدمي الآن بكامل تفاصيله',
            'أشعر بالذعر لمجرد التفكير في أنني قد أجبر على التحدث عما حدث لي',
            'أتحاشى مشاهدة الأخبار أو البرامج التي قد تثير ذكريات الصدمة',
            'أحاول تفادي الأفكار المزعجة التي تذكرني بالحدث',
            'أقوم بجهد كبير لإشغال نفسي بالعمل أو أي نشاط للهرب من التفكير',
            'أتهرب بصرامة من المحادثات أو النقاشات التي قد تفتح سيرة الصدمة',
            'أغير طريقي أو أتجنب الأماكن الجغرافية التي وقعت فيها الصدمة',
            'أتجنب الأشخاص الذين يذكرونني بالحدث الصادم',
            'أبذل جهدًا واعيًا لتجنب التفكير في أي شيء يخص الحدث الصادم',
            'أرفض الحديث عن تفاصيل تجربتي الصادمة للآخرين',
            'أهملت أشياء أو هوايات كنت أحبها لمجرد أنها باتت مرتبطة في ذهني بذكريات الصدمة',
            'أبتعد عن الأنشطة التي قد تتقاطع مع تفاصيل صدمتي',
            'أكتم مشاعري الداخلية بجهد كبير لكي أتجنب الشعور بالألم المرتبط بالحدث',
            'فقدت القدرة على الشعور بالاستمتاع تجاه الأنشطة التي كنت أستمتع بها قبل الحادثة',
            'أشعر بالذنب تجاه ما حدث',
            'ينتابني شعور باليأس تجاه المستقبل',
            'منذ الحادث الصادم أشعر بالعجز عن التخطيط للمستقبل',
            'منذ الحادث أصبحت أشعر بالغربة عن الآخرين',
            'يسيطر عليّ شعور دائم بالترقب وكأن شيئًا ما سيحدث',
            'أصبحت عاجزًا عن التعبير عن مشاعري تجاه المقربين مني',
            'أشعر بعدم الارتياح عند رؤية صورة أو شخص مرتبط بالحدث الصادم',
            'منذ الحادث أجد صعوبة في اتخاذ القرارات البسيطة بوضوح',
            'يتشتت ذهني دومًا لفترة طويلة منذ الحادثة',
            'أشعر بالذنب تجاه نجاتي من الحادث',
            'عجزت عن تذكر أجزاء أو تفاصيل مهمة جدًا من الحدث الصادم',
            'ألوم نفسي بقسوة على عدم قدرتي على منع الحادث',
            'تسيطر عليّ مشاعر سلبية كالخوف والرعب والغضب أو الخزي والندم',
            'فقدت القدرة على عيش المشاعر الإيجابية كالحب والفرح أو الرضا التام',
            'ينتابني ضيق نفسي شديد إذا مررت بموقف أو سمعت كلمة تذكرني بما حدث',
            'يستجيب جسدي بعنف (تسارع نبضات، تعرق، ضيق تنفس) عند التعرض لأي مذكّر بالصدمة',
            'أعيش في حالة تأهب قصوى وترقب دائم للمخاطر كأنني مهدد في كل لحظة',
            'أعاني من تشتت ذهني حاد وصعوبة بالغة في التركيز على دراستي أو عملي منذ الحادث',
            'أنفجر غضبًا بشكل مفاجئ دون مبرر كاف',
            'أشعر برغبة قوية لإيذاء الآخرين جسديًا أو ضرب الأشياء من حولي',
            'أفزع وأنتفض بعنف من الأصوات المفاجئة أو الحركات غير المتوقعة',
            'أقوم بتصرفات طائشة أو تدميرية لذاتي منذ الحادث الصدمي',
            'أشعر بتململ حركي مستمر وعجز تام عن الجلوس بهدوء أو الاسترخاء',
            'أبدي سلوكيات عدوانية (لفظية أو جسدية) دون مبرر كاف',
            'أعاني من تشتت ذهني حاد وصعوبة بالغة في التركيز على دراستي أو عملي منذ الحادث',
            'أجد صعوبة شديدة في الدخول في النوم أو الاستمرار فيه بشكل مريح',
            'أستيقظ مذعورًا في منتصف الليل مع تسارع في ضربات القلب وضيق في الصدر',
            'أصبحت سريع الاستثارة والانزعاج من المثيرات البيئية حولي (كالإضاءة أو الضوضاء)',
            'يراودني قلق مزمن حيال سلامتي الشخصية وسلامة من أحبهم بشكل مبالغ فيه',
            'أشعر بضغط نفسي جسدي (كغصة في الحلق أو ثقل في الصدر) نتيجة كبت الانفعالات الحادة',
            'أشعر أنني أصبحت سريع الانفعال على أتفه الأمور بدون سبب واضح',
            'عندما تجتاحني مشاعر قوية، أعجز عن تهدئة نفسي أو استعادة توازني',
            'أمر بتقلبات مزاجية سريعة جدًا دون أسباب واضحة لمن حولي',
            'أعيش حالة من الخدر العاطفي الطويل حيث لا أشعر بأي شيء على الإطلاق',
            'تخرج انفعالاتي عن السيطرة بشكل يجعلني أشعر بالرعب من نفسي ومن ردود أفعالي',
            'منذ الحادث، ألجأ لسلوكيات اندفاعية خطرة لكي أهرب من مشاعري عندما أشعر بالحزن أو الضغط',
            'تمنعني حدة مشاعري من التفكير بعقلانية واتخاذ القرارات السليمة',
            'صرت أبكي بحرقة حادة في مواقف قد يراها الآخرون عادية أو بسيطة، منذ الحادث الصادم',
            'أصبحت أواجه صعوبة بالغة في التعبير عما بداخلي من مشاعر',
            'أتهجم على الآخرين بالكلام الجارح كوسيلة للتنفيس عن غضبي',
            'ينتابني إحساس بأنني قنبلة قد تنفجر انفعالياً في أي لحظة',
            'أشعر أن حياتي قد انتهت فعليًا بعد ذلك الحدث الصادم',
            'أعتقد أنني كنت السبب وراء ما حدث بشكل أو بآخر',
            'يرافقني شعور بأنني إنسان محطم من الداخل لا يمكن إصلاحي',
            'يتملكني إحساس بالعار من نفسي بسبب ما مررت به',
            'أرى نفسي أقل قيمة من أي شخص أتعامل معه',
            'أشعر أنني تحولت إلى عبء ثقيل على كاهل المحيطين بي وعائلتي',
            'أجد صعوبة بالغة في مسامحة نفسي على أي خطأ',
            'أشعر أن شخصيتي الحقيقية قد تلاشت وضاعت بعد الصدمة',
            'يسيطر عليّ شعور بأنني لا أستحق السعادة أو النجاح أو الحب من الآخرين',
            'أشعر أنني ضحية',
            'أشعر بالعجز عن حماية نفسي أو السيطرة على مجريات حياتي',
            'أشعر بالدونية حتى عندما يمدحني الآخرون',
            'يتملكني يقين داخلي بأنني شخص غير مرغوب فيه',
            'تشكلت لدي قناعة سلبية وثابتة بأنني شخص سيء',
            'منذ الحادث، صرت أحس أنني غير كافٍ',
            'أجد صعوبة في بناء علاقات مقربة أو حميمية مع أشخاص جدد في حياتي',
            'أحافظ على مسافة وجدانية وعزلة عن الآخرين حماية لنفسي من التعرض للأذى',
            'يسيطر عليّ شك من نوايا الآخرين حتى عندما يظهرون لي اللطف',
            'أعجز عن الشعور بالأمان الوجداني داخل علاقاتي العاطفية أو الأسرية الحالية',
            'أجد صعوبة في الجلوس أو الاقتراب من أو الاندماج مع الآخرين',
            'أصبحت أفضل العزلة عن البشر على عناء التعامل معهم',
            'أنسحب من العلاقة بمجرد أن أشعر أنها أصبحت قريبة أو جادة',
            'أشعر بالخوف من أن الأشخاص الذين أحبهم سيهجرونني أو يتخلون عني',
            'أشعر بنفور إذا حاول شخص ما التقرب مني أو إظهار التعاطف معي',
            'صرت أجد نفسي أدخل في علاقات غير صحية أو مؤذية',
            'أشعر أن الآخرين عاجزون عن فهم عمق المعاناة التي عشتها',
            'صرت أنسحب من المناسبات الاجتماعية',
            'فقدت الثقة في الأشخاص منذ الحادث الصادم'
        ];

        const ITEMS_MDD = [
            'شعرت بمسحة من الحزن تخيم على يومي دون وجود سبب واضح',
            'فقدت الاستمتاع بالأنشطة التي كنت أمارسها سابقًا',
            'شعرت بفراغ داخلي يصعب عليّ تفسيره',
            'شعرت برغبة متكررة في البكاء',
            'لاحظت أن مزاجي يكون في أسوأ حالاته صباحًا عند الاستيقاظ',
            'يتحسن مزاجي تدريجيًا خلال اليوم بعد أن كان سيئًا في أوله',
            'لم تعد الهوايات التي أحبها تمنحني المتعة',
            'شعرت بأن قدرتي على الإحساس بالمشاعر قد تراجعت',
            'لم تعد الأنباء السارة أو المناسبات السعيدة تحرك مشاعري',
            'اختفت لديّ مشاعر البهجة',
            'شعرت بالجفاء من الأشخاص المقربين مني (كالعائلة أو الأصدقاء)',
            'شعرت بالبرود العاطفي تجاه الأشخاص المقربين',
            'حدث أن أردت البكاء دون أن أستطيع فعل ذلك',
            'انتابني إحساس بالمرارة وكأن كل ما حولي في الحياة قد فقد قيمته',
            'شعرت بضيق جعلني سريع الانفعال من أقل الكلمات أو المواقف',
            'عجزت عن التفاعل انفعاليًا مع محيطي',
            'شعرت بأنني منفصل عن الآخرين حتى عندما أكون بينهم',
            'عجزت عن الحفاظ على تركيزي أثناء القراءة، أو مشاهدة التلفاز، أو متابعة نقاش بسيط',
            'سيطرت عليّ فكرة أن الفشل هو حليفي الحتمي في أي عمل أو خطوة قد أقدم عليها',
            'تملكني اعتقاد راسخ بأنني عبء ثقيل على عائلتي وعلى كل من حولي',
            'واجهت صعوبة في استدعاء المعلومات أو تذكر المواعيد والالتزامات اليومية الروتينية',
            'انتابتني أفكار تلح عليّ بأن الموت قد يكون راحة لي من هذه المعاناة المستمرة',
            'أعتقد بأن عقلي مشوش أو أقل كفاءة',
            'أحس وكأن عملياتي العقلية أصبحت أبطأ',
            'شعرت بالتردد الشديد في اتخاذ القرارات اليومية البسيطة (مثل اختيار ملابسي أو طعامي)',
            'سيطر عليّ التشاؤم تجاه مستقبلي',
            'تملكني اعتقاد بأنني شخص عديم الجدوى',
            'أفكر كثيرًا في الماضي',
            'أعتقد أن الموت أحسن من الحياة',
            'أعتقد بأن وجودي لا يترك أثرًا ذا قيمة',
            'أرى بأن حياتي تفتقد إلى هدف واضح',
            'راودتني أفكار بإنهاء حياتي',
            'أفسر الأخطاء الصغيرة على أنها دليل على فشلي',
            'عانيت من صعوبة شديدة في الدخول في النوم رغم شعوري بالتعب',
            'استيقظت في منتصف الليل أو في الصباح الباكر وعجزت عن العودة للنوم مجددًا',
            'نمت لساعات طويلة ومع ذلك استيقظت وأنا أشعر بالخمول',
            'فقدت رغبتي في تناول الطعام',
            'شعرت بشراهة غير معتادة للأكل',
            'نقص وزني أو زاد وزني بشكل واضح',
            'شعرت بإنهاك جسدي وفقدان مطلق للطاقة رغم أنني لم أبذل مجهودًا كبيرًا',
            'عانيت من آلام أو أوجاع جسدية متفرقة (كصداع أو آلام ظهر) ليس لها تفسير طبي واضح',
            'شعرت بثقل شديد وصعوبة في تحريك أطرافي (يداي وقدمي)',
            'لاحظت تراجعًا في الرغبة الجنسية مقارنة بمستواي المعتاد',
            'شعرت باضطرابات في جهازي الهضمي (كالغثيان أو الإمساك المستمر)',
            'أبقى في فراشي لوقت طويل',
            'أبديت ردود فعل جامدة تجاه المواقف التي كانت تستدعي مني استجابة سلوكية سريعة',
            'أصبحت أؤجل كل المهام والمسؤوليات إلى أن تتراكم عليّ',
            'أدائي أو إنتاجيتي في تراجع بشكل ملحوظ',
            'تهاونت في مظهري الخارجي (اللبس، التنسيق...)',
            'أهملت نظافتي الشخصية بشكل غير معتاد بالنسبة لي',
            'استجاباتي بطيئة',
            'انسحبت من التفاعلات الاجتماعية',
            'تجنبت الرد على الاتصالات أو لقاء الأصدقاء',
            'وجدت نفسي أقوم بحركات لا إرادية',
            'انحصر نشاطي الحركي في مساحة محدودة (كالبقاء في غرفة واحدة) لمعظم اليوم',
            'لاحظت أنا أو المقربون مني أن نبرة صوتي أصبحت خالية من التعابير الانفعالية',
            'عجزت عن اتخاذ المبادرة لبدء أي نشاط جديد',
            'أتكاسل عن أداء المهام الروتينية الأساسية (مثل إعداد الطعام أو ترتيب المكان...)',
            'لاحظت كثرة تنهدي أو زفيري بشكل غير معتاد',
            'أجد صعوبة في مغادرة المنزل حتى عندما يكون ذلك ضروريًا',
            'أجلت الرد على الرسائل أو المكالمات رغم أهميتها',
            'قضيت وقتًا طويلاً دون القيام بأي نشاط ذي معنى'
        ];

        const TESTS = {
            ptsd: {
                id: 'ptsd',
                name: 'مقياس الطلبة لاضطراب ما بعد الصدمة',
                items: ITEMS_PTSD,
                fillMid: 240,
                fillHigh: 300,
                sessionKey: 'diagSessionsV2',
                seedFixed: [[1, '01/07/2026', 112], [2, '12/07/2026', 158], [3, '19/07/2026', 224], [4, '26/07/2026', 271]],
                seedDefault: 271
            },
            mdd: {
                id: 'mdd',
                name: 'مقياس الاكتئاب (MDD)',
                items: ITEMS_MDD,
                fillMid: 155,
                fillHigh: 200,
                sessionKey: 'diagSessionsMddV2',
                seedFixed: [[1, '01/07/2026', 78], [2, '12/07/2026', 96], [3, '19/07/2026', 132], [4, '26/07/2026', 160]],
                seedDefault: 160
            }
        };

        const AP = JSON.parse(demoStorage.getItem('diagActivePatient') || 'null');
        const ptKey = base => AP ? base + '_' + AP.id : base;

        const chosenId = demoStorage.getItem(ptKey('chosenTest')) === 'mdd' ? 'mdd' : 'ptsd';
        const T = TESTS[chosenId];
        const ITEMS = T.items;
        const MAX_SCORE = ITEMS.length * 4;
        const MID_START = Math.ceil(MAX_SCORE / 2) + 1;
        const HIGH_START = Math.ceil(MAX_SCORE * 0.75) + 1;
        document.getElementById('testName').textContent = T.name + (AP ? ' — ملف: ' + AP.name : '');
        document.getElementById('rpMax').textContent = 'من ' + MAX_SCORE;
        document.getElementById('questCount').textContent = '0 / ' + ITEMS.length;

        const REVERSE = [];

        const OPTS = [
            { v: 0, label: 'لم يحدث أبدًا', tip: 'لم يحدث أبدًا خلال الشهر الماضي' },
            { v: 1, label: 'أيام قليلة فقط', tip: 'حدثت لأيام قليلة فقط (أقل من أسبوع)' },
            { v: 2, label: 'نصف الأيام', tip: 'حدثت في نصف الأيام (أسبوع إلى أسبوعين)' },
            { v: 3, label: 'يوميًا تقريبًا', tip: 'يحدث يوميًا تقريبًا أو معظم أيام الشهر' }
        ];

        const questionsBox = document.getElementById('questions');
        const emptyNote = document.getElementById('emptyNote');
        const questCount = document.getElementById('questCount');
        const calcBtn = document.getElementById('calcBtn');
        const resPanel = document.getElementById('resPanel');

        function scoreOf(btn, qNo) {
            const idx = parseInt(btn.dataset.v);
            return REVERSE.includes(qNo) ? idx + 1 : 4 - idx;
        }

        function updateProgress() {
            const answered = questionsBox.querySelectorAll('button.sel').length;
            questCount.textContent = answered + ' / ' + ITEMS.length;
            questCount.classList.toggle('done', answered === ITEMS.length);
        }

        function buildQuestions() {
            questionsBox.innerHTML = '';
            if (ITEMS.length === 0) {
                emptyNote.style.display = 'block';
                questCount.textContent = '0 / 0';
                return;
            }
            emptyNote.style.display = 'none';
            ITEMS.forEach((text, idx) => {
                const q = document.createElement('div');
                q.className = 't-q';
                q.dataset.no = idx + 1;
                let btns = '';
                OPTS.forEach(o => {
                    btns += '<button data-v="' + o.v + '" title="' + o.tip + '">' + o.label + '</button>';
                });
                q.innerHTML = '<div class="tq-text">' + (idx + 1) + '. ' + text + '</div>' +
                    '<div class="tq-scale">' + btns + '</div>';
                questionsBox.appendChild(q);
            });
            questionsBox.querySelectorAll('.tq-scale').forEach(scale => {
                scale.querySelectorAll('button').forEach(btn => {
                    btn.addEventListener('click', () => {
                        scale.querySelectorAll('button').forEach(b => b.classList.remove('sel'));
                        btn.classList.add('sel');
                        updateProgress();
                    });
                });
            });
            updateProgress();
        }
        buildQuestions();

        calcBtn.addEventListener('click', () => {
            if (ITEMS.length === 0) {
                alert('لم تُضف عبارات المقياس بعد.');
                return;
            }
            let total = 0;
            let answered = 0;
            questionsBox.querySelectorAll('.t-q').forEach(q => {
                const sel = q.querySelector('button.sel');
                if (sel) { total += scoreOf(sel, parseInt(q.dataset.no)); answered++; }
            });
            if (answered < ITEMS.length) {
                alert('يرجى الإجابة على جميع العبارات قبل الحساب (' + answered + ' / ' + ITEMS.length + ').');
                return;
            }
            const maxScore = MAX_SCORE;
            const avg = (total / answered).toFixed(2);
            const pct = Math.round((total / maxScore) * 100);
            let cls, state, desc;
            if (total >= HIGH_START) {
                cls = 'rp-high'; state = 'النتيجة: مرتفعة 🟢';
                desc = 'الدرجة مرتفعة — أعراض ' + (chosenId === 'mdd' ? 'الاكتئاب' : 'اضطراب ما بعد الصدمة') + ' لدى المريض قليلة، ويعيش توازنًا نفسيًا جيدًا مقارنة بمعايير المقياس.';
            } else if (total >= MID_START) {
                cls = 'rp-mid'; state = 'النتيجة: متوسطة 🟠';
                desc = 'الدرجة متوسطة — توجد بعض الأعراض، يُنصح بالمتابعة والرصد في الجلسات القادمة.';
            } else {
                cls = 'rp-low'; state = 'النتيجة: ضعيفة 🔴';
                desc = 'الدرجة ضعيفة — الأعراض مرتفعة جدًا، يُنصح بتقييم سريري معمّق وبروتوكول علاجي متخصص.';
            }
            document.getElementById('rpCircle').className = 'rp-circle ' + cls;
            document.getElementById('rpTotal').textContent = total;
            document.getElementById('rpState').textContent = state;
            document.getElementById('rpDesc').textContent = desc;
            document.getElementById('rpAnswered').textContent = answered + ' / ' + ITEMS.length;
            document.getElementById('rpAvg').textContent = avg + ' / 4';
            document.getElementById('rpPct').textContent = pct + '%';
            resPanel.classList.add('show');
            resPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });

            const answerList = [];
            questionsBox.querySelectorAll('.t-q').forEach(q => {
                const sel = q.querySelector('button.sel');
                const idx = parseInt(sel.dataset.v);
                answerList.push({
                    no: parseInt(q.dataset.no),
                    text: q.querySelector('.tq-text').textContent.replace(/^\d+\.\s*/, ''),
                    label: OPTS[idx].label,
                    score: scoreOf(sel, parseInt(q.dataset.no))
                });
            });
            const today = new Date();
            const dateStr = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
            window.__curSession = {
                number: 0,
                date: dateStr,
                total: total,
                max: maxScore,
                avg: parseFloat(avg),
                pct: pct,
                state: total >= HIGH_START ? 'مرتفعة' : total >= MID_START ? 'متوسطة' : 'ضعيفة',
                answers: answerList
            };
            saveFileBtn.style.display = 'block';
            saveFileBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });

        const FILL_CODE = '0912';
        function fillTo(total, label) {
            const code = prompt('أدخل الرمز الخاص للتعبئة التلقائية:');
            if (code !== FILL_CODE) {
                alert('رمز غير صحيح — لن تُملأ الإجابات.');
                return;
            }
            const extra = total - ITEMS.length;
            const scores = new Array(ITEMS.length).fill(1);
            for (let i = 0; i < extra; i++) scores[(i * 37) % ITEMS.length]++;
            questionsBox.querySelectorAll('.t-q').forEach((q, idx) => {
                const score = scores[idx] || 1;
                const btn = q.querySelector('button[data-v="' + (4 - score) + '"]');
                if (btn) {
                    q.querySelectorAll('button').forEach(b => b.classList.remove('sel'));
                    btn.classList.add('sel');
                }
            });
            updateProgress();
            alert('تم ملء الاختبار تلقائيًا — النتيجة المتوقعة: ' + label + ' (' + total + ' / ' + MAX_SCORE + '). اضغط "الحساب المباشر 🧮" لعرضها.');
        }
        document.getElementById('fillAutoBtn').addEventListener('click', () => fillTo(T.fillMid, 'متوسطة 🟠'));
        document.getElementById('fillHighBtn').addEventListener('click', () => fillTo(T.fillHigh, 'مرتفعة 🟢'));

        const SESSION_KEY = ptKey(T.sessionKey);
        function seedFixedSessions() {
            const L = { 1: 'يوميًا تقريبًا', 2: 'نصف الأيام', 3: 'أيام قليلة فقط', 4: 'لم يحدث أبدًا' };
            const mk = (number, date, total) => {
                const extra = total - ITEMS.length;
                const scores = new Array(ITEMS.length).fill(1);
                for (let i = 0; i < extra; i++) scores[(i * 37) % ITEMS.length]++;
                const answers = ITEMS.map((text, idx) => ({
                    no: idx + 1, text: text, label: L[scores[idx]], score: scores[idx]
                }));
                return {
                    number: number, date: date, total: total, max: MAX_SCORE,
                    avg: Math.round((total / ITEMS.length) * 100) / 100,
                    pct: Math.round((total / MAX_SCORE) * 100),
                    state: total >= HIGH_START ? 'مرتفعة' : total >= MID_START ? 'متوسطة' : 'ضعيفة',
                    answers: answers
                };
            };
            return T.seedFixed.slice(0, 3).map(s => mk(s[0], s[1], s[2]));
        }
        const saveFileBtn = document.getElementById('saveFileBtn');
        saveFileBtn.addEventListener('click', () => {
            if (!window.__curSession) { alert('احسب النتيجة أولًا.'); return; }
            let sessions = JSON.parse(demoStorage.getItem(SESSION_KEY) || 'null');
            if (!sessions || !sessions.length) sessions = seedFixedSessions();
            sessions = sessions.slice(0, 3);
            window.__curSession.number = 4;
            sessions.push(window.__curSession);
            demoStorage.setItem(SESSION_KEY, JSON.stringify(sessions));
            demoStorage.setItem(ptKey('diagTestAnswered'), '1');
            demoStorage.setItem(ptKey('activeChartTest'), chosenId);
            location.href = 'charts.html';
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