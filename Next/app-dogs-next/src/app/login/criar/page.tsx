import CadastroForm from "@/components/Form/CadastroForm/CadastroForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:'Nova Conta | Dogs',
    description: 'Criar na sua conta Dogs'
}

export default function LoginPage() {
    return (
        <div className="animeLeft">
            <h1 className="title">Cadastre-se</h1>
            <CadastroForm />
        </div>
    );
}