'use client';

import { adicionarProduto } from '@/actions/adicionar-produto';
import { useFormState, useFormStatus } from 'react-dom';

function Button() {
  const status = useFormStatus();
  return (
    <button type="submit" disabled={status.pending}>
      Adicionar
    </button>
  );
}

export default function AdicionarProduto() {
  const [state, formAction] = useFormState(adicionarProduto, {
    errors: [],
  });
  console.log(state);

  return (
    <form action={formAction}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" name="nome" />
      <label htmlFor="preco">Preço</label>
      <input type="number" id="preco" name="preco" />
      <label htmlFor="descricao">Descrição</label>
      <input type="text" id="descricao" name="descricao" />
      <label htmlFor="estoque">Estoque</label>
      <input type="number" id="estoque" name="estoque" />
      <label htmlFor="importado">
        <input type="checkbox" id="importado" name="importado" />
        Importado
      </label>
      {state.errors.map((error, i) => (
        <p style={{ color: 'red' }} key={i}>
          {error}
        </p>
      ))}
      <Button />
    </form>
  );
}
