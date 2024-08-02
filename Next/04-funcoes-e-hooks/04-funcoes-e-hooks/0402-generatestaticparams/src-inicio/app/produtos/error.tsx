'use client';

export default function ProdutosError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main>
      <h1>Um erro ocorreu.</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Tente novamente.</button>
    </main>
  );
}
