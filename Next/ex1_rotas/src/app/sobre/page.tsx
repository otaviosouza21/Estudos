import ClientFetch from "@/components/client-fetch";
import Width from "@/components/width";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Sobre",
  description: "Essa é uma pagina sobre",
};

export default function sobrePage() {
  return (
    <main>
      <h2>Sobre</h2>
      <ClientFetch />
    </main>
  );
}
