import Link from 'next/link';

export default async function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/produtos">Produtos</Link>
      </li>
      <li>
        <Link href="/produtos/adicionar">Adicionar Produto</Link>
      </li>
    </ul>
  );
}
