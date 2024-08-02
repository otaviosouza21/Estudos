"use server";


import { Produto } from "@/components/produtos";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const validaNome = (nome: string) => {
  return typeof nome === "string" && nome.length > 1;
};

const validaPreco = (preco: number) => {
  return typeof preco === "number" && preco > 1;
};

export default async function postProduto(
  state: { errors: string[] },
  formData: FormData
) {
  const newProduto: Produto = {
    nome: formData.get("nome") as string,
    descricao: formData.get("descricao") as string,
    preco: Number(formData.get("preco")),
    estoque: Number(formData.get("estoque")),
    importado: formData.get("importado") ? 1 : 0,
  };

  let errors = [];
  if (!validaNome(newProduto.nome)) errors.push("Nome invalido");
  if (!validaPreco(newProduto.preco)) errors.push("Preço invalido");
  if(errors.length > 0) return {errors}

  try {
    const response = await fetch("https://api.origamid.online/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduto),
    });

    if (!response.ok) throw new Error("Erro ao adicionar produto");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { errors: [error.message]};
    }
  }
  revalidatePath("/produtos");
  redirect("/produtos");
}
