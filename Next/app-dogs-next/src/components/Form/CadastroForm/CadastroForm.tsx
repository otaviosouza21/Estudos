'use client'

import { useFormState, useFormStatus } from "react-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import ErrorMessage from "../../Helper/error-message";
import styles from "../Form.module.css";
import { useEffect } from "react";
import createUser from "@/actions/user-post";


function FormButton() {
  const { pending } = useFormStatus();
  return pending ? (
    <Button disabled={pending}> Cadastrando...</Button>
  ) : (
    <Button> Cadastrar</Button>
  );
}

export default function CadastroForm() {
  const [state, action] = useFormState(createUser, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);


  return (
      <form action={action} className={styles.form}>
        <Input label="Usuario" type="text" name="username"/>
        <Input label="Email" type="email" name="email"  />
        <Input label="Senha" type="password" name="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
  
  );
}
