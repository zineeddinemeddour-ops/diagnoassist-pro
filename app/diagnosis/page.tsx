import type { Metadata } from "next";
import { AppPageHeader, AppShell, ArrowIcon, SafetyNote } from "../components";

export const metadata: Metadata = { title: "التشخيص الفارقي | DiagnoAssist", description: "تنظيم الأعراض ومراجعة الاحتمالات التشخيصية." };

export default function DiagnosisPage() {
  return (
    <AppShell active="/diagnosis">
      <AppPageHeader eyebrow="الخطوة 02" title="التشخيص الفارقي" description="نظّم الأعراض والسياق قبل مراجعة الاحتمالات المحتملة." action={<a className="button button-quiet" href="../workspace/">ملف الحالة</a>} />
      <div className="diagnosis-layout">
        <section className="symptom-composer app-card">
          <div className="card-title-row"><div><span className="card-kicker">مدخلات الجلسة</span><h2>الأعراض والملاحظات</h2></div><span className="count-chip">8 مؤشرات</span></div>
          <label className="app-textarea"><span>الملخص الإكلينيكي</span><textarea defaultValue="تظهر الحالة توترًا متكررًا، صعوبة في النوم والتركيز، مع تراجع في الأداء اليومي خلال الأسابيع الأخيرة. لا توجد بيانات كافية بعد لتحديد سبب واحد." /></label>
          <div className="symptom-tags"><button>توتر مستمر</button><button>اضطراب النوم</button><button>صعوبة التركيز</button><button>إرهاق</button><button>تراجع الأداء</button><button className="add-tag">+ إضافة مؤشر</button></div>
          <div className="composer-footer"><span>أضف المدة، الشدة، والأثر الوظيفي لتحسين المراجعة.</span><a className="button button-primary" href="../results/">مراجعة الاحتمالات <ArrowIcon /></a></div>
        </section>
        <aside className="context-panel app-card"><span className="card-kicker">اكتمال السياق</span><div className="context-score"><strong>72%</strong><i><b /></i></div><ul><li className="complete">مدة الأعراض</li><li className="complete">الأثر الوظيفي</li><li className="complete">السياق الحالي</li><li>التاريخ الطبي</li><li>عوامل الاستبعاد</li></ul></aside>
      </div>
      <SafetyNote>لا تُرسل معلومات تعريفية أو بيانات مرضى حقيقية في النسخة الاستعراضية.</SafetyNote>
    </AppShell>
  );
}
