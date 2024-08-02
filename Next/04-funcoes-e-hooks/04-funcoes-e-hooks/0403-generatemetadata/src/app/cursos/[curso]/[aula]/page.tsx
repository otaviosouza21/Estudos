import { Aula, getAula, getCurso, getCursos } from '@/api/cursos';
import Link from 'next/link';

type PageParams = {
  params: {
    curso: string;
    aula: string;
  };
};

export async function generateStaticParams() {
  const cursos = await getCursos();
  const aulas = await Promise.all(cursos.map((curso) => getCurso(curso.slug)));
  return aulas
    .reduce((acc: Aula[], curso) => acc.concat(curso.aulas), [])
    .map((aula) => ({
      curso: cursos.find((curso) => curso.id === aula.curso_id)?.slug,
      aula: aula.slug,
    }));
}

export default async function AulaPage({ params }: PageParams) {
  const aula = await getAula(params.curso, params.aula);
  return (
    <main>
      <Link href={`/cursos/${params.curso}`}>{params.curso}</Link>
      <h1>{aula.nome}</h1>
      <p>{aula.descricao}</p>
      <p>Tempo: {aula.tempo}</p>
    </main>
  );
}
