"use server";

export type Dog = {
    id:number;
    author:string;
    title: string;
    date: string;
    src:string;
    peso:string;
    idade: string;
    acessos:string;
    total_comments: string;
}

export type PhotoGetType = {
    page: string;
    total:string;
    user:string
}

export default async function GetDogs({page,total,user} : PhotoGetType) {
  try {
    const response = await fetch(`https://dogsapi.origamid.dev/json//api/photo/?_page=${page}&_total=${total}&_user=${user}`)
    if(!response.ok) throw new Error('Ocorreu um erro ao buscar dogs')
    const dogs =  await response.json() as Dog[]
  } catch (erro) {
    console.log("Ocorreu um erro" + erro);
  }
}
