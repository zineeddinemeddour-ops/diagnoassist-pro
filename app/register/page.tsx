import type { Metadata } from "next";
import { ArrowIcon, Brand, CheckIcon, Field, SafetyNote } from "../components";
import { DemoForm } from "../demo-forms";

export const metadata: Metadata = { title: "إنشاء حساب | DiagnoAssist", description: "إنشاء مساحة عمل تجريبية على DiagnoAssist." };

export default function RegisterPage() {
  return (
    <main className="auth-page register-page">
      <section className="auth-story">
        <Brand />
        <div className="auth-story-copy"><span className="auth-kicker">ابدأ بسياق أوضح</span><h1>مساحة عمل<br />تتبع طريقتك.</h1><p>من أول ملاحظة إلى المتابعة، بخطوات واضحة لا تقطع تركيزك.</p></div>
        <div className="auth-proof"><div><CheckIcon /><span><strong>إعداد سريع</strong><small>خطوات قليلة للبدء</small></span></div><div><CheckIcon /><span><strong>نسخة استعراضية</strong><small>لا تحتاج بيانات حقيقية</small></span></div></div>
      </section>
      <section className="auth-panel">
        <a className="back-link" href="../">العودة إلى الموقع</a>
        <DemoForm className="auth-card register-card" destination="../pricing/">
          <div className="auth-card-heading"><span className="auth-icon">+</span><small>حساب جديد</small><h2>أنشئ مساحة عملك</h2><p>بيانات أساسية فقط للانتقال إلى اختيار الباقة.</p></div>
          <div className="form-grid two"><Field label="الاسم المهني" name="name" placeholder="الاسم المعروض" required /><Field label="البريد الإلكتروني" name="email" type="email" placeholder="name@clinic.com" required /></div>
          <div className="form-grid two"><Field label="اسم المستخدم" name="username" placeholder="clinic.name" required /><label className="form-field"><span>التخصص *</span><select name="specialty" required defaultValue=""><option value="" disabled>اختر التخصص</option><option>أخصائي نفساني</option><option>طبيب نفسي</option><option>أخصائي اجتماعي</option><option>مقيم في علم النفس</option></select></label></div>
          <div className="form-grid two"><Field label="كلمة المرور" name="password" type="password" placeholder="8 أحرف على الأقل" required /><Field label="تأكيد كلمة المرور" name="confirm" type="password" placeholder="••••••••" required /></div>
          <button className="button button-primary auth-submit" type="submit">متابعة إلى الباقات <ArrowIcon /></button>
          <SafetyNote>لا يتم إنشاء حساب حقيقي في هذا النموذج الاستعراضي، ولا تُحفظ البيانات.</SafetyNote>
          <p className="auth-switch">لديك حساب بالفعل؟ <a href="../login/">سجّل الدخول</a></p>
        </DemoForm>
      </section>
    </main>
  );
}
