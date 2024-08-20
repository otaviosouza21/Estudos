import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { UserContextProvider } from "@/context/user-context";
import getUser from "@/actions/get-user";
import ContaPage from "./page";
import UserNav from "@/components/UserNav/UserNav";
import { CSSProperties } from "react";



export default async function ContaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="container">
      <UserNav />
      {children}
    </section>
  );
}
