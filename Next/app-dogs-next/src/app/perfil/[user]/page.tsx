import photosGet from "@/actions/photos-get";
import Feed from "@/components/Feed/Feed";

export default async function PerfilUserPage({
  params,
}: {
  params: { user: string };
}) {
  const { data } = await photosGet({ user: params.user });
  if (!data) return null;
  return (
    <section className="container mainSection">
      <h1 className="title">{params.user}</h1>
      <Feed fotos={data} user={params.user}  />
    </section>
  );
}
