"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./UserNav.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import useMedia from "@/hooks/useMedia";
import FeedSvg from "@/icons-svg/FeedSvg";
import EstatisticasSvg from "@/icons-svg/EstatisticasSvg";
import PostarSvg from "@/icons-svg/PostarSvg";
import SairSvg from "@/icons-svg/SairSvg";
import logout from "@/actions/logout";
import { useUser } from "@/context/user-context";

function getTitle(pathname: string) {
  switch (pathname) {
    case "/conta/postar":
      return "Poste Sua Foto";
    case "/conta/estatisticas":
      return "Estatisticas";
    default:
      return "Minha Conta";
  }
}

export default function UserNav() {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const {setUser} = useUser()

  async function handleLogout(){
    await logout()
    setUser(null)
  }

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link href="/conta" className={pathname === "/conta" ? "active" : ""}>
          <FeedSvg />
        </Link>
        <Link
          href="/conta/estatisticas"
          className={pathname === "/conta/estatisticas" ? "active" : ""}
        >
          <EstatisticasSvg />
        </Link>
        <Link
          href="/conta/postar"
          className={pathname === "/conta/postar" ? "active" : ""}
        >
          <PostarSvg />
        </Link>
        <button onClick={handleLogout}>
          <SairSvg />
          {mobile && 'Sair'}
        </button>
      </nav>
    </header>
  );
}
