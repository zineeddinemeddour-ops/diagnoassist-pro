import type { Metadata } from "next";
import { AppPageHeader, AppShell, ArrowIcon, SafetyNote, StatusChip } from "../components";

export const metadata: Metadata = { title: "التقدّم | DiagnoAssist", description: "عرض التغيّر مع سياق كل جلسة." };

const sessions = [
  { n: "01", date: "05 أغسطس", value: "مرتفع", context: "تقييم أولي" },
  { n: "02", date: "12 أغسطس", value: "متوسط", context: "بدء خطة النوم" },
  { n: "03", date: "19 أغسطس", value: "متوسط", context: "تحسن محدود" },
  { n: "04", date: "26 أغسطس", value: "أخف", context: "تحسن في النوم" },
];

export default function AnalyticsPage() {
  return (
    <AppShell active="/analytics">
      <AppPageHeader eyebrow="ملف تجريبي 027 · 4 جلسات" title="التقدّم مع السياق" description="الاتجاه العام مفيد، لكن تفاصيل الجلسة والتفسير المهني أهم من الرقم وحده." action={<a className="button button-primary" href="../workspace/">إنهاء المسار <ArrowIcon /></a>} />
      <SafetyNote>الرسم والقيم وصفية وتجريبية، ولا تمثل درجات مقياس معياري أو دليلًا على فعالية علاج.</SafetyNote>

      <div className="progress-grid">
        <section className="app-card progress-chart-card">
          <div className="card-title-row"><div><span className="card-kicker">مؤشر وصفي تجريبي</span><h2>أثر التوتر في النوم والأداء</h2></div><StatusChip tone="success">اتجاه نحو التحسن</StatusChip></div>
          <div className="line-chart" role="img" aria-label="انخفاض وصفي تدريجي من الجلسة الأولى إلى الرابعة">
            <div className="chart-y"><span>أثر أكبر</span><span>متوسط</span><span>أخف</span></div>
            <svg viewBox="0 0 700 230" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#167f79" stopOpacity=".22"/><stop offset="1" stopColor="#167f79" stopOpacity="0"/></linearGradient></defs><path className="grid-line" d="M0 35H700M0 115H700M0 195H700"/><path className="area" d="M40 48 C130 48 170 78 245 88 S365 125 445 132 S565 165 660 178 L660 220 L40 220Z"/><path className="trend-line" d="M40 48 C130 48 170 78 245 88 S365 125 445 132 S565 165 660 178"/><g><circle cx="40" cy="48" r="6"/><circle cx="245" cy="88" r="6"/><circle cx="445" cy="132" r="6"/><circle cx="660" cy="178" r="7"/></g></svg>
            <div className="chart-x"><span>05 أغسطس</span><span>12 أغسطس</span><span>19 أغسطس</span><span>26 أغسطس</span></div>
          </div>
          <p className="chart-insight"><strong>ملاحظة المختص:</strong> ظهر تحسن وصفي في بدء النوم، مع استمرار صعوبة التركيز تحت ضغط العمل. يحتاج الاتجاه إلى متابعة قبل استنتاج ثباته.</p>
        </section>
        <aside className="app-card progress-summary"><span className="card-kicker">ملخص المتابعة</span><div className="summary-number"><strong>4</strong><span>جلسات موثقة</span></div><dl><div><dt>بداية المتابعة</dt><dd>05 أغسطس 2026</dd></div><div><dt>آخر تحديث</dt><dd>26 أغسطس 2026</dd></div><div><dt>الموعد القادم</dt><dd>02 سبتمبر 2026</dd></div></dl><a href="../assessment/">مراجعة أداة القياس</a></aside>
        <section className="app-card progress-history"><div className="card-title-row"><div><span className="card-kicker">سجل زمني</span><h2>ما تغيّر بين الجلسات</h2></div></div><div className="progress-table"><div className="progress-table-head"><span>الجلسة</span><span>التاريخ</span><span>الوصف</span><span>السياق</span></div>{sessions.map(s=><div className="progress-table-row" key={s.n}><strong>{s.n}</strong><span>{s.date}</span><StatusChip tone={s.value==="أخف"?"success":s.value==="مرتفع"?"warning":"info"}>{s.value}</StatusChip><span>{s.context}</span></div>)}</div></section>
      </div>
    </AppShell>
  );
}
