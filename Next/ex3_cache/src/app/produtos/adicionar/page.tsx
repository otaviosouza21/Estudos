"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Produto } from "../../../components/produtos";
import { error, log } from "console";
import postProduto from "@/actions/post-produto";
import { useFormState, useFormStatus } from "react-dom";

function Button() {
  const status = useFormStatus();
  return (
    <button type="submit" disabled={status.pending}>
      {status.pending ? "Enviando..." : "Enviar"}
    </button>
  );
}


export default function AdicionarPage() {
  const [produto, setProduto] = useState<Produto>({
    nome: "",
    preco: 0,
    descricao: "",
    estoque: 0,
    importado: 0,
  });

  const [state,formAction] = useFormState(postProduto,{
    errors: [],
  })


  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setProduto((prevProduto) => ({
      ...prevProduto,
      [name]:
        type === "checkbox"
          ? checked
            ? 1
            : 0
          : type === "number"
          ? +value
          : value,
    }));
  }



  return (
    <main>
      <h1>Adicionar Produto</h1>
      <form action={formAction}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            value={produto.nome}
            onChange={handleChange}
            type="text"
            name="nome"
            id="nome"
          />
        </div>
        <div>
          <label htmlFor="preco">Preço</label>
          <input
            value={produto.preco}
            onChange={handleChange}
            type="number"
            name="preco"
            id="preco"
          />
        </div>
        <div>
          <label htmlFor="descricao">Descrição</label>
          <input
            value={produto.descricao}
            onChange={handleChange}
            type="text"
            name="descricao"
            id="descricao"
          />
        </div>
        <div>
          <label htmlFor="estoque">Estoque</label>
          <input
            value={produto.estoque}
            onChange={handleChange}
            type="number"
            name="estoque"
            id="estoque"
          />
        </div>
        <div>
          <label htmlFor="importado">Importado</label>
          <input
            value={produto.importado}
            onChange={handleChange}
            type="checkbox"
            name="importado"
            id="importado"
          />
        </div>
        {state.errors.map((erro,i)=>{
          return <p style={{color:'tomato'}} key={i}>{erro}</p>
        })}
        <Button />
      </form>
    </main>
  );
}
