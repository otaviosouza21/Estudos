import Link from "next/link";

export default async function NotFound() {
  return (
    <main>
      <h1>Pagina Não Encontrada</h1>
      <Link href='/'>Voltar</Link>
    </main>
  );
}
