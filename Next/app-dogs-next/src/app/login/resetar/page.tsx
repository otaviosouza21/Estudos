import ResetarForm from "@/components/Form/ResetarForm/ResetarForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resetar a senha | Dogs",
  description: "Resete a sua senha",
};

type ResetarSearchType = {
  searchParams: {
    key?: string;
    login: string;
  };
};

export default function ResetarPage({ searchParams }: ResetarSearchType) {
    const keyToken = searchParams?.key || "";
    const login = searchParams?.login || "";

  return (
    <div className="animeLeft">
      <h1 className="title">Resete a Senha</h1>
      <ResetarForm keyToken={keyToken} login={login } />
    </div>
  );
}
