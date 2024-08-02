
type PageParams = {
    params:{
        id:string
    }
}

type Produto ={
    id:number;
    nome:string;
    preco:number;
    descricao:string;
    estoque:number;
    importado:number
}


export default async function Produto({params}:PageParams){
    const response = await fetch(`http://api.origamid.online/produtos/${params.id}`)
    const  data = (await response.json()) as Produto
    
    return <div>
        <h1>Produto</h1>
        <h2>{data.nome}</h2>
        <p> R$ {data.preco}</p>
        <p>{data.descricao}</p>
    </div>
}