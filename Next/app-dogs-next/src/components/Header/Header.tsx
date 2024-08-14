
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";


export default async function Header() {
 /*  const { data, userLogout } = React.useContext(UserContext); */
 const data = false

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href="/" aria-label="Dogs - Home">
          <Image src={'/icons/dogs.svg'} alt="logo-dogs" width={28} height={22} priority />
        </Link>
        {data ? (
          <Link className={styles.login} href="/conta">
         {/*    {data.nome} */} Dogs
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
