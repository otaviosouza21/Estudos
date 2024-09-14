import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container">
      <h1 className="title">Pagina Não Encontrada</h1>
      <Link
        className="button"
        style={{ marginBottom: "1rem", display: "inline-block" }}
        href="/"
      >
        Volte para Home
      </Link>
    </section>
  );
}
