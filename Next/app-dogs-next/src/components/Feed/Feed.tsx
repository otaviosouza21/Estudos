"use client";

import photosGet, { Photo } from "@/actions/photos-get";
import FeedFotos from "./FeedFotos";
import { useEffect, useRef, useState } from "react";
import Loading from "../Helper/loading";
import styles from "./Feed.module.css";

export default function Feed({
  fotos,
  user,
}: {
  fotos: Photo[];
  user?: 0 | string;
}) {
  const [photosFeed, setPhotosFeed] = useState<Photo[]>(fotos);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [infinite, setInfinite] = useState<boolean>(
    fotos.length < 6 ? false : true
  );

  const fetching = useRef(false);
  function infiniteScroll() {
    console.log("scroll");
    if (fetching.current) return;
    fetching.current = true;
    setLoading(true);
    setTimeout(() => {
      setPage((currentPage) => currentPage + 1);
      fetching.current = false;
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    if (page === 1) return;
    async function getPagePhotos(page: number) {
      const actionData = await photosGet(
        { page, total: 4, user: 0 },
        { cache: "no-store" }
      );
      if (actionData && actionData.data !== null) {
        const { data } = actionData;
        setPhotosFeed((currentPhotos) => [...currentPhotos, ...data]);
        if (data.length < 6) setInfinite(false);
      }
    }
    getPagePhotos(page);
  }, [page]);

  useEffect(() => {
    if (infinite) {
      window.addEventListener("scroll", infiniteScroll);
      window.addEventListener("wheel", infiniteScroll);
    } else {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    }

    return () => {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    };
  }, []);

  return (
    <div>
      <FeedFotos fotos={photosFeed} />
      <div className={styles.loadingWrapper}>
        {infinite ? loading && <Loading /> : <p>Não existem mais postagens</p>}
      </div>
    </div>
  );
}
