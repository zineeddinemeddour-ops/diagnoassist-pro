import type { Metadata } from "next";
import { AppPageHeader, AppShell, ArrowIcon, SafetyNote } from "../components";

export const metadata: Metadata = { title: "نتيجة التحليل | DiagnoAssist", description: "احتمالات منظمة للمراجعة الإكلينيكية." };

const possibilities = [
  {n:"01",title:"اضطراب القلق العام",level:"توافق مرتفع",width:"84%",copy:"يتوافق مع نمط التوتر المستمر، صعوبات النوم والتركيز، وتأثير الأعراض في الأداء اليومي."},
  {n:"02",title:"اضطراب التكيّف",level:"توافق متوسط",width:"61%",copy:"يحتاج إلى توضيح العلاقة بحدث ضاغط محدد، بداية الأعراض، واستمرارها عبر الزمن."},
  {n:"03",title:"حالة طبية أو دوائية",level:"يجب الاستبعاد",width:"38%",copy:"تتطلب مراجعة التاريخ الصحي، الأدوية، المنبهات، وأنماط النوم قبل تثبيت أي تفسير."},
];

export default function ResultsPage() {
  return (
    <AppShell active="/results">
      <AppPageHeader eyebrow="الخطوة 03" title="احتمالات للمراجعة" description="ليست نتيجة نهائية؛ بل ترتيب أولي للأسئلة وعوامل الاستبعاد." action={<a className="button button-primary" href="../assessment/">اختيار اختبار <ArrowIcon /></a>} />
      <SafetyNote>هذه النسب توضيحية لتجربة الواجهة ولا تمثل نموذجًا طبيًا معتمدًا أو تشخيصًا حقيقيًا.</SafetyNote>
      <div className="results-stack">
        {possibilities.map((item, index)=><article className={`result-card app-card${index===0?" primary-result":""}`} key={item.n}><span className="result-number">{item.n}</span><div className="result-copy"><span>{item.level}</span><h2>{item.title}</h2><p>{item.copy}</p><div className="result-meter"><i style={{width:item.width}} /></div></div><button aria-label={`مراجعة ${item.title}`}>↗</button></article>)}
      </div>
      <section className="next-question app-card"><div><span className="card-kicker">الخطوة التالية</span><h2>ما الذي يحتاج إلى قياس؟</h2><p>اختر اختبارًا مناسبًا للسؤال الإكلينيكي، لا للاسم التشخيصي وحده.</p></div><a className="button button-primary" href="../assessment/">فتح الاختبار التجريبي <ArrowIcon /></a></section>
    </AppShell>
  );
}
