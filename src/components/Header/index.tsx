import React, { useState } from "react";
import styles from "./style.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Header: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  // console.log(router); 
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Naped</h1>
      <nav>
        <ul className={`${styles.links} ${isOpen ? styles.open : ""}`}>
          <li>
            <Link href="/">
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                className={`${router.asPath === "/" ? styles.active : ""}`}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/category/series">
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                className={`${
                  router.asPath === "/category/series" ? styles.active : ""
                }`}
              >
                Series
              </a>
            </Link>
          </li>
          <li>
            <Link href="/category/filmes">
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                className={`${
                  router.asPath === "/category/filmes" ? styles.active : ""
                }`}
              >
                Filmes
              </a>
            </Link>
          </li>
          <li>
            <Link href="/category/animes">
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                className={`${
                  router.asPath === "/category/animes" ? styles.active : ""
                }`}
              >
                Animes
              </a>
            </Link>
          </li>
          <li>
            <Link href="/category/games">
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                className={`${
                  router.asPath === "/category/games" ? styles.active : ""
                }`}
              >
                Games
              </a>
            </Link>
          </li>
        </ul>
        <div
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
