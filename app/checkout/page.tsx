import type { Metadata } from "next";
import { ArrowIcon, Brand, CheckIcon, Field, SafetyNote } from "../components";
import { DemoForm } from "../demo-forms";

export const metadata: Metadata = { title: "طلب عرض | DiagnoAssist", description: "طلب جولة تعريفية لنموذج DiagnoAssist." };

export default function CheckoutPage() {
  return (
    <main className="request-page">
      <header className="checkout-header shell"><Brand /><a href="../pricing/">← العودة إلى خيارات الوصول</a></header>
      <div className="request-grid shell">
        <section className="request-copy"><span className="page-kicker">طلب عرض مهني</span><h1>ابدأ بالأسئلة الصحيحة<br />قبل التقنية.</h1><p>نراجع أولًا سير العمل، نوع البيانات، الأدوار، ومتطلبات الحوكمة. بعدها فقط يمكن تحديد نطاق منتج حقيقي.</p><div className="request-points"><div><CheckIcon /><span><strong>الاحتياج السريري</strong><small>ما القرار الذي تحتاج الأداة إلى دعمه؟</small></span></div><div><CheckIcon /><span><strong>البيانات والخصوصية</strong><small>ما الذي سيُجمع، ومن يراه، وكم يُحتفظ به؟</small></span></div><div><CheckIcon /><span><strong>القياس والمسؤولية</strong><small>ما الأدوات المرخّصة؟ ومن يراجع المخرجات؟</small></span></div></div></section>
        <DemoForm className="request-card" destination="../workspace/">
          <div className="auth-card-heading"><small>نموذج استعراضي</small><h2>طلب جولة تعريفية</h2><p>لن يُرسل النموذج فعليًا؛ سيأخذك إلى مساحة العمل التجريبية.</p></div>
          <Field label="الاسم المهني" name="name" placeholder="الاسم المعروض" required autoComplete="name" />
          <Field label="بريد العمل" name="email" type="email" placeholder="name@clinic.example" required autoComplete="email" />
          <label className="form-field"><span>نوع البيئة *</span><select name="environment" required defaultValue=""><option value="" disabled>اختر البيئة</option><option>ممارسة فردية</option><option>عيادة أو فريق</option><option>مركز أو مؤسسة</option></select></label>
          <SafetyNote>لا تكتب أسماء مرضى أو تفاصيل حالات أو أي بيانات صحية في هذا النموذج.</SafetyNote>
          <button className="button button-primary auth-submit" type="submit">متابعة إلى النموذج <ArrowIcon /></button>
        </DemoForm>
      </div>
    </main>
  );
}
