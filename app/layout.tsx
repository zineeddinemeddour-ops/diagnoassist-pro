import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://zineeddinemeddour-ops.github.io/diagnoassist-pro";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DiagnoAssist | مساحة عمل ذكية للأخصائي النفسي",
  description: "منصة عربية تساعد الأخصائي النفسي على تنظيم الأعراض، التشخيص الفارقي، الاختبارات، ومتابعة الحالة في سجل واحد.",
  openGraph: {
    title: "DiagnoAssist | وضوح أكبر لكل قرار إكلينيكي",
    description: "التقييم والاختبارات والمتابعة في مساحة عمل واحدة للأخصائي النفسي.",
    type: "website",
    url: siteUrl,
    images: [{ url: siteUrl + "/og.svg", width: 1200, height: 630, alt: "DiagnoAssist — Clarity for every clinical decision." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DiagnoAssist | وضوح أكبر لكل قرار إكلينيكي",
    description: "التقييم والاختبارات والمتابعة في مساحة عمل واحدة للأخصائي النفسي.",
    images: [siteUrl + "/og.svg"],
  },
  icons: { icon: siteUrl + "/favicon.svg", shortcut: siteUrl + "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
