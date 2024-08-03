"use client";

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/animais">Animais</Link>
      </li>
      <li>
        <Link href="/entrar">Entrar</Link>
      </li>
    </ul>
  );
}
