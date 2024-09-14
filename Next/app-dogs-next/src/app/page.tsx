import photosGet from "@/actions/photos-get";
import Feed from "@/components/Feed/Feed";

export default async function Home() {

  const {data} = await photosGet()

  if(data)
  return (
    <section className="container mainContainer">
      {data && <Feed fotos={data}/>}
    </section>
  );
}
