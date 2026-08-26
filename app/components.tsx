import type { ReactNode } from "react";

export function Icon({ name }: { name: "arrow" | "check" | "shield" | "spark" | "file" | "chart" | "calendar" | "case" | "note" | "assessment" | "help" }) {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    check: <path d="m6.5 12.5 3.2 3.2 7.8-8"/>,
    shield: <><path d="M12 3.5 19 6v5c0 4.8-2.7 7.8-7 9.5C7.7 18.8 5 15.8 5 11V6l7-2.5Z"/><path d="m9 12 2 2 4-4"/></>,
    spark: <path d="M12 3.5c.6 4.8 3.2 7.4 8 8-4.8.6-7.4 3.2-8 8-.6-4.8-3.2-7.4-8-8 4.8-.6 7.4-3.2 8-8Z"/>,
    file: <><path d="M7 3.5h7l4 4V20H7V3.5Z"/><path d="M14 3.5v4h4M10 12h5M10 15.5h5"/></>,
    chart: <><path d="M5 19V9M12 19V5M19 19v-7"/><path d="M3.5 20.5h17"/></>,
    calendar: <><rect x="4" y="5.5" width="16" height="14" rx="2"/><path d="M8 3.5v4M16 3.5v4M4 10h16"/></>,
    case: <><rect x="4" y="6" width="16" height="14" rx="2"/><path d="M9 6V4h6v2M4 11h16M10 14h4"/></>,
    note: <><path d="M6 3.5h9l3 3V20H6Z"/><path d="M9 10h6M9 14h6M9 17h4"/></>,
    assessment: <><rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="m8.5 9 1.3 1.3 2.2-2.6M13.5 9h2M8.5 15l1.3 1.3 2.2-2.6M13.5 15h2"/></>,
    help: <><circle cx="12" cy="12" r="8.5"/><path d="M9.8 9a2.3 2.3 0 1 1 3.4 2c-.8.4-1.2.9-1.2 1.8M12 16.5h.01"/></>,
  };
  return <svg className="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

export function ArrowIcon() { return <Icon name="arrow" />; }
export function CheckIcon() { return <Icon name="check" />; }

export function Brand({ compact = false, inverted = false }: { compact?: boolean; inverted?: boolean }) {
  return (
    <a className={`brand${compact ? " brand-compact" : ""}${inverted ? " brand-inverted" : ""}`} href="../" aria-label="DiagnoAssist — الرئيسية">
      <span className="brand-mark" aria-hidden="true"><span>D</span><i>+</i></span>
      <span className="brand-copy"><strong>Diagno<span>Assist</span></strong><small>مساحة القرار السريري</small></span>
    </a>
  );
}

export function MarketingHeader() {
  return (
    <header className="site-header">
      <nav className="shell nav-inner" aria-label="التنقل الرئيسي">
        <Brand />
        <div className="nav-links">
          <a href="../#product">المنصة</a><a href="../#workflow">مسار العمل</a><a href="../#principles">مبادئ الاستخدام</a><a href="../pricing/">الوصول التجريبي</a>
        </div>
        <a className="button button-secondary button-small" href="../login/">دخول النسخة التجريبية <ArrowIcon /></a>
      </nav>
    </header>
  );
}

export function PageFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div><Brand compact inverted /><p>نموذج عربي لمساحة عمل تساعد المختص على تنظيم المعطيات ومراجعة قراره السريري.</p></div>
        <div className="footer-links"><a href="../#product">المنصة</a><a href="../#principles">حدود الاستخدام</a><a href="../pricing/">طلب عرض</a><a href="../login/">الدخول</a></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 DiagnoAssist</span><span>نموذج استعراضي — لا تُدخل بيانات صحية حقيقية</span></div>
    </footer>
  );
}

const navItems = [
  ["/workspace", "../workspace/", "اليوم", "calendar"],
  ["/diagnosis", "../diagnosis/", "المراجعة السريرية", "case"],
  ["/results", "../results/", "ملخص القرار", "note"],
  ["/assessment", "../assessment/", "القياس", "assessment"],
  ["/analytics", "../analytics/", "التقدّم", "chart"],
] as const;

export function AppShell({ children, active }: { children: ReactNode; active: string }) {
  return (
    <main className="app-shell">
      <aside className="app-sidebar">
        <div className="sidebar-head"><Brand compact inverted /><span className="demo-badge">نموذج تجريبي</span></div>
        <button className="case-switcher" type="button" aria-label="الحالة الحالية: ملف تجريبي 027">
          <span className="case-avatar">م</span><span><small>الحالة الحالية</small><strong>ملف تجريبي 027</strong><em>جلسة المتابعة 04</em></span><b aria-hidden="true">⌄</b>
        </button>
        <nav aria-label="مسار العمل السريري">
          {navItems.map(([activePath, href, label, icon]) => <a key={href} className={active === activePath ? "active" : ""} href={href}><Icon name={icon} /><span>{label}</span></a>)}
        </nav>
        <div className="sidebar-spacer" />
        <div className="sidebar-guidance"><Icon name="shield" /><p><strong>المختص يراجع ويعتمد</strong><span>الاقتراحات لا تستبدل المقابلة والحكم المهني.</span></p></div>
        <a className="sidebar-exit" href="../">العودة للموقع</a>
      </aside>
      <section className="app-content">
        <header className="app-topbar">
          <div className="mobile-app-brand"><Brand compact /></div>
          <div className="topbar-context"><span className="status-dot" /> حالة تجريبية مجهّلة <i>•</i> آخر تحديث: اليوم، 10:30</div>
          <div className="clinician-chip"><span>ن</span><div><strong>المختص التجريبي</strong><small>وضع العرض</small></div></div>
        </header>
        <div className="app-page">{children}</div>
      </section>
      <nav className="mobile-bottom-nav" aria-label="التنقل على الهاتف">
        {navItems.map(([activePath, href, label, icon]) => <a key={href} className={active === activePath ? "active" : ""} href={href}><Icon name={icon} /><span>{label}</span></a>)}
      </nav>
    </main>
  );
}

export function AppPageHeader({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: ReactNode }) {
  return <div className="app-page-header"><div><span>{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>{action}</div>;
}

export function Field({ label, placeholder, type = "text", name, required = false, autoComplete }: { label: string; placeholder: string; type?: string; name: string; required?: boolean; autoComplete?: string }) {
  return <label className="form-field"><span>{label}{required && <b> *</b>}</span><input name={name} type={type} placeholder={placeholder} required={required} autoComplete={autoComplete} /></label>;
}

export function SafetyNote({ children, tone = "info" }: { children: ReactNode; tone?: "info" | "warning" }) {
  return <div className={`safety-note ${tone}`} role="note"><Icon name={tone === "warning" ? "shield" : "help"} /><p>{children}</p></div>;
}

export function StatusChip({ children, tone = "neutral" }: { children: ReactNode; tone?: "success" | "warning" | "neutral" | "info" }) {
  return <span className={`status-chip ${tone}`}>{children}</span>;
}
