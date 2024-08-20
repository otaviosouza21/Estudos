"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "../Form.module.css";
import ErrorMessage from "@/components/Helper/error-message";
import resetPassword from "@/actions/reset-password";

function FormButton() {
  const { pending } = useFormStatus();
  return pending ? (
    <Button disabled={pending}> Resetando...</Button>
  ) : (
    <Button>Resetar Senha</Button>
  );
}

export default function ResetarForm({
  keyToken,
  login,
}: {
  keyToken: string;
  login: string;
}) {
  const [state, action] = useFormState(resetPassword, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <>
      <form className={styles.form} action="">
        <Input label="Nova Senha" name="password" type="password" />
        <input type="hidden" name="login" value={login} />
        <input type="hidden" name="key" value={keyToken} />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
}
