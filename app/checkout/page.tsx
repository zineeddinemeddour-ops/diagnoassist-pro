import type { Metadata } from "next";
import { ArrowIcon, Brand, CheckIcon, SafetyNote } from "../components";

export const metadata: Metadata = { title: "تفعيل الباقة | DiagnoAssist", description: "مراجعة باقة DiagnoAssist قبل التفعيل." };

export default function CheckoutPage() {
  return (
    <main className="checkout-page">
      <header className="checkout-header shell"><Brand /><a href="../pricing/">العودة إلى الباقات</a></header>
      <div className="checkout-grid shell">
        <section className="checkout-copy">
          <span className="page-kicker">الخطوة الأخيرة</span><h1>راجع الباقة<br />قبل التفعيل.</h1><p>صفحة دفع احترافية يجب أن تتصل بمزوّد دفع معتمد. لذلك تعرض هذه النسخة رحلة التفعيل فقط، دون جمع أرقام بطاقات أو رموز أمان.</p>
          <div className="secure-principles"><div><CheckIcon /><span><strong>لا بيانات مالية في المتصفح</strong><small>المعالجة الحقيقية تكون لدى مزوّد دفع معتمد.</small></span></div><div><CheckIcon /><span><strong>لا حفظ لبيانات البطاقة</strong><small>لا تطلب الواجهة أي معلومات حساسة في النسخة التجريبية.</small></span></div></div>
        </section>
        <section className="order-card">
          <div className="order-heading"><span>ملخص الطلب</span><strong>خطة الممارسة</strong></div>
          <div className="order-line"><span>الاشتراك الشهري</span><strong>5,500 دج</strong></div>
          <div className="order-line muted"><span>الضريبة</span><strong>تُحدد عند الإطلاق</strong></div>
          <div className="order-total"><span>الإجمالي المبدئي</span><strong>5,500 دج</strong></div>
          <SafetyNote>الدفع غير مفعّل في هذه النسخة. لا تُدخل أو ترسل أي بيانات مالية.</SafetyNote>
          <a className="button button-primary checkout-button" href="../workspace/">استكشاف مساحة العمل <ArrowIcon /></a>
          <a className="text-link" href="../pricing/">تغيير الباقة</a>
        </section>
      </div>
    </main>
  );
}
