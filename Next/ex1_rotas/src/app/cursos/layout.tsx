import { getCursos } from "@/api/api";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cursos Origamid",
  description: "Cursos online de Front End e UI design",
  keywords: ["HTML", "CSS", "JavaScript", "UI Desing"],
  authors: [{ name: "André Rafael", url: "http://andre.com" }],
};

export default async function CursosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cursos = await getCursos();

  return (
    <div className="flex">
      <nav>
        <h1>Cursos</h1>
        <ul>
          {cursos.map((curso) => (
            <li key={curso.id}>
              <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
            </li>
          ))}
        </ul>
        <div>{children}</div>
      </nav>
    </div>
  );
}
