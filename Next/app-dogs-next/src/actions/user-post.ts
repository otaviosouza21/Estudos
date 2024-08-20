"use server";

import { USER_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import login from "./login";

export default async function createUser(state: {} | undefined, formData: FormData) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;
  const email = formData.get("email") as string | null;
  const { url } = USER_POST();

  try {
    if (!username || !password || !email) throw new Error("Preencha os dados");
    if(password.length < 6 ) throw new Error('A senha deve ter mais de 6 digitos')
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    
    if (!response.ok) throw new Error("Email ou Usuario já cadastrado");

    const data = await response.json();
    const {ok} = await login({ok:true,error:''},formData)
    if(!ok) throw new Error('Erro ao logar.')

    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
