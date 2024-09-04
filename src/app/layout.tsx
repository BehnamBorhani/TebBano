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
  title: "دکتر رزرو",
  description: "دکتر رزرو دکتر آنلاین و نوبت دهی سریع از بهترین پزشکان ، درمانگاه ها ، کلینیک ها و بیمارستان های کشور.از طریق این سایت و یا اپلیکیشن دکتر رزرو اینترنتی با جستجوی دکتر مورد نظر ، مشاوره تلفنی و یا نوبت بگیرید.",
  keywords: "دکتر - رزرو - نوبت - نوبت آنلاین - متخصص - وقت - پزشک",
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
