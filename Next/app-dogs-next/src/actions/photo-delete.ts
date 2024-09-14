"use server";

import { PHOTO_DELETE, PHOTO_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { File } from "buffer";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function photoDelete(id: string) {
  const token = cookies().get("token")?.value;

  const { url } = PHOTO_DELETE(id);

  try {
    if (!token) throw new Error("Token Invalido");
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) throw new Error("Erro ao deletar fotos");
  } catch (error: unknown) {
    return apiError(error);
  }

  revalidateTag("photos");
  redirect("/conta");
}
