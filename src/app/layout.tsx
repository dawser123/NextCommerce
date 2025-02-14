import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CurrencyContextProvider } from "@/contexts/currencyContext";
import { CartContextProvider } from "@/contexts/cartContext";

export const metadata: Metadata = {
  title: "NextCommerce",
  description: " This is a e-commerce website built using Next.js, Tailwind CSS, and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-primaryColor text-primaryTextColor">
        <CurrencyContextProvider>
          <CartContextProvider>
            <Header />
            {children}
            <Footer />
          </CartContextProvider>
        </CurrencyContextProvider>
      </body>
    </html>
  );
}
