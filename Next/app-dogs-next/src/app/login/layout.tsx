import styles from './login.module.css'

export default function LoginLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <section className={styles.login}>
        <div className={styles.loginForm}>{children}</div>
    </section>
  );
}
