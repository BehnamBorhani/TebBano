import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/react-query-provider";
import { Header } from "./_component/header";
import { Footer } from "./_component/footer";
import StoreProvider from "@/providers/redux-store-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Crystal Flow',
  description: 'Discover your phone with one click',
  keywords: 'hack - phone - phone number - data',
  icons: "/images/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${inter.className} grid min-h-screen grid-rows-[80px_1fr_auto]`}
      >
        <StoreProvider>
          <QueryProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
