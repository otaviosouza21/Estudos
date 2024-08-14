import styles from "./Input.module.css";

type InputType = React.ComponentProps<"input"> & {
  label: string;
  error?: string;
};

export default function Input({ label, error, ...props }: InputType) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={props.name}>
        {label}
      </label>
      <input
        className={styles.input}
        type={props.type}
        name={props.name}
        id={props.name}
        onChange={props.onChange}
        value={props.value}
        onBlur={props.onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
