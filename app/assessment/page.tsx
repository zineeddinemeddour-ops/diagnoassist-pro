import type { Metadata } from "next";
import { AppPageHeader, AppShell, ArrowIcon, SafetyNote, StatusChip } from "../components";

export const metadata: Metadata = { title: "القياس | DiagnoAssist", description: "اختيار وتوثيق أداة قياس مناسبة قبل استخدامها." };

const questions = [
  "خلال الفترة المحددة، إلى أي مدى أثّر التوتر في روتين النوم؟",
  "إلى أي مدى أثّرت صعوبة التركيز في أداء المهام اليومية؟",
  "إلى أي مدى استطعت استخدام استراتيجيات التهدئة المتفق عليها؟",
];
const answers = ["لا أثر", "أثر بسيط", "أثر متوسط", "أثر كبير"];

export default function AssessmentPage() {
  return (
    <AppShell active="/assessment">
      <AppPageHeader eyebrow="القياس والمتابعة" title="أداة متابعة تجريبية" description="نموذج غير معياري يوضح تجربة التطبيق فقط، ولا يمثل اختبارًا نفسيًا منشورًا." action={<StatusChip tone="info">3 بنود · 2 دقيقة</StatusChip>} />
      <SafetyNote tone="warning">قبل استخدام أي مقياس حقيقي، تحقّق من المصدر، الترخيص، صلاحية النسخة العربية، الفئة المستهدفة، وتعليمات التفسير.</SafetyNote>

      <section className="app-card instrument-profile">
        <div><span className="card-kicker">بطاقة الأداة</span><h2>متابعة أثر التوتر — نموذج واجهة</h2><p>بنود عامة صيغت خصيصًا لهذه المعاينة، وليست مقياسًا سريريًا معياريًا.</p></div>
        <dl><div><dt>المصدر</dt><dd>نموذج DiagnoAssist التجريبي</dd></div><div><dt>الحالة</dt><dd><StatusChip tone="warning">غير صالح للاستخدام السريري</StatusChip></dd></div><div><dt>الفترة المرجعية</dt><dd>آخر 7 أيام</dd></div><div><dt>التسجيل</dt><dd>وصفي فقط · بلا عتبات تشخيصية</dd></div></dl>
      </section>

      <form className="assessment-form" action="../analytics/" method="get">
        <div className="assessment-list">
          {questions.map((question,index)=><fieldset className="question-card app-card" key={question}><legend><span>{String(index+1).padStart(2,"0")}</span>{question}</legend><div>{answers.map((answer,answerIndex)=><label key={answer}><input type="radio" name={`q${index+1}`} value={answerIndex} defaultChecked={answerIndex===1} /><span>{answer}</span></label>)}</div></fieldset>)}
        </div>
        <label className="consent-row app-card"><input type="checkbox" required defaultChecked /><span><strong>تم شرح غرض القياس وحدوده</strong><small>الموافقة هنا جزء من النموذج التعليمي وليست سجلًا قانونيًا.</small></span></label>
        <div className="assessment-submit"><a className="button button-secondary" href="../results/">العودة للمصفوفة</a><button className="button button-primary" type="submit">حفظ المثال وعرض التقدّم <ArrowIcon /></button></div>
      </form>
    </AppShell>
  );
}
