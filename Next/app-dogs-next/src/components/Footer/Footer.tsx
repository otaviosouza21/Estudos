import React from 'react';
import styles from './Footer.module.css';
import Dogs from '../../../public/icons/dogs.svg'
import Image from 'next/image';

export default async function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src={Dogs} alt="logo-dogs" width={28} height={22} />
      <p>Dogs. Alguns direitos reservados</p>
    </footer>
  );
}
