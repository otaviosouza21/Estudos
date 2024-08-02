import { getCurso, getCursos } from '@/api/cursos';
import Link from 'next/link';

type PageParams = {
  params: {
    curso: string;
  };
};

export async function generateStaticParams() {
  const cursos = await getCursos();
  return cursos.map((curso) => ({
    curso: curso.slug,
  }));
}

export default async function CursoPage({ params }: PageParams) {
  const curso = await getCurso(params.curso);
  return (
    <main>
      <h1>{curso.nome}</h1>
      <p>{curso.descricao}</p>
      <p>Total Horas: {curso.total_horas}</p>
      <p>Total Aulas: {curso.total_aulas}</p>
      <h2>Aulas</h2>
      <ul>
        {curso.aulas.map((aula) => (
          <li key={aula.id}>
            <Link href={`/cursos/${params.curso}/${aula.slug}`}>
              {aula.nome}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
