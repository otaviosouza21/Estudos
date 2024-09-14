"use server";

import { PHOTO_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { File } from "buffer";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function photoPost(
  state: {} | undefined,
  formData: FormData
) {
  const token = cookies().get("token")?.value;
  const nome = formData.get("nome") as string | null;
  const idade = formData.get("idade") as string | null;
  const peso = formData.get("peso") as string | null;
  const img = formData.get("img") as File | null;

  const { url } = PHOTO_POST();

  try {
    if (!token || !nome || !idade || !peso || img?.size === 0)
      throw new Error("Preencha os dados");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });

    if (!response.ok) throw new Error("Email ou Usuario já cadastrado");
  } catch (error: unknown) {
    return apiError(error);
  }

  revalidateTag('photos')
  redirect('/conta')
}
