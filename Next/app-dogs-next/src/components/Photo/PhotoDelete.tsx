import { useState } from "react";
import styles from "./PhotoDelete.module.css";
import photoDelete from "@/actions/photo-delete";

export default function PhotoDelete({ id }: { id: string }) {
  const [loading, setLoading] = useState<boolean>(false);

  async function handleClick() {
    setLoading(true);
    const confirm = window.confirm("Deseja mesmo deletar?");
    if (confirm) {
      await photoDelete(id);
    }
    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletando...
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  );
}
