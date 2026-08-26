import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://zineeddinemeddour-ops.github.io/diagnoassist-pro";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DiagnoAssist | مساحة القرار السريري",
  description: "نموذج عربي لمساحة عمل تساعد المختص النفسي على تنظيم السياق، مراجعة الفرضيات، القياس، والمتابعة مع إشراف بشري واضح.",
  openGraph: {
    title: "DiagnoAssist | سياق أوضح لقرار أكثر مسؤولية",
    description: "الملاحظات والمراجعة والقياس والمتابعة في مساحة عمل عربية واحدة للمختص النفسي.",
    type: "website",
    url: siteUrl,
    images: [{ url: siteUrl + "/og.svg", width: 1200, height: 630, alt: "DiagnoAssist — مساحة القرار السريري" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DiagnoAssist | سياق أوضح لقرار أكثر مسؤولية",
    description: "مساحة عمل عربية تنظّم القرار السريري وتبقيه بيد المختص.",
    images: [siteUrl + "/og.svg"],
  },
  icons: { icon: siteUrl + "/favicon.svg", shortcut: siteUrl + "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
