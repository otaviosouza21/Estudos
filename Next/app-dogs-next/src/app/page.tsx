import photosGet from "@/actions/photos-get";
import Feed from "@/components/Feed/Feed";

export default async function Home() {

  const options={
    page: '1',
    total:'6',
    user:'0'
  }
  
  const data = await photosGet(options)

  if(data)
  return (
    <section className="container mainContainer">
      <Feed fotos={data}/>
    </section>
  );
}
