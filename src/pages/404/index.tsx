/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./style.module.css";
import {useRouter} from 'next/router'

const NotFound: React.FC = () => {
  const router= useRouter()
  return (
    <>
      <main className={styles.container}>
        <div>
          <h2 className={styles.title}>Tenho más notícias para você!</h2>
          <p className={styles.description}>
            A página que você está procurando pode ter sido removida ou está
            temporariamente indisponível.
          </p>
          <button className={styles.button} onClick={() => {
            router.push("/");
          }}>Voltar a home</button>
        </div>
        <div>
          <img src="/assets/404.svg" alt="" />
          <p className={styles.descriptionImage}>Ups! Você chegou no espaço... volte para o mundo nerd!</p>
        </div>
      </main>
    </>
  );
};

export default NotFound;
