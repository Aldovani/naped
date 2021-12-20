import React from "react";
import styles from "./style.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.logo}>Naped</h2>
      <p className={styles.copyright}>
        Todas as imagens de filmes, séries e etc são marcas registradas dos seus
        respectivos proprietários.
      </p>
    </footer>
  );
};

export default Footer;
