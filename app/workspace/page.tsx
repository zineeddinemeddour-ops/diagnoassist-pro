import type { Metadata } from "next";
import { AppPageHeader, AppShell, ArrowIcon, CheckIcon, Icon, SafetyNote, StatusChip } from "../components";

export const metadata: Metadata = { title: "اليوم | DiagnoAssist", description: "مساحة العمل اليومية للحالة التجريبية." };

const tasks = [
  { title: "استكمال عوامل الاستبعاد", meta: "ملف تجريبي 027 · الجلسة 04", tone: "warning" as const, status: "تحتاج مراجعة" },
  { title: "اعتماد ملخص الجلسة", meta: "جلسة اليوم · مسودة محفوظة", tone: "info" as const, status: "مسودة" },
  { title: "تسجيل موعد المتابعة", meta: "خلال 7 أيام · مدة مقترحة 50 دقيقة", tone: "neutral" as const, status: "لاحقًا" },
];

export default function WorkspacePage() {
  return (
    <AppShell active="/workspace">
      <AppPageHeader eyebrow="الأربعاء، 26 أغسطس" title="صباح الخير، د. ن" description="هذه أولويات اليوم في مساحة العمل التجريبية." action={<a className="button button-primary" href="../diagnosis/">متابعة الحالة <ArrowIcon /></a>} />
      <SafetyNote tone="warning">كل الأسماء والقيم هنا خيالية. لا تستخدم هذه النسخة لتسجيل بيانات مريض أو لاتخاذ قرار علاجي.</SafetyNote>

      <section className="overview-metrics" aria-label="ملخص اليوم">
        <article><span className="metric-icon teal"><Icon name="calendar" /></span><div><small>مواعيد اليوم</small><strong>03</strong><p>التالي 14:30</p></div></article>
        <article><span className="metric-icon amber"><Icon name="note" /></span><div><small>ملاحظات قيد الإكمال</small><strong>02</strong><p>واحدة تحتاج اعتمادًا</p></div></article>
        <article><span className="metric-icon blue"><Icon name="assessment" /></span><div><small>متابعات هذا الأسبوع</small><strong>07</strong><p>3 بانتظار الموعد</p></div></article>
      </section>

      <div className="workspace-grid">
        <section className="app-card task-queue">
          <div className="card-title-row"><div><span className="card-kicker">قائمة العمل</span><h2>ما يحتاج انتباهك</h2></div><span className="count-chip">3 عناصر</span></div>
          <div className="task-list">{tasks.map((task,index)=><a href={index===0?"../diagnosis/":"#"} className="task-row" key={task.title}><span className={`task-check ${index===2?"done":""}`}>{index===2?<CheckIcon />:index+1}</span><div><strong>{task.title}</strong><small>{task.meta}</small></div><StatusChip tone={task.tone}>{task.status}</StatusChip><ArrowIcon /></a>)}</div>
        </section>

        <aside className="app-card next-appointment">
          <div className="card-title-row"><div><span className="card-kicker">الموعد التالي</span><h2>اليوم، 14:30</h2></div><Icon name="calendar" /></div>
          <div className="appointment-person"><span>م</span><div><strong>ملف تجريبي 027</strong><small>جلسة متابعة · 50 دقيقة</small></div></div>
          <dl><div><dt>محور الجلسة</dt><dd>مراجعة النوم والتوتر</dd></div><div><dt>آخر ملاحظة</dt><dd>قبل 7 أيام</dd></div></dl>
          <a className="button button-secondary" href="../diagnosis/">فتح ملف الحالة <ArrowIcon /></a>
        </aside>

        <section className="app-card recent-cases">
          <div className="card-title-row"><div><span className="card-kicker">آخر نشاط</span><h2>الحالات الأخيرة</h2></div><button type="button" className="quiet-action">عرض الكل</button></div>
          <div className="case-table" role="table" aria-label="الحالات التجريبية الأخيرة">
            <div className="case-table-head" role="row"><span>الحالة</span><span>آخر جلسة</span><span>الخطوة الحالية</span><span>الحالة</span></div>
            <div className="case-table-row" role="row"><div><i>م</i><span><strong>ملف تجريبي 027</strong><small>دعم نفسي فردي</small></span></div><span>اليوم، 10:30</span><span>مراجعة عوامل الاستبعاد</span><StatusChip tone="warning">تحتاج مراجعة</StatusChip></div>
            <div className="case-table-row muted-row" role="row"><div><i>س</i><span><strong>ملف تجريبي 014</strong><small>متابعة دورية</small></span></div><span>أمس، 16:00</span><span>اعتماد ملاحظة الجلسة</span><StatusChip tone="success">مكتملة</StatusChip></div>
            <div className="case-table-row muted-row" role="row"><div><i>ر</i><span><strong>ملف تجريبي 009</strong><small>تقييم أولي</small></span></div><span>24 أغسطس</span><span>تحديد موعد المتابعة</span><StatusChip>مجدولة</StatusChip></div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
