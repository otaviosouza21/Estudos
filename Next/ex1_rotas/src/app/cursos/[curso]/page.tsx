import { getCurso, getCursos } from "@/api/api";
import { link } from "fs";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageParams = {
  params: {
    curso: string;
  };
};

export async function generateStaticParams() {
  const cursos = await getCursos();
  return cursos.map((curso) => {
    return { curso: curso.slug };
  });
}

export async function generateMetadata({params}: PageParams): Promise<Metadata> {
  const curso = await getCurso(params.curso)
  return {
    title: `Curso de ${curso.nome}`,
    description: curso.descricao
  };
}


export default async function CursoPage({ params }: PageParams) {
  const curso = await getCurso(params.curso);
  if(curso.error) return notFound()

  return (
    <main>
      <h1>{curso.descricao}</h1>
      <p>{curso.total_aulas} Aulas</p>
      <p>{curso.total_horas} Horas</p>
      <h2>Aulas</h2>
      <ul>
        {curso.aulas.map((aula) => (
          <li key={aula.id}>
            {aula.ordem}-
            <Link href={`${params.curso}/${aula.slug}`}>{aula.descricao}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
