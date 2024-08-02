"use client";

import { cookies } from "next/headers";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userLogin,setUserLogin] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const body = { username, password };

    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json()

    
    if(data.sucess){
        window.location.href = '/'
    }
  }


  return (
    <form onSubmit={handleSubmit} action="">

      <div>
        <label htmlFor="">Usuario</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="insira seu usuario"
        />
      </div>
      <div>
        <label htmlFor="">Senha</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="insira sua senha"
        />
      </div>
      <button>Entrar</button>
    </form>
  );
}
