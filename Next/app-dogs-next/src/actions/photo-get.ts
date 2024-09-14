"use server";

import { PHOTO_GET, PHOTOS_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { Photo } from "./photos-get";

export type Comment = {
    comment_id: string;
    comment_post: string;
    comment_author: string;
    comment_content: string;
}


export type PhotoData = {
    photo: Photo;
    comments: Comment[]
}

export default async function photoGet(id: string) {
  try {
    const { url } = PHOTO_GET(id);
    const response = await fetch(url, {
      next: {
        revalidate: 60,
        tags: ["photos", "comment"],
      },
    });
    if (!response.ok) throw new Error("Ocorreu um erro ao buscar foto");
    const data = (await response.json()) as PhotoData;
    return { data, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
