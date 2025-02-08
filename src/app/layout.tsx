import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "東京国際工科専門職大学 マインドスポーツサークル",
  description: "iput公認マインドスポーツサークル公式ホームページ マインドスポーツサークルは，知的な遊戯に皆で興じながら知力と精神力を研き合うための団体です． 大学公認のサークルで，顧問は飛澤先生です．メンバーは常時募集中です． 見学や飛び入り参加も歓迎しています．",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.className} flex flex-col min-h-screen`}>{children}</body>
    </html>
  );
}
