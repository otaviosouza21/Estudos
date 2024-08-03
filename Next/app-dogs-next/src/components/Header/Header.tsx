
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import Dogs from '../../../public/icons/dogs.svg'

export default async function Header() {
 /*  const { data, userLogout } = React.useContext(UserContext); */
 const data = false

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href="/" aria-label="Dogs - Home">
          <Image src={Dogs} alt="logo-dogs" width={28} height={22} />
        </Link>
        {data ? (
          <Link className={styles.login} href="/conta">
         {/*    {data.nome} */}
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
