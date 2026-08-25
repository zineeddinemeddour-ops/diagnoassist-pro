import type { Metadata } from "next";
import { AppPageHeader, AppShell, ArrowIcon, CheckIcon, SafetyNote } from "../components";

export const metadata: Metadata = { title: "ملف الحالة | DiagnoAssist", description: "مساحة عمل منظمة لمتابعة الحالة والجلسات." };

export default function WorkspacePage() {
  return (
    <AppShell active="/workspace">
      <AppPageHeader eyebrow="نظرة عامة" title="ملف الحالة" description="صورة مختصرة تجمع السياق، الجلسات، والخطوات القادمة." action={<a className="button button-primary" href="../diagnosis/">بدء تحليل جديد <ArrowIcon /></a>} />
      <SafetyNote>جميع الأسماء والبيانات المعروضة هنا خيالية ومخصصة لشرح التصميم.</SafetyNote>
      <div className="dashboard-grid">
        <section className="case-profile app-card">
          <div className="profile-head"><div className="avatar">ح</div><div><span>رقم الملف DA-027</span><h2>حالة تجريبية مجهّلة</h2><p>جلسة متابعة • آخر تحديث اليوم</p></div><i className="status-pill">نشطة</i></div>
          <div className="profile-facts"><div><span>الفئة العمرية</span><strong>25–34 سنة</strong></div><div><span>نوع المتابعة</span><strong>دعم نفسي فردي</strong></div><div><span>عدد الجلسات</span><strong>4 جلسات</strong></div><div><span>المتابعة القادمة</span><strong>بعد 7 أيام</strong></div></div>
          <div className="case-focus"><span>محور المتابعة الحالي</span><p>صعوبات نوم متكررة مع توتر مستمر وانخفاض في القدرة على التركيز خلال الأسابيع الأخيرة.</p><div><i>اضطراب النوم</i><i>توتر</i><i>صعوبة التركيز</i></div></div>
        </section>
        <section className="next-action app-card"><span className="card-kicker">الإجراء المقترح</span><h2>استكمال التشخيص الفارقي</h2><p>راجع مؤشرات القلق العام واضطراب التكيّف، ثم حدّد الاختبار الأنسب.</p><a href="../diagnosis/">متابعة المسار <ArrowIcon /></a><div className="action-progress"><i /><i className="done" /><i className="done" /></div></section>
        <section className="session-list app-card">
          <div className="card-title-row"><div><span className="card-kicker">السجل الزمني</span><h2>آخر الجلسات</h2></div><a href="../analytics/">عرض التحليلات</a></div>
          {[{n:"04",d:"اليوم",t:"مراجعة النوم ومستوى التوتر",s:"مكتملة"},{n:"03",d:"قبل 7 أيام",t:"تطبيق اختبار متابعة مختصر",s:"مكتملة"},{n:"02",d:"قبل 14 يومًا",t:"تحديد أهداف المتابعة",s:"مكتملة"}].map(item=><div className="session-row" key={item.n}><span>{item.n}</span><div><strong>{item.t}</strong><small>{item.d}</small></div><i><CheckIcon /> {item.s}</i></div>)}
        </section>
      </div>
    </AppShell>
  );
}
