import { cookies } from "next/headers";
import Link from "next/link";

export default async function Menu() {
  let conta = {
    autorizado: false,
    usuario: "",
  };
  const token = cookies().get("token")?.value;

  const response = await fetch("https://api.origamid.online/conta/perfil", {
    method: "GET",
    headers: { Authorization: "Bearer " + token },
  });

  if (response.ok) {
    const data = await response.json();
    conta = {
      autorizado: true,
      usuario: data.usuario,
    };
  }

  function logout(){
    cookies().delete('token')
  }

  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        {conta.autorizado ? (
          conta.usuario
        ) : (
          <Link href="/formulario">Login</Link>
        )}
        {conta.autorizado && (
          <li>
            <Link href="/logout">Sair</Link>
          </li>
        )}
      </li>
    </ul>
  );
}
