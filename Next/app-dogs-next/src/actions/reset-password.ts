"use server";

import { PASSWORD_RESET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { redirect } from "next/navigation";

export default async function resetPassword(state: {} | undefined, formData: FormData) {
  const key = formData.get("key") as string | null;
  const login = formData.get("login") as string | null;
  const senha = formData.get("password") as string | null;
  
  const {url} = PASSWORD_RESET()

  try {
  if(!senha || !key || !login) throw new Error('Por favor insira algum dado');
  const response = await fetch(url,{
    method: "POST",
    body: formData
  })

  

  if(!response.ok) throw new Error('Não Autorizado')
  } catch(error: unknown){
    return apiError(error);
  }

  redirect('/login')
}
