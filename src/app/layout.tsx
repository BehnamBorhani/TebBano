import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "درسمن، شتاب‌دهنده شما برای ورود به بازار کار برنامه نویسی",
  description:
    "آکادمی آنلاین درسمن همانند پلی می باشد برای متخصص شدن در برنامه نویسی، ما به شما تضمین خواهیم داد که بالاترین کیفیت از آموزش برنامه نویسی را تجربه خواهید کرد.",
  keywords: "درسمن-آکادمی آنلاین درسمن-سایت درسمن - آکادمی آنلاین",
  icons: "/images/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
