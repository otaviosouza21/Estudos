import { log } from "console";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const response = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if(!response.ok) return Response.json({sucess: false, message:'Ocorreu um erro'})
  const data = await response.json();

  cookies().set('token',data.token,{
    httpOnly:true,
    secure:true
  })
  
  
  return Response.json({sucess:true});
}
