import type { Metadata } from "next";
import { ArrowIcon, CheckIcon, MarketingHeader, PageFooter } from "../components";

export const metadata: Metadata = { title: "الوصول التجريبي | DiagnoAssist", description: "طرق استكشاف DiagnoAssist للأفراد والفرق." };

const paths = [
  { name: "جولة ذاتية", audience: "للتعرّف السريع", tag: "متاح الآن", featured: true, features: ["حالة خيالية مجهّلة", "المسار السريري الكامل", "لا يتطلب بيانات حقيقية"], cta: "فتح النموذج", href: "../login/" },
  { name: "عرض للممارسات", audience: "للمختصين والعيادات", tag: "30 دقيقة", features: ["مراجعة الاحتياج وسير العمل", "نقاش الخصوصية والصلاحيات", "خطة اختبار قبل الإطلاق"], cta: "طلب عرض", href: "../checkout/" },
  { name: "تقييم مؤسسي", audience: "للمراكز والفرق", tag: "حسب النطاق", features: ["أدوار المستخدمين والمراجعة", "متطلبات الحوكمة والتدقيق", "تحقق قانوني وأمني مستقل"], cta: "بدء التقييم", href: "../checkout/" },
];

export default function PricingPage() {
  return (
    <main className="subpage">
      <MarketingHeader />
      <section className="pricing-hero shell"><span className="page-kicker">الوصول التجريبي</span><h1>استكشف المنصة<br />قبل أي قرار شراء.</h1><p>لا نعرض أسعارًا أو وعود امتثال غير معتمدة في نموذج التصميم. اختر طريقة الاستكشاف الأنسب لبيئة عملك.</p></section>
      <section className="access-grid shell">
        {paths.map((path)=><article key={path.name} className={`access-card${path.featured?" featured":""}`}>
          <div className="access-top"><span>{path.audience}</span><i>{path.tag}</i></div><h2>{path.name}</h2><ul>{path.features.map(feature=><li key={feature}><CheckIcon /> {feature}</li>)}</ul><a className={`button ${path.featured?"button-primary":"button-secondary"}`} href={path.href}>{path.cta} <ArrowIcon /></a>
        </article>)}
      </section>
      <section className="pricing-note shell"><strong>ملاحظة مهمة</strong><p>أي إطلاق فعلي يحتاج إلى تحقق مستقل من حماية البيانات، التراخيص المهنية، صلاحية أدوات القياس، الأمن، وشروط الاستخدام في البلد المستهدف.</p></section>
      <PageFooter />
    </main>
  );
}
