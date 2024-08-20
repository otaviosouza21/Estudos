import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { USER_GET } from "@/functions/api";
import getUser from "@/actions/get-user";
import { log } from "console";

export default async function Header() {
  const { data } = await getUser();

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href="/" aria-label="Dogs - Home">
          <Image
            src={"/icons/dogs.svg"}
            alt="logo-dogs"
            width={28}
            height={22}
            priority
          />
        </Link>
        {data ? (
          <Link className={styles.login} href="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} href="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}
