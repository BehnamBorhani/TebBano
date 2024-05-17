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
  title: "Crystal Flow",
  description: "Discover your phone with one click",
  keywords: "hack - phone - phone number - data",
  icons: "/images/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${roboto.variable} font-roboto`}>
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
