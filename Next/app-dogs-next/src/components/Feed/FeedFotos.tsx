import { Photo } from "@/actions/photos-get";
import Image from "next/image";
import Link from "next/link";
import styles from "./Feed.module.css";

type FeedFotosType = {
  fotos: Photo[];
};

export default function FeedFotos({fotos} : FeedFotosType) {
  if(!Array.isArray(fotos)){
    fotos = []
  }


  return (
    <ul className={`${styles.feed} animeLeft`}>
      {fotos.map((foto, i) => {
        return (
          <li className={styles.photo} key={foto.title + i}>
            <Link href={`/foto/${foto.id}`} scroll={false}>
              <Image
                src={foto.src}
                width={1500}
                height={1500}
                alt={foto.title}
                sizes="80vw"
              />
              <span className={styles.visualizacao}>{foto.acessos}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
