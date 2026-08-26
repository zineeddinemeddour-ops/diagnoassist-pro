import type { Metadata } from "next";
import { AppPageHeader, AppShell, ArrowIcon, CheckIcon, SafetyNote, StatusChip } from "../components";

export const metadata: Metadata = { title: "ملخص القرار | DiagnoAssist", description: "مصفوفة أدلة قابلة للمراجعة والاعتماد." };

const candidates = [
  { title: "نمط قلق مستمر", status: "يحتاج توضيحًا", tone: "warning" as const, support: ["التوتر وصعوبة التركيز موثّقان", "الأثر في النوم والأداء ظاهر"], against: "المسار الزمني لم يكتمل توثيقه", missing: "مراجعة العوامل الطبية والمنبّهات" },
  { title: "استجابة مرتبطة بضغط", status: "قيد المراجعة", tone: "info" as const, support: ["يوجد سياق ضاغط محتمل", "البداية حديثة نسبيًا"], against: "العلاقة الزمنية بالحدث غير مؤكدة", missing: "تحديد بداية الحدث واستمرار الأعراض" },
  { title: "عامل طبي أو دوائي", status: "يجب الاستبعاد", tone: "neutral" as const, support: ["صعوبات النوم والإرهاق غير نوعية", "لا توجد مراجعة صحية موثقة"], against: "لا توجد قرائن مباشرة حاليًا", missing: "التاريخ الصحي، الأدوية، المنبّهات" },
];

export default function ResultsPage() {
  return (
    <AppShell active="/results">
      <AppPageHeader eyebrow="ملف تجريبي 027 · مسودة" title="مصفوفة القرار" description="ترتيب قابل للمراجعة لما يدعم كل فرضية، وما يعارضها، وما يجب استكماله." action={<a className="button button-secondary" href="../diagnosis/">تعديل السياق</a>} />
      <SafetyNote tone="warning">لا توجد “نسبة تشخيص” هنا. ترتيب الفرضيات لا يساوي احتمالًا طبيًا، ولا يصبح قرارًا إلا بعد مراجعة المختص.</SafetyNote>

      <div className="decision-layout">
        <section className="candidate-list">
          {candidates.map((item,index)=><article className={`app-card candidate-card${index===0?" selected":""}`} key={item.title}>
            <div className="candidate-head"><span className="candidate-index">0{index+1}</span><div><small>فرضية للمراجعة</small><h2>{item.title}</h2></div><StatusChip tone={item.tone}>{item.status}</StatusChip></div>
            <div className="evidence-columns">
              <div className="supports"><strong>ما يدعمها</strong>{item.support.map(point=><p key={point}><CheckIcon />{point}</p>)}</div>
              <div className="contradicts"><strong>ما يحدّ منها</strong><p><span>—</span>{item.against}</p></div>
              <div className="needs"><strong>ما نحتاجه</strong><p><span>?</span>{item.missing}</p></div>
            </div>
          </article>)}
        </section>

        <aside className="decision-sidebar">
          <section className="app-card unanswered"><span className="card-kicker">أسئلة قبل الاعتماد</span><h2>3 أسئلة مفتوحة</h2><ol><li>هل بدأت الصعوبات بعد حدث ضاغط محدد؟</li><li>هل توجد أدوية أو منبّهات تؤثر في النوم؟</li><li>هل تم فحص السلامة والمخاطر وتوثيقها؟</li></ol><a href="../diagnosis/">العودة لاستكمالها</a></section>
          <section className="app-card clinician-decision"><span className="card-kicker">حالة الملخص</span><h2>غير معتمد</h2><p>يمكن اختيار أداة قياس استكشافية، لكن لا يمكن اعتماد هذا الملخص قبل إغلاق البنود الأساسية.</p><a className="button button-primary" href="../assessment/">اختيار القياس المناسب <ArrowIcon /></a></section>
        </aside>
      </div>
    </AppShell>
  );
}
