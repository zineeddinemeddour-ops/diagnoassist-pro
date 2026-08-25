import type { Metadata } from "next";
import { AppPageHeader, AppShell, ArrowIcon, SafetyNote } from "../components";

export const metadata: Metadata = { title: "الاختبار | DiagnoAssist", description: "واجهة تطبيق اختبار نفسي داخل مسار الحالة." };

const questions = [
  "واجهت صعوبة في تهدئة الأفكار المتكررة.",
  "أثّر التوتر في قدرتي على النوم براحة.",
  "وجدت صعوبة في التركيز على المهام اليومية.",
  "شعرت بأن الإرهاق يحد من نشاطي المعتاد.",
];
const answers = ["أبدًا", "أحيانًا", "غالبًا", "تقريبًا دائمًا"];

export default function AssessmentPage() {
  return (
    <AppShell active="/assessment">
      <AppPageHeader eyebrow="الخطوة 04" title="اختبار متابعة مختصر" description="واجهة هادئة تساعد على تطبيق الأسئلة دون إرباك أو تشتت." action={<span className="assessment-progress">04 / 04</span>} />
      <SafetyNote>الأسئلة التالية نموذج تصميمي عام وليست مقياسًا نفسيًا معتمدًا أو بديلًا عن أداة مرخّصة.</SafetyNote>
      <form className="assessment-form" action="../analytics/" method="get">
        <div className="assessment-meta app-card"><div><span className="card-kicker">حالة تجريبية مجهّلة</span><h2>مؤشرات القلق والنوم</h2></div><div><span>الفترة المرجعية</span><strong>آخر أسبوعين</strong></div><div><span>الإجابات</span><strong>4 من 4</strong></div></div>
        <div className="assessment-list">
          {questions.map((question,index)=><fieldset className="question-card app-card" key={question}><legend><span>{String(index+1).padStart(2,"0")}</span>{question}</legend><div>{answers.map((answer,answerIndex)=><label key={answer}><input type="radio" name={`q${index+1}`} value={answerIndex} defaultChecked={answerIndex===1} /><span>{answer}</span></label>)}</div></fieldset>)}
        </div>
        <div className="assessment-submit"><a className="button button-quiet" href="../results/">العودة للنتيجة</a><button className="button button-primary" type="submit">حفظ وعرض التقدّم <ArrowIcon /></button></div>
      </form>
    </AppShell>
  );
}
