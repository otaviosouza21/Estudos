import { Aula, getAula, getCurso, getCursos } from "@/api/api";
import { Metadata } from "next";

type PageParams = {
  params: {
    curso: string;
    aula: string;
  };
};

export async function generateStaticParams() {
  const cursos = await getCursos();

  const aulas = await Promise.all(
    cursos.map((curso) => {
      return getCurso(curso.slug);
    })
  );
  return aulas
    .reduce((acc: Aula[], curso) => {
      return acc.concat(curso.aulas);
    }, [])
    .map((aula) => ({
      aula: aula.slug,
      curso: cursos.find((curso) => curso.id === aula.curdo_id)?.slug,
    }));
}

export default async function AulaPage({ params }: PageParams) {
  const aula = await getAula(params.curso, params.aula);

  return (
    <section style={{display:"flex"}}>
      <h1>
        {aula.ordem} - {aula.descricao}
      </h1>
      <ul>
        <li>{aula.nome}</li>
        <li>{aula.tempo} horas</li>
      </ul>
    </section>
  );
}
