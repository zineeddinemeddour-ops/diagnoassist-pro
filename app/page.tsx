const loginUrl = "login/";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="m6.5 12.5 3.2 3.2 7.8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M12 3.5c.6 4.8 3.2 7.4 8 8-4.8.6-7.4 3.2-8 8-.6-4.8-3.2-7.4-8-8 4.8-.6 7.4-3.2 8-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M7 3.5h7l4 4V20H7V3.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M14 3.5v4h4M10 12h5M10 15.5h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 19V9M12 19V5M19 19v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M12 3.5 19 6v5c0 4.8-2.7 7.8-7 9.5C7.7 18.8 5 15.8 5 11V6l7-2.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="التنقل الرئيسي">
        <div className="nav-inner shell">
          <a className="brand" href="#top" aria-label="DiagnoAssist — الرئيسية">
            <span className="brand-mark" aria-hidden="true"><span>D</span><i>+</i></span>
            <span className="brand-copy">
              <strong>DIAGNO<span>ASSIST</span></strong>
              <small>للأخصائيين النفسانيين</small>
            </span>
          </a>
          <div className="nav-links">
            <a href="#product">المنصة</a>
            <a href="#features">المميزات</a>
            <a href="#workflow">كيف تعمل</a>
            <a href="pricing/">الباقات</a>
            <a href="#faq">الأسئلة الشائعة</a>
          </div>
          <a className="button button-small" href={loginUrl}>تسجيل الدخول <ArrowIcon /></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><SparkIcon /> منصة مساعدة للقرار الإكلينيكي</div>
            <h1>رؤية أوضح.<br /><span>قرار سريري أهدأ.</span></h1>
            <p className="hero-lead">اجمع الأعراض، راجع التشخيصات الفارقية، طبّق الاختبارات النفسية، وتابع تطوّر الحالة داخل مساحة عمل واحدة مصممة للأخصائي.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={loginUrl}>ابدأ باستخدام المنصة <ArrowIcon /></a>
              <a className="button button-quiet" href="#workflow">اكتشف طريقة العمل</a>
            </div>
            <div className="hero-assurances" aria-label="مزايا مختصرة">
              <span><CheckIcon /> 25+ اختبارًا نفسيًا</span>
              <span><CheckIcon /> سجل متكامل لكل حالة</span>
            </div>
          </div>

          <div className="product-stage" id="product" aria-label="معاينة واجهة DiagnoAssist">
            <div className="stage-note note-top"><span className="pulse-dot" /> جلسة نشطة</div>
            <div className="workspace-card">
              <div className="workspace-topbar">
                <div className="workspace-brand"><span>D+</span> DIAGNOASSIST</div>
                <div className="workspace-actions"><i /><i /><i /></div>
              </div>
              <div className="workspace-body">
                <aside className="workspace-sidebar">
                  <div className="side-pill active"><span>01</span> نظرة عامة</div>
                  <div className="side-pill"><span>02</span> الأعراض</div>
                  <div className="side-pill"><span>03</span> التشخيص الفارقي</div>
                  <div className="side-pill"><span>04</span> الاختبارات</div>
                </aside>
                <div className="workspace-main">
                  <div className="case-heading">
                    <div><small>ملف الحالة</small><h2>ملخّص الجلسة</h2></div>
                    <span className="session-chip">الجلسة 04</span>
                  </div>
                  <div className="symptom-row"><span>قلق متكرر</span><span>اضطراب النوم</span><span>صعوبة التركيز</span></div>
                  <div className="clinical-panel">
                    <div className="panel-title"><span><SparkIcon /> مؤشرات للمراجعة</span><small>محدّثة الآن</small></div>
                    <div className="signal">
                      <div><strong>القلق العام</strong><small>توافق مرتفع مع الأعراض</small></div>
                      <div className="meter"><i style={{ width: "84%" }} /></div>
                    </div>
                    <div className="signal">
                      <div><strong>اضطراب التكيّف</strong><small>يحتاج إلى استبعاد إضافي</small></div>
                      <div className="meter"><i style={{ width: "58%" }} /></div>
                    </div>
                  </div>
                  <div className="clinical-disclaimer"><ShieldIcon /> النتيجة اقتراح مساعد؛ القرار التشخيصي النهائي للأخصائي.</div>
                </div>
              </div>
            </div>
            <div className="stage-note note-bottom"><ChartIcon /><span><strong>ملف واحد</strong><small>يتحدّث مع كل جلسة</small></span></div>
          </div>
        </div>

        <div className="shell proof-strip" aria-label="حقائق عن المنصة">
          <div><strong>25+</strong><span>اختبارًا نفسيًا ضمن المنصة</span></div>
          <div><strong>6</strong><span>خطوات مترابطة في مسار واحد</span></div>
          <div><strong>1</strong><span>سجل موحّد لكل مريض</span></div>
          <div className="standards"><small>مرجعيات تشخيصية</small><strong>DSM-5-TR · ICD-11</strong></div>
        </div>
      </section>

      <section className="statement-section">
        <div className="shell statement-grid">
          <div className="section-label"><span>01</span> لماذا DiagnoAssist؟</div>
          <div className="statement-copy">
            <h2>الأخصائي لا يحتاج مزيدًا من النوافذ.<br /><em>يحتاج سياقًا أوضح.</em></h2>
            <p>لهذا تجمع المنصة المعلومات المتفرقة في مسار إكلينيكي منظم، من أول ملاحظة إلى المتابعة المستمرة.</p>
          </div>
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="shell">
          <div className="section-heading">
            <div className="section-label"><span>02</span> مساحة العمل</div>
            <h2>كل ما تحتاجه الحالة،<br />في المكان الصحيح.</h2>
            <p>أدوات مترابطة تقلّل التشتت وتحافظ على السياق الإكلينيكي بين الجلسات.</p>
          </div>

          <div className="bento-grid">
            <article className="feature-card feature-dark">
              <div className="feature-icon"><SparkIcon /></div>
              <div>
                <span className="feature-kicker">دعم القرار</span>
                <h3>تشخيص فارقي لا يختصر تفكيرك، بل يرتّبه.</h3>
                <p>راجع الاحتمالات المتشابهة، عوامل الاستبعاد، والأسئلة التي تحتاجها قبل تثبيت القرار الإكلينيكي.</p>
              </div>
              <div className="differential-list" aria-hidden="true">
                <div><span>01</span><strong>مطابقة الأعراض</strong><i>عالية</i></div>
                <div><span>02</span><strong>عوامل الاستبعاد</strong><i>3 نقاط</i></div>
                <div><span>03</span><strong>أسئلة متابعة</strong><i>جاهزة</i></div>
              </div>
            </article>

            <article className="feature-card tests-card">
              <div className="feature-icon"><CheckIcon /></div>
              <span className="feature-kicker">اختبارات موثوقة</span>
              <h3>من التطبيق إلى النتيجة، دون نقل يدوي.</h3>
              <p>طبّق الاختبار واحصل على الدرجات والتفسير داخل ملف الحالة نفسه.</p>
              <div className="mini-score"><span>نتيجة الاختبار</span><strong>18<small>/21</small></strong><i><b /></i></div>
            </article>

            <article className="feature-card file-card">
              <div className="feature-icon"><FileIcon /></div>
              <span className="feature-kicker">سجل مستمر</span>
              <h3>القصة الكاملة للحالة، لا لقطة من جلسة واحدة.</h3>
              <p>ملاحظات، نتائج، تغيّرات وخطة متابعة في تسلسل زمني واضح.</p>
              <div className="timeline-mini" aria-hidden="true"><i /><i /><i className="current" /><i /></div>
            </article>

            <article className="feature-card insight-card">
              <div className="feature-icon"><ChartIcon /></div>
              <div><span className="feature-kicker">متابعة التقدّم</span><h3>لاحظ التغيّر بين الجلسات قبل أن يضيع في الملاحظات.</h3></div>
              <div className="trend-chart" aria-hidden="true">
                <span style={{ height: "72%" }} /><span style={{ height: "61%" }} /><span style={{ height: "52%" }} /><span style={{ height: "38%" }} /><span style={{ height: "27%" }} />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="shell">
          <div className="workflow-intro">
            <div><div className="section-label light"><span>03</span> مسار العمل</div><h2>ثلاث لحظات.<br />سياق واحد لا ينقطع.</h2></div>
            <p>صُمّمت المنصة حول طريقة عمل الأخصائي الفعلية، حتى تبقى التقنية في الخلفية ويبقى التركيز على الحالة.</p>
          </div>

          <div className="workflow-grid">
            <article><span className="workflow-number">01</span><div className="workflow-icon"><FileIcon /></div><h3>اجمع</h3><p>دوّن الأعراض والسياق والملاحظات الأولية في نموذج واضح وسريع.</p><ul><li>إدخال منظم للأعراض</li><li>ملخص الجلسة</li></ul></article>
            <article><span className="workflow-number">02</span><div className="workflow-icon"><SparkIcon /></div><h3>حلّل</h3><p>قارن التشخيصات الفارقية واختر الاختبار الأنسب للحالة.</p><ul><li>احتمالات مرتبة</li><li>اختبارات داخلية</li></ul></article>
            <article><span className="workflow-number">03</span><div className="workflow-icon"><ChartIcon /></div><h3>تابع</h3><p>راقب النتائج عبر الزمن وحدّث خطة المتابعة مع كل جلسة.</p><ul><li>نتائج فورية</li><li>سجل زمني مستمر</li></ul></article>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="shell trust-grid">
          <div className="trust-mark"><ShieldIcon /></div>
          <div><span className="feature-kicker">مسؤولية إكلينيكية واضحة</span><h2>المعرفة تساعدك.<br />والقرار يبقى لك.</h2></div>
          <p>DiagnoAssist أداة مساعدة لتنظيم المعلومات ودعم التفكير الإكلينيكي، ولا تستبدل التقييم المهني أو الحكم السريري للأخصائي.</p>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="shell faq-grid">
          <div className="faq-heading"><div className="section-label"><span>04</span> الأسئلة الشائعة</div><h2>قبل أن تبدأ.</h2><p>إجابات مباشرة عن طريقة عمل المنصة وحدود دورها.</p></div>
          <div className="faq-list">
            <details open><summary>هل تصدر المنصة تشخيصًا نهائيًا؟ <span>+</span></summary><p>لا. تعرض DiagnoAssist مؤشرات واحتمالات منظمة لمساعدة الأخصائي، بينما يبقى التشخيص النهائي قرارًا مهنيًا مبنيًا على التقييم الإكلينيكي الكامل.</p></details>
            <details><summary>كم عدد الاختبارات المتاحة؟ <span>+</span></summary><p>تضم المنصة أكثر من 25 اختبارًا نفسيًا، مع تنظيم النتائج والدرجات داخل ملف الحالة.</p></details>
            <details><summary>هل تراعي المنصة DSM-5-TR وICD-11؟ <span>+</span></summary><p>يعتمد تنظيم المحتوى التشخيصي على المرجعيات الحديثة لتسهيل المراجعة والمقارنة أثناء العمل الإكلينيكي.</p></details>
            <details><summary>هل يمكن متابعة الحالة عبر جلسات متعددة؟ <span>+</span></summary><p>نعم. يجمع ملف الحالة الملاحظات والنتائج والتغيّرات في سجل زمني يتحدّث مع كل جلسة.</p></details>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell cta-panel">
          <div className="cta-symbol" aria-hidden="true">D<span>+</span></div>
          <div><span>مساحة عمل أكثر هدوءًا تبدأ من هنا</span><h2>حوّل المعلومات المتفرقة<br />إلى قرار أوضح.</h2></div>
          <a className="button button-light" href={loginUrl}>ابدأ الآن <ArrowIcon /></a>
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <div className="footer-brand">
            <a className="brand brand-footer" href="#top"><span className="brand-mark" aria-hidden="true"><span>D</span><i>+</i></span><span className="brand-copy"><strong>DIAGNO<span>ASSIST</span></strong><small>للأخصائيين النفسانيين</small></span></a>
            <p>منصة رقمية تساعد الأخصائي النفسي على تنظيم التقييم، الاختبارات، والمتابعة في مكان واحد.</p>
          </div>
          <div className="footer-links">
            <div><strong>المنصة</strong><a href="#features">المميزات</a><a href="#workflow">كيف تعمل</a><a href="#faq">الأسئلة الشائعة</a></div>
            <div><strong>الدخول</strong><a href={loginUrl}>تسجيل الدخول</a><a href={loginUrl}>ابدأ الآن</a></div>
            <div><strong>تنبيه</strong><p>أداة مساعدة وليست بديلًا عن التقييم أو التشخيص المهني.</p></div>
          </div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 DiagnoAssist. جميع الحقوق محفوظة.</span><span>صُممت للأخصائي، حول الحالة.</span></div>
      </footer>
    </main>
  );
}
