"use client";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "../Form.module.css";
import ErrorMessage from "@/components/Helper/error-message";
import { useEffect, useState } from "react";
import lostPassword from "@/actions/lost-password";

function FormButton() {
  const { pending } = useFormStatus();
  return pending ? (
    <Button disabled={pending}> Enviando Email...</Button>
  ) : (
    <Button>Enviar Email</Button>
  );
}

export default function PerdeuForm() {
  const [state, action] = useFormState(lostPassword, {
    ok: false,
    error: "",
    data: null,
  });

const [url,setUrl] = useState('')
useEffect(()=>{
  setUrl(window.location.href.replace("perdeu", "resetar"))
},[])

  return (
    <>
      <form className={styles.form} action={action}>
        <Input label="Email/Usuario" name="login" type={state.ok ? 'hidden' : 'text'} />
        <input
          type="hidden"
          name="url"
          value={url}
        />
        <ErrorMessage error={state.error} />
        {state.ok ? <p style={{color:'green'}}>Email Enviado com sucesso</p> : <FormButton /> }
      
      </form>
    </>
  );
}
