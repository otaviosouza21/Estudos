export type Produto = {
  id?: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

export default async function ProdutosLista() {
  let produtos: Produto[] = [];
  try {
    const response = await fetch("https://api.origamid.online/produtos", {
        cache: 'no-store'
    /*   next: {
        revalidate: 5,
      }, */
    });

    if (!response.ok) throw new Error("Erro ao carregar produtos");
    produtos = (await response.json()) as Produto[];
  } catch (error) {
    return <p>Ocorreu um erro nessa lista</p>
  }

  return (
    <main>
      {produtos.map((produto) => {
        return (
          <div>
            <h2>{produto.nome}</h2>
            <ul key={produto.id}>
              <li>SKU: {produto.id}</li>
              <li>Descricao: {produto.descricao}</li>
              <li>Preço: R$ {produto.preco}</li>
              <li>Estoque: {produto.estoque}</li>
              <li>Origem: {produto.importado}</li>
            </ul>
          </div>
        );
      })}
    </main>
  );
}
