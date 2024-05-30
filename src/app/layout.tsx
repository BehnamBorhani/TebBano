import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/react-query-provider";
import { Header } from "./_component/header";
import { Footer } from "./_component/footer";
import StoreProvider from "@/providers/redux-store-provider";

const roboto = Roboto_Serif({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "پیامک ناشناس",
  description: "حرف دلت رو راحت بهش بزن!",
  keywords:
    "ناشناس - phone - phone number - data - شماره - شماره موبایل - پیامک - sms",
  icons: "/images/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${roboto.variable} bg-six-100 font-roboto`}>
        <StoreProvider>
          <QueryProvider>
            <Header />
            {children}
            {/* <Footer /> */}
          </QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
