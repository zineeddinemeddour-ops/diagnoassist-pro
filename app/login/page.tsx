import type { Metadata } from "next";
import { ArrowIcon, Brand, CheckIcon, Field, SafetyNote } from "../components";
import { DemoForm } from "../demo-forms";

export const metadata: Metadata = { title: "تسجيل الدخول | DiagnoAssist", description: "الوصول إلى مساحة عمل DiagnoAssist." };

export default function LoginPage() {
  return (
    <main className="auth-page">
      <section className="auth-story">
        <Brand />
        <div className="auth-story-copy"><span className="auth-kicker">مساحة العمل الإكلينيكية</span><h1>عد إلى الحالة،<br />لا إلى الفوضى.</h1><p>ملاحظات الجلسات، الاختبارات، والتقدّم في سياق واحد متصل.</p></div>
        <div className="auth-proof"><div><CheckIcon /><span><strong>سجل واحد</strong><small>لكل حالة وكل جلسة</small></span></div><div><CheckIcon /><span><strong>قرارك أولًا</strong><small>مؤشرات للمساعدة فقط</small></span></div></div>
        <div className="auth-path" aria-hidden="true"><i /><i /><i /><b /></div>
      </section>
      <section className="auth-panel">
        <a className="back-link" href="../">العودة إلى الموقع</a>
        <DemoForm className="auth-card" destination="../workspace/">
          <div className="auth-card-heading"><span className="auth-icon">→</span><small>مرحبًا بعودتك</small><h2>تسجيل الدخول</h2><p>أدخل بيانات حسابك للمتابعة إلى مساحة العمل.</p></div>
          <Field label="البريد الإلكتروني أو اسم المستخدم" name="identity" placeholder="name@clinic.com" required />
          <Field label="كلمة المرور" name="password" type="password" placeholder="••••••••" required />
          <div className="form-meta"><label><input type="checkbox" name="remember" /> تذكّرني</label><a href="#">نسيت كلمة المرور؟</a></div>
          <button className="button button-primary auth-submit" type="submit">الدخول إلى المنصة <ArrowIcon /></button>
          <SafetyNote>هذه النسخة استعراضية؛ لا تُدخل بيانات حقيقية أو معلومات تخص المرضى.</SafetyNote>
          <p className="auth-switch">ليس لديك حساب؟ <a href="../register/">أنشئ حسابًا تجريبيًا</a></p>
        </DemoForm>
      </section>
    </main>
  );
}
