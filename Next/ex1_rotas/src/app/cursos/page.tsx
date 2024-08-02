import { getCursos } from "@/api/api";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cursos Origamid",
  description: "Cursos online de Front End e UI design",
  keywords: ["HTML", "CSS", "JavaScript", "UI Desing"],
  authors: [{ name: "André Rafael", url: "http://andre.com" }],
};

export default async function CursosPage() {
  const cursos = await getCursos();

  return (
    <main>
      <h1>Cursos de Progração e UI</h1>
    </main>
  );
}
