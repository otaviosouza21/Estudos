import photoGet from "@/actions/photo-get";
import PhotoContent from "@/components/Photo/PhotoContent";
import { notFound } from "next/navigation";
import { title } from "process";

type FotoIdParams ={
  params:{
    id:string
  }
}

export async function generateMetadata({params}: FotoIdParams) {

  const {data} = await photoGet(params.id);

  if(!data) return {title: 'Fotos'}
  return{
    title: data.photo.title
  }
}


export default async function FotoIDPage({
  params,
}: {
  params: { id: string };
}) {
  const {data} = await photoGet(params.id);

  if (!data) return notFound();

  return <section className="container mainContainer">
  <PhotoContent data={data} single={true} />
  </section>;
}
