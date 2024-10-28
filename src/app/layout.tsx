import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/react-query-provider";
import { Header } from "./_component/header";
import StoreProvider from "@/providers/redux-store-provider";
import Script from "next/script";
import localFont from "next/font/local";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { NextUIProvider } from "@nextui-org/react";
import { Footer } from "./_component/footer";

const roboto = Roboto_Serif({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto",
});

const iranYekan: NextFontWithVariable = localFont({
  src: [
    {
      path: "../../public/fonts/IRANYekan/IRANYekanThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANYekan/IRANYekanLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANYekan/IRANYekanRegular.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANYekan/IRANYekanMedium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANYekan/IRANYekanBold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANYekan/IRANYekanExtraBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANYekan/IRANYekanBlack.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANYekan/IRANYekanExtraBlack.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-yekan",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TebBano",
  description:
    "طبانو دکتر آنلاین و نوبت دهی سریع از بهترین پزشکان ، درمانگاه ها ، کلینیک ها و بیمارستان های کشور.از طریق این سایت و یا اپلیکیشن طبانو اینترنتی با جستجوی دکتر مورد نظر ، مشاوره تلفنی و یا نوبت بگیرید.",
  keywords: "دکتر - رزرو - نوبت - نوبت آنلاین - متخصص - وقت - پزشک",
  icons: "/images/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${roboto.variable} ${iranYekan.variable}`}
    >
      <body className={`font-yekan`}>
        <StoreProvider>
          <QueryProvider>
            <NextUIProvider>
              <div className="relative">
                <Header />
                {children}
                <Footer />
              </div>
            </NextUIProvider>
          </QueryProvider>
        </StoreProvider>

        <Script
          id="goftino-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(){var i="aVIRWx",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();`,
          }}
        />
      </body>
    </html>
  );
}
