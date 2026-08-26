import type { Metadata } from "next";
import { ArrowIcon, Brand, CheckIcon, Field, Icon, SafetyNote } from "../components";
import { DemoForm } from "../demo-forms";

export const metadata: Metadata = { title: "دخول النسخة التجريبية | DiagnoAssist", description: "الوصول إلى مساحة العمل التجريبية في DiagnoAssist." };

export default function LoginPage() {
  return (
    <main className="auth-page">
      <section className="auth-story">
        <Brand inverted />
        <div className="auth-story-copy"><span className="auth-kicker">مساحة العمل السريرية</span><h1>عُد إلى سياق الحالة،<br />لا إلى الفوضى.</h1><p>الملاحظات والمراجعة والقياس والمتابعة في مكان واحد واضح.</p></div>
        <div className="auth-preview-card"><div><Icon name="calendar" /><span><small>الموعد التالي</small><strong>14:30 · جلسة متابعة</strong></span></div><i>الحالة التجريبية 027</i></div>
        <div className="auth-proof"><div><CheckIcon /><span><strong>إشراف بشري</strong><small>المختص يراجع ويعتمد</small></span></div><div><CheckIcon /><span><strong>بيانات مجهّلة</strong><small>للعرض فقط</small></span></div></div>
      </section>
      <section className="auth-panel">
        <a className="back-link" href="../">← العودة إلى الموقع</a>
        <DemoForm className="auth-card" destination="../workspace/">
          <div className="auth-card-heading"><span className="auth-icon"><Icon name="shield" /></span><small>وصول تجريبي</small><h2>تسجيل الدخول</h2><p>أدخل أي بيانات تجريبية لفتح مساحة العمل. لا يتم التحقق منها أو حفظها.</p></div>
          <Field label="البريد الإلكتروني" name="identity" type="email" placeholder="demo@clinic.example" required autoComplete="email" />
          <Field label="كلمة المرور" name="password" type="password" placeholder="8 أحرف على الأقل" required autoComplete="current-password" />
          <div className="form-meta"><label><input type="checkbox" name="remember" /> تذكّرني</label><a href="#">نسيت كلمة المرور؟</a></div>
          <button className="button button-primary auth-submit" type="submit">فتح الحالة التجريبية <ArrowIcon /></button>
          <SafetyNote tone="warning">لا تُدخل اسم مريض أو بريده أو أي معلومة صحية حقيقية.</SafetyNote>
          <p className="auth-switch">تريد التعرف على التجربة أولًا؟ <a href="../register/">اطلب جولة تعريفية</a></p>
        </DemoForm>
      </section>
    </main>
  );
}
