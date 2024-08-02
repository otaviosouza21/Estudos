import Imc from "@/components/imc";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'IMC',
    description: 'Pagina IMC'
}

export default function imcPage(){
    return <div>
        <h1>IMC</h1>
        <Imc />
    </div>
}