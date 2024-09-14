"use client";

import Link from "next/link";
import Button from "@/components/Form/Button/Button";
import Input from "../Form/Input/Input";
import styles from "./ContaPhotoPhost.module.css";
import { useFormState, useFormStatus } from "react-dom";
import ErrorMessage from "../Helper/error-message";
import { useState } from "react";
import photoPost from "@/actions/photo-post";

function FormButton() {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}> Enviando...</Button>
  ) : (
    <Button> Enviar</Button>
  );
}

export default function ContaPhotoPost() {
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: "",
    data: null,
  });
  const [img, setImg] = useState("");
  function handleImgChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setImg(URL.createObjectURL(target.files[0]));
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action}>
        <Input label="Nome" name="nome" type="text" />
        <Input label="Peso" name="peso" type="number" />
        <Input label="Idade" name="idade" type="number" />
        <input
          onChange={handleImgChange}
          type="file"
          name="img"
          id="img"
          className={styles.file}
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <div>
        <div
          className={styles.preview}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </section>
  );
}
