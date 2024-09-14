import ContaPhotoPost from "@/components/Conta/ContaPhotoPost";
import { Metadata } from "next";


export const runtime = 'edge'

export const metadata: Metadata = {
  title: "Postar | Minha Conta",
};

export default function PostarPage() {
  return <ContaPhotoPost />;
}
