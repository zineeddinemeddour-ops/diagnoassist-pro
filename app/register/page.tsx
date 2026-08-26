import type { Metadata } from "next";
import { ArrowIcon, Brand, CheckIcon, Field, Icon, SafetyNote } from "../components";
import { DemoForm } from "../demo-forms";

export const metadata: Metadata = { title: "طلب جولة | DiagnoAssist", description: "استكشف نموذج DiagnoAssist المهني." };

export default function RegisterPage() {
  return (
    <main className="auth-page register-page">
      <section className="auth-story">
        <Brand inverted />
        <div className="auth-story-copy"><span className="auth-kicker">جولة تعريفية مهنية</span><h1>شاهد المسار كاملًا<br />قبل أي التزام.</h1><p>نستعرض طريقة تنظيم الحالة وحدود الأداة وما يلزم لإطلاقها بشكل مسؤول.</p></div>
        <div className="auth-preview-card"><div><Icon name="assessment" /><span><small>ما ستراه في الجولة</small><strong>سياق · مراجعة · قياس · متابعة</strong></span></div><i>30 دقيقة</i></div>
        <div className="auth-proof"><div><CheckIcon /><span><strong>لا بيانات مرضى</strong><small>العرض يعتمد حالة خيالية</small></span></div><div><CheckIcon /><span><strong>لا اشتراك تلقائي</strong><small>طلب اهتمام فقط</small></span></div></div>
      </section>
      <section className="auth-panel">
        <a className="back-link" href="../">← العودة إلى الموقع</a>
        <DemoForm className="auth-card register-card" destination="../workspace/">
          <div className="auth-card-heading"><span className="auth-icon"><Icon name="calendar" /></span><small>طلب جولة</small><h2>عرّفنا عن بيئة عملك</h2><p>هذه الحقول استعراضية؛ بعد الإرسال ستنتقل مباشرة إلى النموذج.</p></div>
          <div className="form-grid two"><Field label="الاسم المهني" name="name" placeholder="الاسم المعروض" required autoComplete="name" /><Field label="بريد العمل" name="email" type="email" placeholder="name@clinic.example" required autoComplete="email" /></div>
          <div className="form-grid two"><label className="form-field"><span>الدور المهني *</span><select name="specialty" required defaultValue=""><option value="" disabled>اختر الدور</option><option>أخصائي نفساني</option><option>طبيب نفسي</option><option>مسؤول عيادة</option><option>باحث أو متدرّب</option></select></label><label className="form-field"><span>حجم الممارسة *</span><select name="size" required defaultValue=""><option value="" disabled>اختر الحجم</option><option>ممارسة فردية</option><option>فريق صغير</option><option>مركز أو مؤسسة</option></select></label></div>
          <button className="button button-primary auth-submit" type="submit">مشاهدة النموذج الآن <ArrowIcon /></button>
          <SafetyNote>لا يتم إنشاء حساب أو إرسال طلب حقيقي في هذه النسخة، ولا تُحفظ المدخلات.</SafetyNote>
          <p className="auth-switch">لديك وصول بالفعل؟ <a href="../login/">سجّل الدخول</a></p>
        </DemoForm>
      </section>
    </main>
  );
}
