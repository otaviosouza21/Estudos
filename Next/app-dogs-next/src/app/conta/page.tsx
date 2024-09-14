import getUser from "@/actions/get-user";
import photosGet from "@/actions/photos-get";
import Feed from "@/components/Feed/Feed";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Minha Conta",
};

export default async function ContaPage() {
  const { data: user } = await getUser();
  const { data } = await photosGet({ user: user?.nome });

  return (
    <section>
      {data?.length ? (
        <Feed user={user?.username} fotos={data} />
      ) : (
        <div>
          <p
            style={{ color: "#444", fontSize: "1.25rem", marginBottom: "1rem" }}
          >
            Não há fotos
          </p>
          <Link href={'/conta/postar'} style={{display:'inline-block'}} className="button">Postar foto</Link>
        </div>
      )}
    </section>
  );
}
