import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LanguageProvider } from "@/lib/hooks/useLanguage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechKids - 子供向けプログラミングスクール",
  description: "次世代を担う子供たちのためのプログラミングスクール。小学1年生から6年生まで対象の、楽しく学べるプログラミング教室です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <div className="pt-20">
            {children}
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
