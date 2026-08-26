import type { Metadata } from "next";
import { AppPageHeader, AppShell, ArrowIcon, CheckIcon, SafetyNote, StatusChip } from "../components";

export const metadata: Metadata = { title: "المراجعة السريرية | DiagnoAssist", description: "تنظيم الأدلة والأسئلة قبل اعتماد القرار السريري." };

const evidence = [
  { label: "المدة والمسار", value: "بدأت الأعراض تدريجيًا قبل 6 أسابيع", done: true },
  { label: "الأثر الوظيفي", value: "تراجع في التركيز وجودة النوم", done: true },
  { label: "السياق الضاغط", value: "موثّق جزئيًا ويحتاج توضيح العلاقة الزمنية", done: false },
  { label: "التاريخ الطبي والدوائي", value: "لم تتم مراجعته بعد", done: false },
];

export default function DiagnosisPage() {
  return (
    <AppShell active="/diagnosis">
      <AppPageHeader eyebrow="ملف تجريبي 027 · الجلسة 04" title="المراجعة السريرية" description="افصل الملاحظات عن الفرضيات، وحدّد ما ينقص قبل الانتقال إلى الملخص." action={<a className="button button-secondary" href="../workspace/">العودة إلى اليوم</a>} />
      <div className="review-progress" aria-label="تقدم المسار"><span className="done"><i>1</i>السياق</span><b/><span className="active"><i>2</i>مراجعة الأدلة</span><b/><span><i>3</i>ملخص القرار</span><b/><span><i>4</i>القياس والمتابعة</span></div>
      <SafetyNote>المحتوى مثال تعليمي للحوار والواجهة. لا يمثل بروتوكولًا تشخيصيًا ولا يقدّم توصية لمريض حقيقي.</SafetyNote>

      <div className="clinical-review-grid">
        <section className="app-card case-context">
          <div className="card-title-row"><div><span className="card-kicker">01 · سياق الحالة</span><h2>المعطيات الموثقة</h2></div><StatusChip tone="warning">2 من 4 مكتملة</StatusChip></div>
          <label className="app-textarea"><span>ملخص ملاحظات الجلسة</span><textarea defaultValue="تصف الحالة توترًا متكررًا، صعوبة في بدء النوم، وتشتتًا يحد من الأداء اليومي. بدأت الصعوبات تدريجيًا خلال الأسابيع الأخيرة. ما زالت العلاقة بحدث ضاغط محدد والتاريخ الصحي بحاجة إلى استكمال." /></label>
          <div className="evidence-list">{evidence.map(item=><div key={item.label} className={item.done?"complete":"missing"}><span>{item.done?<CheckIcon />:"!"}</span><div><strong>{item.label}</strong><p>{item.value}</p></div><button type="button">{item.done?"تعديل":"استكمال"}</button></div>)}</div>
        </section>

        <aside className="app-card safety-review">
          <div className="card-title-row"><div><span className="card-kicker">02 · فحص أساسي</span><h2>السلامة والاستبعاد</h2></div></div>
          <p>لا تُكمل الملخص قبل توثيق هذه المحاور في المقابلة المهنية.</p>
          <label><input type="checkbox" defaultChecked /> تم تقييم مستوى الضيق والأثر الوظيفي</label>
          <label><input type="checkbox" /> تم توثيق فحص السلامة والمخاطر</label>
          <label><input type="checkbox" /> تمت مراجعة العوامل الطبية والدوائية</label>
          <label><input type="checkbox" defaultChecked /> تم استكشاف السياق النفسي والاجتماعي</label>
          <SafetyNote tone="warning">بند السلامة غير مكتمل في هذا المثال.</SafetyNote>
        </aside>
      </div>
      <div className="page-action-bar"><div><strong>الخطوة التالية</strong><span>راجع الفرضيات مع إبقاء البنود الناقصة ظاهرة.</span></div><a className="button button-primary" href="../results/">فتح مصفوفة القرار <ArrowIcon /></a></div>
    </AppShell>
  );
}
