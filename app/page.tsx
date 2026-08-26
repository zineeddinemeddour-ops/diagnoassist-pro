import { ArrowIcon, Brand, CheckIcon, Icon, PageFooter } from "./components";

const workflow = [
  { number: "01", title: "اجمع السياق", copy: "دوّن سبب المراجعة، المدة، الأثر الوظيفي، وعوامل السلامة في سجل منظم.", icon: "file" as const },
  { number: "02", title: "راجع الفرضيات", copy: "قارن ما يدعم كل احتمال وما يعارضه، وحدّد الأسئلة الناقصة قبل اعتماد أي قرار.", icon: "spark" as const },
  { number: "03", title: "قِس وتابع", copy: "استخدم أداة مناسبة ومرخّصة عند الحاجة، ثم راقب التغيّر مع سياق كل جلسة.", icon: "chart" as const },
];

export default function Home() {
  return (
    <main>
      <header className="site-header home-header">
        <nav className="shell nav-inner" aria-label="التنقل الرئيسي">
          <Brand />
          <div className="nav-links"><a href="#product">المنصة</a><a href="#workflow">مسار العمل</a><a href="#principles">مبادئ الاستخدام</a><a href="pricing/">الوصول التجريبي</a></div>
          <a className="button button-secondary button-small" href="login/">دخول النسخة التجريبية <ArrowIcon /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><i /> مساحة عمل عربية للمختص النفسي</span>
            <h1>سياقٌ أوضح<br /><em>لقرارٍ أكثر مسؤولية.</em></h1>
            <p>نموذج مهني يجمع ملاحظات الجلسة، المراجعة السريرية، القياس، والمتابعة في مسار واحد—مع إبقاء الحكم النهائي بيد المختص.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="login/">استكشف مساحة العمل <ArrowIcon /></a>
              <a className="text-button" href="#product">شاهد كيف تُنظَّم الحالة <span>↓</span></a>
            </div>
            <div className="hero-notice"><Icon name="shield" /><span><strong>قرار بشري أولًا</strong><small>لا يصدر النموذج تشخيصًا آليًا ولا يجمع بيانات مرضى حقيقية.</small></span></div>
          </div>

          <div className="product-window" id="product" aria-label="معاينة لمساحة عمل DiagnoAssist">
            <div className="window-bar"><span>DiagnoAssist / اليوم</span><div><i /><i /><i /></div></div>
            <div className="window-layout">
              <aside className="window-side">
                <div className="window-brand">D<span>+</span></div>
                {["calendar","case","note","assessment","chart"].map((icon,index)=><i className={index===0?"active":""} key={icon}><Icon name={icon as "calendar"|"case"|"note"|"assessment"|"chart"} /></i>)}
              </aside>
              <div className="window-main">
                <div className="window-heading"><div><small>الأربعاء، 26 أغسطس</small><h2>صباح الخير، د. ن</h2></div><span>نموذج تجريبي</span></div>
                <div className="window-alert"><span>!</span><div><strong>عنصر يحتاج إلى مراجعتك</strong><small>توثيق عوامل الاستبعاد قبل اعتماد الملخص</small></div><b>فتح الحالة ←</b></div>
                <div className="window-metrics"><div><small>موعد اليوم</small><strong>03</strong><em>آخر موعد 16:00</em></div><div><small>ملاحظات قيد الإكمال</small><strong>02</strong><em>مرتبطة بجلسات سابقة</em></div><div><small>متابعة قادمة</small><strong>07</strong><em>خلال هذا الأسبوع</em></div></div>
                <div className="window-bottom">
                  <div className="window-task"><div><small>الحالة الحالية</small><strong>ملف تجريبي 027</strong></div><span>الجلسة 04</span><p>استكمال المراجعة السريرية وتوثيق الأسئلة الناقصة قبل القياس.</p><div className="mini-steps"><i className="done"/><i className="done"/><i/><i/></div></div>
                  <div className="window-schedule"><small>الموعد التالي</small><strong>14:30</strong><span>جلسة متابعة · 50 دقيقة</span><button type="button">فتح الملف</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="shell"><p>مبني حول مبادئ ضرورية في الصحة النفسية الرقمية</p><ul><li><CheckIcon /> إشراف بشري</li><li><CheckIcon /> وضوح حدود الأداة</li><li><CheckIcon /> بيانات تجريبية مجهّلة</li><li><CheckIcon /> واجهة عربية من اليمين لليسار</li></ul></div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="shell">
          <div className="section-heading"><span>مسار العمل</span><div><h2>من الملاحظة إلى المتابعة،<br />دون أن يضيع السياق.</h2><p>المعلومات التي يحتاجها المختص تظهر في اللحظة التي يحتاجها فيها، مع فصل واضح بين الملاحظة والفرضية والقرار المعتمد.</p></div></div>
          <div className="workflow-grid">
            {workflow.map(item=><article key={item.number}><span>{item.number}</span><div className="feature-icon"><Icon name={item.icon} /></div><h3>{item.title}</h3><p>{item.copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="clinical-section">
        <div className="shell clinical-grid">
          <div className="clinical-copy"><span className="section-kicker">مراجعة قابلة للتتبّع</span><h2>ليس “ما الاحتمال الأعلى؟” فقط؛ بل لماذا، وما الذي ينقص؟</h2><p>تعرض مساحة المراجعة الأدلة الداعمة، المعلومات المتعارضة، وعوامل الاستبعاد والأسئلة المطلوبة. لا تُخفي عدم اليقين وراء رقم جذاب.</p><a className="button button-primary" href="login/">جرّب المسار الكامل <ArrowIcon /></a></div>
          <div className="evidence-board" aria-label="مثال توضيحي لمصفوفة الأدلة">
            <div className="evidence-head"><div><small>فرضية للمراجعة</small><strong>نمط قلق مستمر</strong></div><span>تحتاج توضيحًا</span></div>
            <div className="evidence-row support"><i>✓</i><div><strong>يدعم الفرضية</strong><p>استمرار التوتر وتأثيره الوظيفي موثّقان في الملخص.</p></div></div>
            <div className="evidence-row missing"><i>?</i><div><strong>معلومة ناقصة</strong><p>لم تُراجع بعد الأدوية، المنبّهات، والتاريخ الطبي.</p></div></div>
            <div className="evidence-row against"><i>—</i><div><strong>ما قد يعارضها</strong><p>الارتباط بحدث ضاغط محدد ما زال غير واضح.</p></div></div>
            <div className="evidence-foot"><Icon name="shield" /> يعتمد المختص الملخص بعد المراجعة.</div>
          </div>
        </div>
      </section>

      <section className="principles-section" id="principles">
        <div className="shell principles-grid">
          <div><span className="section-kicker">مبادئ الاستخدام</span><h2>احترافي لا يعني ادعاءات أكبر. يعني حدودًا أوضح.</h2></div>
          <div className="principle-list">
            <article><span>01</span><div><h3>المختص صاحب القرار</h3><p>كل مخرجات المراجعة مقترحات قابلة للتعديل والرفض والتوثيق.</p></div></article>
            <article><span>02</span><div><h3>القياس له مصدر وصلاحية</h3><p>لا تُستخدم أداة إلا بعد التحقق من الترخيص، اللغة، الفئة المستهدفة، وطريقة التفسير.</p></div></article>
            <article><span>03</span><div><h3>الخصوصية جزء من التصميم</h3><p>هذه النسخة لا تطلب بيانات مرضى حقيقية، ولا تدّعي امتثالًا تنظيميًا غير مُثبت.</p></div></article>
          </div>
        </div>
      </section>

      <section className="cta-section"><div className="shell cta-panel"><div><span>استكشف النموذج الكامل</span><h2>مساحة عمل هادئة،<br />مصممة للمراجعة لا للاستبدال.</h2></div><a className="button button-light" href="login/">فتح الحالة التجريبية <ArrowIcon /></a></div></section>
      <PageFooter />
    </main>
  );
}
