'use client'


export default function ProdutosError({error}:{error: Error}) {
  return (
    <main>
      <h1>{error.message}</h1>
    </main>
  );
}
