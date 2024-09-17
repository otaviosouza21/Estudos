"use client";

import photoGet, { PhotoData } from "@/actions/photo-get";
import PhotoContent from "../Photo/PhotoContent";
import styles from "./FeedModal.module.css";
import { usePathname, useRouter } from "next/navigation";

export default function FeedModal({ photo }: { photo: PhotoData }) {
  const router = useRouter();
  const patchname = usePathname();

  if (!patchname.includes("foto")) {
    return null;
  }

  function handleOutsideClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      router.back();
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <PhotoContent data={photo} single={false} />
    </div>
  );
}
