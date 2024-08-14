"use server";

export type Photo = {
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

export default async function photosGet({page,total,user} : PhotoGetType) {
  try {
    const response = await fetch(`https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=${total}&_user=${user}`)
    if(!response.ok) throw new Error('Ocorreu um erro ao buscar dogs')
    const fotos =  await response.json() as Photo[]
    return fotos
  } catch (erro) {
    console.log("Ocorreu um erro" + erro);
  }
}
