window.frontendReady.then(() => {

        const STATECLS = { 'مرتفعة': 'st-high', 'متوسطة': 'st-mid', 'ضعيفة': 'st-low' };

        const ITEMS94 = [
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
        const LABELS = { 1: 'يوميًا تقريبًا', 2: 'نصف الأيام', 3: 'أيام قليلة فقط', 4: 'لم يحدث أبدًا' };

        const AP = JSON.parse(demoStorage.getItem('diagActivePatient') || 'null');
        const ptKey = base => AP ? base + '_' + AP.id : base;

        const ACTIVE = demoStorage.getItem(ptKey('activeChartTest')) === 'mdd' ? 'mdd' : 'ptsd';
        const ITEMS = ACTIVE === 'mdd' ? ITEMS_MDD : ITEMS94;
        const MAX_SCORE = ITEMS.length * 4;
        const MID_START = Math.ceil(MAX_SCORE / 2) + 1;
        const HIGH_START = Math.ceil(MAX_SCORE * 0.75) + 1;
        const SESSION_KEY = ptKey(ACTIVE === 'mdd' ? 'diagSessionsMddV2' : 'diagSessionsV2');
        const SEEDS = ACTIVE === 'mdd'
            ? [[1, '01/07/2026', 78], [2, '12/07/2026', 96], [3, '19/07/2026', 132], [4, '26/07/2026', 160]]
            : [[1, '01/07/2026', 112], [2, '12/07/2026', 158], [3, '19/07/2026', 224], [4, '26/07/2026', 271]];
        document.getElementById('chartTestName').textContent =
            (AP ? AP.name + ' — ' : 'محمد عبد الله — ') +
            (ACTIVE === 'mdd' ? 'مقياس الاكتئاب (MDD)' : 'مقياس الطلبة لاضطراب ما بعد الصدمة') + ' — الملف: ' + (AP ? AP.fileNum || '' : 'PT-2026-0135');

        function makeTotalsSession(number, date, total) {
            const extra = total - ITEMS.length;
            const scores = new Array(ITEMS.length).fill(1);
            for (let i = 0; i < extra; i++) scores[(i * 37) % ITEMS.length]++;
            const answers = ITEMS.map((text, idx) => {
                const score = scores[idx];
                return { no: idx + 1, text: text, label: LABELS[score], score: score };
            });
            return {
                number: number, date: date, total: total, max: MAX_SCORE,
                avg: Math.round((total / answers.length) * 100) / 100,
                pct: Math.round((total / MAX_SCORE) * 100),
                state: total >= HIGH_START ? 'مرتفعة' : total >= MID_START ? 'متوسطة' : 'ضعيفة',
                answers: answers
            };
        }

        function seedSessions() {
            if (demoStorage.getItem(SESSION_KEY) !== null) return;
            demoStorage.setItem(SESSION_KEY, JSON.stringify(SEEDS.map(s => makeTotalsSession(s[0], s[1], s[2]))));
        }
        seedSessions();

        const sessions = JSON.parse(demoStorage.getItem(SESSION_KEY) || '[]');

        function render() {
            document.getElementById('emptyBox').style.display = sessions.length ? 'none' : 'block';
            if (!sessions.length) return;

            const lastIdx = sessions.length - 1;
            const totals = sessions.map(s => s.total);
            const last = sessions[lastIdx];
            const avgAll = Math.round(totals.reduce((x, y) => x + y, 0) / sessions.length);

            document.getElementById('sumCount').textContent = sessions.length;
            document.getElementById('chipCount').textContent = '🗓️ ' + sessions.length + ' جلسة';
            document.getElementById('sumLast').textContent = last.total;
            document.getElementById('sumLastMax').textContent = '(من ' + MAX_SCORE + ')';
            document.getElementById('chipLast').textContent = '📈 آخر نتيجة: ' + last.total + ' / ' + MAX_SCORE;
            document.getElementById('sumAvg').textContent = avgAll + ' / ' + MAX_SCORE;
            document.getElementById('lgLow').textContent = '(' + (MAX_SCORE / 4) + '–' + (MID_START - 1) + ')';
            document.getElementById('lgMid').textContent = '(' + MID_START + '–' + (HIGH_START - 1) + ')';
            document.getElementById('lgHigh').textContent = '(' + HIGH_START + '–' + MAX_SCORE + ')';

            renderLine();
            renderInterpretation();
        }

        function renderInterpretation() {
            const box = document.getElementById('interpBox');
            if (!sessions.length) {
                box.innerHTML = '<div class="interp-trend">لا توجد جلسات محفوظة بعد لعرض التفسير.</div>';
                return;
            }
            let items = '';
            sessions.forEach((s, i) => {
                const prev = i > 0 ? sessions[i - 1].total : null;
                const delta = prev === null ? null : s.total - prev;
                let deltaTxt = '';
                if (delta === null) deltaTxt = ' • الجلسة الأولى (بداية التتبع)';
                else if (delta > 0) deltaTxt = ' • <b class="up">تحسّن (+' + delta + ')</b> مقارنة بالجلسة السابقة';
                else if (delta < 0) deltaTxt = ' • <b class="down">تراجع (' + delta + ')</b> مقارنة بالجلسة السابقة';
                else deltaTxt = ' • ثبات (0) مقارنة بالجلسة السابقة';
                items += '<div class="interp-item"><span class="ii-num">ج' + s.number + '</span>' +
                    '<span>الجلسة ' + s.number + ' (' + s.date + '): حصلت على <b>' + s.total + ' / ' + MAX_SCORE + '</b> — مستوى <b>' + s.state + '</b>' + deltaTxt + '</span></div>';
            });
            const first = sessions[0].total;
            const last = sessions[sessions.length - 1].total;
            const totalDelta = last - first;
            let trend;
            if (totalDelta > 0) trend = 'الاتجاه العام: <b>تصاعدي — تحسّن مستمر</b> (' + first + ' ← ' + last + '، أي +' + totalDelta + ' نقطة).';
            else if (totalDelta < 0) trend = 'الاتجاه العام: <b>تنازلي — تراجع</b> (' + first + ' ← ' + last + ').';
            else trend = 'الاتجاه العام: <b>ثابت</b> دون تغيّر ملحوظ بين الجلسات.';
            box.innerHTML = items + '<div class="interp-trend">' + trend + '</div>';
        }

        function renderLine() {
            const svg = document.getElementById('lineSvg');
            const W = 720, H = 350, padL = 66, padR = 52, padT = 26, padB = 58;
            const min = MAX_SCORE / 4, max = MAX_SCORE;
            const iw = W - padL - padR, ih = H - padT - padB;
            const yPos = v => padT + ih - ((v - min) / (max - min)) * ih;

            const zones = [
                { y1: yPos(MID_START - 1), y2: yPos(min), fill: '#fdecec', label: 'ضعيفة', color: '#b91c1c' },
                { y1: yPos(HIGH_START - 1), y2: yPos(MID_START), fill: '#fdf3e0', label: 'متوسطة', color: '#b45309' },
                { y1: yPos(max), y2: yPos(HIGH_START), fill: '#e4f8ee', label: 'مرتفعة', color: '#15803d' }
            ];

            let out = '';
            zones.forEach(z => {
                out += '<rect x="' + padL + '" y="' + Math.min(z.y1, z.y2) + '" width="' + iw + '" height="' + Math.abs(z.y1 - z.y2) + '" fill="' + z.fill + '"/>';
            });

            const step = Math.max(10, Math.round((max - min) / 6 / 10) * 10);
            for (let v = min; v <= max; v += step) {
                const y = yPos(v);
                out += '<line x1="' + padL + '" y1="' + y + '" x2="' + (W - padR) + '" y2="' + y + '" stroke="#dbe4f5" stroke-dasharray="4 5"/>';
                out += '<text x="' + (padL - 10) + '" y="' + (y + 4) + '" text-anchor="end" fill="#7f92b5" font-size="11">' + v + '</text>';
            }

            [MID_START - 1, HIGH_START - 1].forEach(v => {
                const y = yPos(v);
                out += '<line x1="' + padL + '" y1="' + y + '" x2="' + (W - padR) + '" y2="' + y + '" stroke="#12294e" stroke-width="1.5" stroke-dasharray="3 6"/>';
            });
            zones.forEach(z => {
                out += '<text x="' + (W - padR + 8) + '" y="' + ((z.y1 + z.y2) / 2 + 4) + '" fill="' + z.color + '" font-size="12.5" font-weight="700">' + z.label + '</text>';
            });

            const n = sessions.length;
            const stepX = n > 1 ? iw / (n - 1) : 0;
            let line = '', area = '', dots = '', labels = '';
            let px0 = 0, pxN = 0;
            sessions.forEach((s, i) => {
                const x = padL + (n > 1 ? i * stepX : iw / 2);
                const y = yPos(s.total);
                if (i === 0) px0 = x;
                if (i === n - 1) pxN = x;
                line += (i ? ' ' : '') + x + ',' + y;
                dots += '<circle class="dot' + (i === n - 1 ? ' latest' : '') + '" cx="' + x + '" cy="' + y + '" r="6">' +
                    '<title>الجلسة ' + s.number + ' — ' + s.date + ': ' + s.total + '</title></circle>';
                labels += '<text class="tval" x="' + x + '" y="' + (y - 12) + '">' + s.total + '</text>' +
                    '<text x="' + x + '" y="' + (H - 22) + '">جلسة ' + s.number + '</text>' +
                    '<text x="' + x + '" y="' + (H - 36) + '" font-size="10" fill="#93a6c9">' + s.date + '</text>';
            });
            area = px0 + ',' + (yPos(min)) + ' ' + line + ' ' + pxN + ',' + (yPos(min));

            svg.innerHTML =
                '<defs><linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">' +
                '<stop offset="0%" stop-color="#087568" stop-opacity="0.35"/>' +
                '<stop offset="100%" stop-color="#087568" stop-opacity="0.02"/>' +
                '</linearGradient></defs>' + out +
                '<polygon class="area" points="' + area + '"/>' +
                '<polyline class="poly" points="' + line + '"/>' + dots + labels;
        }

        function renderList() {
            const box = document.getElementById('sessionsList');
            box.innerHTML = '';
            sessions.forEach((s, i) => {
                const lastIdx = sessions.length - 1;
                const card = document.createElement('div');
                card.className = 'session-card' + (i === lastIdx ? ' latest' : '');
                card.innerHTML =
                    '<div class="sc-num">' + s.number + '</div>' +
                    '<div class="sc-info"><b>الجلسة ' + s.number + ' — ' + s.date + '</b><span>المجموع: ' + s.total + ' / ' + s.max +
                    ' • المتوسط لكل عبارة: ' + s.avg + ' / 4 • النسبة: ' + s.pct + '%</span></div>' +
                    '<span class="state-badge ' + (STATECLS[s.state] || 'st-mid') + '">' + s.state + '</span>' +
                    '<button class="view-answers" data-i="' + i + '">👁 الاطلاع على الاختيارات السابقة</button>';
                box.appendChild(card);
            });
            box.querySelectorAll('.view-answers').forEach(btn => {
                btn.addEventListener('click', () => openModal(parseInt(btn.dataset.i)));
            });
        }

        function openModal(i) {
            const s = sessions[i];
            document.getElementById('mTitle').textContent = '👁 اختيارات الجلسة ' + s.number + ' — ' + s.date;
            document.getElementById('mSub').textContent = 'المجموع: ' + s.total + ' / ' + s.max + ' • الحالة: ' + s.state;
            document.getElementById('mBody').innerHTML = s.answers.map(a =>
                '<div class="mi"><span class="mi-no">' + a.no + '</span><span class="mi-text">' + a.text +
                '</span><span class="mi-ans">' + a.label + ' (' + a.score + ')</span></div>'
            ).join('');
            document.getElementById('answersModal').classList.add('show');
        }

        document.getElementById('mClose').addEventListener('click', () => {
            document.getElementById('answersModal').classList.remove('show');
        });
        document.getElementById('answersModal').addEventListener('click', e => {
            if (e.target === e.currentTarget) e.currentTarget.classList.remove('show');
        });

        const notesArea = document.getElementById('notesArea');
        notesArea.value = demoStorage.getItem(ptKey('diagNotes')) || '';
        document.getElementById('notesSaveBtn').addEventListener('click', () => {
            demoStorage.setItem(ptKey('diagNotes'), notesArea.value);
            const ok = document.getElementById('saveOk');
            ok.style.display = 'block';
            setTimeout(() => { ok.style.display = 'none'; }, 3000);
        });

        render();
        renderList();
    
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