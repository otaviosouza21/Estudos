import PerdeuForm from "@/components/Form/PerdeuForm/PerdeuForm";
import { Metadata } from "next";


export const metadata: Metadata = {
    title:'Perdeu a senha | Dogs',
    description: 'Recupere a sua senha'
}

export default function PerdeuPage() {
 
    return (
        <div className="animeLeft">
            <h1 className="title">Perdeu a senha?</h1>
            <PerdeuForm />
        </div>
    );
}