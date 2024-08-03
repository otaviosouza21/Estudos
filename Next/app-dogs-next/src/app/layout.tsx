import type { Metadata } from "next";
import "./globals.css";
import { font_body } from "./fonts";
import ComponentsHeader from "@/components/Header/Header";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={font_body.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
