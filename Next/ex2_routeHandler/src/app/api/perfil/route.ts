import { cookies } from "next/headers"

export async function GET() {
    const token = cookies().get('token')

    const response = await fetch('https://api.origamid.online/conta/perfil',{
        method:'GET',
        headers:{
            Authorization: "Bearer "+token?.value
        }
    })

    if(!response.ok) return Response.json({messagem: 'Erro ao autenticar'})
    
    const data = await response.json()

    return Response.json(data)


}