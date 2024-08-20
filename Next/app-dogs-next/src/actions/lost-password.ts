"use server";

import { PASSWORD_LOST } from "@/functions/api";
import apiError from "@/functions/api-error";
import login from "./login";

export default async function lostPassword(state: {} | undefined, formData: FormData) {
  const usuario = formData.get("login") as string | null;
  const urlLost = formData.get("url") as string | null;
  const {url} = PASSWORD_LOST()

  try {
  if(!usuario) throw new Error('Por favor insira algum dado');
  const response = await fetch(url,{
    method: "POST",
    body: formData
  })

  
  

  if(!response.ok) throw new Error('Não foi possivel encontrar este Email ou Usuario')
   return { data: null, ok: true, error: "" };
  } catch(error: unknown){
    return apiError(error);
  }
}
