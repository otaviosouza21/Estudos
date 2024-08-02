'use client'

import { useState } from "react"

const Imc = () =>{
    const [peso,setPeso] = useState('')
    const [altura,setAltura] = useState('')
    const [imc,setImc] = useState('')

    const calculaImc = () =>{
        if(peso && altura){
        const alturaMetro = Number(altura)/100
        const total = (Number(peso) / (alturaMetro*alturaMetro)).toFixed(2)
        setImc(total)    
        }
    }


    return <div>
        <input onChange={(e)=>setPeso(e.target.value)} value={peso} type="text" name="peso" placeholder="Insira seu peso" id="" />
        <input onChange={(e)=>setAltura(e.target.value)} value={altura} type="text" name="altura" placeholder="Insira sua altura" id="" />
        <button onClick={calculaImc}>Calcular</button>
        <p>{imc}</p>
    </div>
}

export default Imc