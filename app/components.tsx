import type { ReactNode } from "react";

export function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function CheckIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="m6.5 12.5 3.2 3.2 7.8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand${compact ? " brand-compact" : ""}`} href="../" aria-label="DiagnoAssist — الرئيسية">
      <span className="brand-mark" aria-hidden="true"><span>D</span><i>+</i></span>
      <span className="brand-copy"><strong>DIAGNO<span>ASSIST</span></strong><small>للأخصائيين النفسانيين</small></span>
    </a>
  );
}

export function MarketingHeader() {
  return (
    <nav className="site-nav page-nav" aria-label="التنقل الرئيسي">
      <div className="nav-inner shell">
        <Brand />
        <div className="nav-links">
          <a href="../#features">المميزات</a>
          <a href="../#workflow">كيف تعمل</a>
          <a href="../pricing/">الباقات</a>
          <a href="../#faq">الأسئلة الشائعة</a>
        </div>
        <a className="button button-small" href="../login/">تسجيل الدخول <ArrowIcon /></a>
      </div>
    </nav>
  );
}

export function PageFooter() {
  return (
    <footer className="compact-footer">
      <div className="shell compact-footer-inner">
        <Brand compact />
        <p>أداة مساعدة لتنظيم التقييم، وليست بديلًا عن الحكم الإكلينيكي للأخصائي.</p>
        <span>© 2026 DiagnoAssist</span>
      </div>
    </footer>
  );
}

const navItems = [
  ["/workspace", "../workspace/", "نظرة عامة", "01"],
  ["/diagnosis", "../diagnosis/", "التشخيص الفارقي", "02"],
  ["/results", "../results/", "نتيجة التحليل", "03"],
  ["/assessment", "../assessment/", "الاختبار", "04"],
  ["/analytics", "../analytics/", "التقدّم", "05"],
];

export function AppShell({ children, active }: { children: ReactNode; active: string }) {
  return (
    <main className="app-shell">
      <aside className="app-sidebar">
        <Brand compact />
        <div className="case-switcher"><span>الحالة الحالية</span><strong>الحالة 027</strong><small>جلسة المتابعة الرابعة</small></div>
        <nav aria-label="مسار العمل السريري">
          {navItems.map(([activePath, href, label, number]) => <a key={href} className={active === activePath ? "active" : ""} href={href}><i>{number}</i><span>{label}</span></a>)}
        </nav>
        <div className="sidebar-note"><span>D+</span><p>المنصة تدعم قرارك ولا تستبدله.</p></div>
        <a className="sidebar-exit" href="../">العودة للموقع</a>
      </aside>
      <section className="app-content">
        <header className="app-topbar">
          <div className="mobile-app-brand"><Brand compact /></div>
          <div className="app-breadcrumb"><span>مساحة العمل</span><i>•</i><strong>الحالة 027</strong></div>
          <div className="clinician-chip"><span>د. ن</span><div><strong>الأخصائي</strong><small>جلسة آمنة</small></div></div>
        </header>
        <div className="app-page">{children}</div>
      </section>
    </main>
  );
}

export function AppPageHeader({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: ReactNode }) {
  return <div className="app-page-header"><div><span>{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>{action}</div>;
}

export function Field({ label, placeholder, type = "text", name, required = false }: { label: string; placeholder: string; type?: string; name: string; required?: boolean }) {
  return <label className="form-field"><span>{label}{required && <b> *</b>}</span><input name={name} type={type} placeholder={placeholder} required={required} /></label>;
}

export function SafetyNote({ children }: { children: ReactNode }) {
  return <div className="safety-note"><span>i</span><p>{children}</p></div>;
}
