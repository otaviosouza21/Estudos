import type { Metadata } from "next";
import "./globals.css";
import { font_body } from "../functions/fonts";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { UserContextProvider } from "@/context/user-context";
import getUser from "@/actions/get-user";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorros",
};

export default async function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode
}>) {

  const {data: user} = await getUser()


  return (
    <html lang="pt-BR">
      <body className={font_body.variable}>
        <UserContextProvider user={user}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <div>{modal}</div>
            <Footer />
          </div>
        </UserContextProvider>
        <SpeedInsights/>
      </body>
    </html>
  );
}
