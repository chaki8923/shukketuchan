import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import Header from "./header";
import Footer from "./footer";
import Situation from "./component/footer/situation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "調整ちゃん | 日程登録",
  description: "たったの2ステップでイベント登録。本アプリは、Googleカレンダーと連携し、ユーザーがスケジュールを簡単に管理できるようにするサービスですGoogleカレンダーAPIを利用し、ユーザーの許可を得た上でイベントを作成・編集・削除する機能を提供します。",
  keywords: ["イベント", "スケジュール", "調整", "日程調整"],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.chouseichan.com/",
    title: "調整ちゃん | 日程登録",
    description: "たったの2ステップでイベント登録",
    images: [
      {
        url: "/logo.png", // `public` フォルダの画像を使用
        width: 1200,
        height: 630,
        alt: "調整ちゃんロゴ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@chousei", // 公式アカウントがあれば追加
    title: "調整ちゃん | 日程登録",
    description: "たったの2ステップでイベント登録",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NextTopLoader color="#de3163"
            initialPosition={0.08}
            crawlSpeed={200}
            height={5}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #de3163,0 0 5px #de3163"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false} />
          <Header />
          {children}
          <Situation />
          <Footer />
        </body>

      </html>
    </>
  );
}
