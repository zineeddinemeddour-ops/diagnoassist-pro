import type { Metadata } from "next";
import { AppPageHeader, AppShell, ArrowIcon, SafetyNote } from "../components";

export const metadata: Metadata = { title: "متابعة التقدم | DiagnoAssist", description: "عرض تطور المؤشرات عبر الجلسات." };

export default function AnalyticsPage() {
  const sessions = [{n:"01",score:"18",change:"—",date:"الأسبوع 1"},{n:"02",score:"16",change:"−2",date:"الأسبوع 2"},{n:"03",score:"13",change:"−3",date:"الأسبوع 3"},{n:"04",score:"11",change:"−2",date:"اليوم"}];
  return (
    <AppShell active="/analytics">
      <AppPageHeader eyebrow="الخطوة 05" title="تطور الحالة" description="تابع الاتجاه العام مع الحفاظ على تفاصيل كل جلسة." action={<a className="button button-primary" href="../workspace/">العودة للملف <ArrowIcon /></a>} />
      <SafetyNote>القيم أدناه تجريبية لعرض الواجهة، ولا ينبغي استخدامها لاتخاذ قرار علاجي.</SafetyNote>
      <div className="analytics-grid">
        <section className="chart-card app-card">
          <div className="card-title-row"><div><span className="card-kicker">مؤشر المتابعة</span><h2>الاتجاه عبر أربع جلسات</h2></div><span className="trend-badge">تحسن تدريجي</span></div>
          <div className="bar-chart" aria-label="القيم التجريبية للجلسات: 18، 16، 13، 11"><div><i style={{height:"90%"}} /><span>ج1</span></div><div><i style={{height:"78%"}} /><span>ج2</span></div><div><i style={{height:"61%"}} /><span>ج3</span></div><div><i style={{height:"48%"}} /><span>ج4</span></div></div>
          <div className="chart-caption"><span><i /> الدرجة المسجلة</span><p>انخفاض 7 نقاط منذ بداية المتابعة التجريبية.</p></div>
        </section>
        <section className="metric-card app-card"><span className="card-kicker">آخر قراءة</span><strong>11<small>/24</small></strong><p>مؤشر تجريبي متوسط</p></section>
        <section className="metric-card app-card"><span className="card-kicker">التغيّر</span><strong>−39<small>%</small></strong><p>من الجلسة الأولى</p></section>
        <section className="history-card app-card"><div className="card-title-row"><div><span className="card-kicker">سجل القياس</span><h2>تفاصيل الجلسات</h2></div></div><div className="history-table"><div className="history-head"><span>الجلسة</span><span>التاريخ</span><span>الدرجة</span><span>التغيّر</span></div>{sessions.map(s=><div className="history-row" key={s.n}><strong>{s.n}</strong><span>{s.date}</span><span>{s.score}</span><i>{s.change}</i></div>)}</div></section>
        <section className="clinical-notes app-card"><span className="card-kicker">ملاحظات الأخصائي</span><h2>سياق قبل الرقم</h2><textarea defaultValue="ظهر تحسّن تدريجي في النوم والقدرة على التركيز. يُنصح بمواصلة المتابعة والتحقق من ثبات التحسّن في الجلسة القادمة." /><button>حفظ الملاحظة</button></section>
      </div>
    </AppShell>
  );
}
