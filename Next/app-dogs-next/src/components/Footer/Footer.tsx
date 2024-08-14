import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';

export default async function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src={'/icons/dogs-footer.svg'} alt="logo-dogs" width={28} height={22} />
      <p>Dogs. Alguns direitos reservados</p>
    </footer>
  );
}
