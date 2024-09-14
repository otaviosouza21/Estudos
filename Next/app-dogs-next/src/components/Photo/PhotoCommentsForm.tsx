"use client";

import { Comment } from "@/actions/photo-get";
import { useFormState, useFormStatus } from "react-dom";
import styles from "./PhotoCommentsForm.module.css";
import EnviarSvg from "@/icons-svg/EnviarSvg";
import ErrorMessage from "../Helper/error-message";
import { error } from "console";
import commentPost from "@/actions/comment-post";
import { useEffect, useState } from "react";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.button} disabled={pending}>
      <EnviarSvg />
    </button>
  );
}

export default function PhotoCommentsForm({
  single,
  id,
  setComments,
}: {
  single: boolean;
  id: string;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}) {
  const [state, action] = useFormState(commentPost, {
    ok: false,
    data: null,
    error: "",
  });

  useEffect(() => {
    if (state.ok && state.data) {
      setComments((comments) => [...comments, state.data]);
      setComment('')
    }
  }, [state, setComments]);

  const [comment,setComment] = useState('')

  return (
    <form
      action={action}
      className={`${styles.form} ${single ? styles.single : ""}`}
    >
      <input type="hidden" name="id" id="id" value={id} />
      <textarea
        className={styles.textarea}
        name="comment"
        id="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({target})=>setComment(target.value)}
      ></textarea>
      <FormButton />
      <ErrorMessage error={state.error} />
    </form>
  );
}
