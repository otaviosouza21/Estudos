import { getCursos } from '@/api/cursos';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cursos Origamid',
  description: 'Cursos online de Front End e UI Design.',
  keywords: ['HTML', 'CSS', 'JavaScript', 'UI Design'],
  authors: [{ name: 'André Rafael', url: 'https://andrerafael.com' }],
};

export default async function CursosPage() {
  const cursos = await getCursos();
  return (
    <main>
      <h1>Cursos</h1>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
