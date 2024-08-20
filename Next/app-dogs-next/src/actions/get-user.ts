import { USER_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

type UserType = {
  id: number;
  email: string;
  username: string;
  nome: string;
};

export default async function getUser() {
  const { url } = USER_GET();
  try {
    const token = cookies().get("token")?.value;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
      next: {
        revalidate: 60,
      },
    });
    if (!response.ok)
      throw new Error("Usuario não encontrado ou token invalido");
    const data = (await response.json()) as UserType;
    return { data, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
