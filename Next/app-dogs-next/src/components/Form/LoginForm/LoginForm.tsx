"use client";

import Link from "next/link";
import Button from "@/components/Form/Button/Button";
import Input from "../Input/Input";
import styles from "../Form.module.css";
import stylesBtn from "../Form/Button/Button.module.css";
import login from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import ErrorMessage from "../../Helper/error-message";
import { useEffect } from "react";

function FormButton() {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}> Entrando...</Button>
  ) : (
    <Button> Entrar</Button>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);

  return (
    <>
      <form action={action}>
        <Input label="Usuario" name="username" type="text" />
        <Input label="Senha" name="password" type="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <Link className={styles.perdeu} href="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link className='button' href="/login/criar">
          Cadastro
        </Link>
      </div>
    </>
  );
}
