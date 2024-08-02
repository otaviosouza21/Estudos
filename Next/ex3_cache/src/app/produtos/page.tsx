"use client";

import ProdutosLista from "@/components/produtos";
import { Suspense } from "react";

export default async function ProdutosPage() {
  return (
    <main>
      <Suspense fallback={'Carregando....'}>
        <ProdutosLista />
      </Suspense>
    </main>
  );
}
