import type { Metadata } from "next";
import { ArrowIcon, CheckIcon, MarketingHeader, PageFooter } from "../components";

export const metadata: Metadata = { title: "الباقات | DiagnoAssist", description: "باقات مرنة للأخصائيين والعيادات ومراكز الصحة النفسية." };

const plans = [
  { name: "البداية", audience: "للأخصائي الفردي", price: "2,000", accent: "mint", features: ["مستخدم واحد", "5 ملفات حالات", "اختباران أساسيان", "4 جلسات لكل حالة"] },
  { name: "الممارسة", audience: "للعيادات النشطة", price: "5,500", accent: "blue", popular: true, features: ["حتى 3 مستخدمين", "20 ملف حالة", "مكتبة اختبارات موسعة", "10 جلسات لكل حالة"] },
  { name: "المركز", audience: "للفرق والمؤسسات", price: "22,000", accent: "navy", features: ["مستخدمون متعددون", "ملفات حالات موسعة", "مكتبة الاختبارات الكاملة", "سجل جلسات غير محدود"] },
];

export default function PricingPage() {
  return (
    <main className="subpage">
      <MarketingHeader />
      <section className="pricing-hero shell"><span className="page-kicker">باقات واضحة بلا تعقيد</span><h1>اختر المساحة التي<br />تناسب ممارستك.</h1><p>ابدأ بالحجم المناسب اليوم، وانتقل إلى الخطة التالية عندما ينمو فريقك.</p></section>
      <section className="pricing-grid shell">
        {plans.map((plan) => <article key={plan.name} className={`plan-card plan-${plan.accent}${plan.popular ? " popular" : ""}`}>
          {plan.popular && <span className="popular-label">الأكثر ملاءمة</span>}
          <div className="plan-top"><span>{plan.audience}</span><h2>{plan.name}</h2></div>
          <div className="plan-price"><strong>{plan.price}</strong><span>دج<br /><small>شهريًا</small></span></div>
          <ul>{plan.features.map((feature) => <li key={feature}><CheckIcon /> {feature}</li>)}</ul>
          <a className={`button ${plan.popular ? "button-primary" : "button-quiet"}`} href="../checkout/">اختيار الباقة <ArrowIcon /></a>
        </article>)}
      </section>
      <section className="pricing-note shell"><strong>قبل الاشتراك</strong><p>هذه واجهة استعراضية للتصميم فقط. الأسعار والمزايا تحتاج إلى مراجعة واعتماد تجاري قبل إطلاق خدمة حقيقية.</p></section>
      <PageFooter />
    </main>
  );
}
