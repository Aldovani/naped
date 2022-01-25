/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

type CardNewsProps = {
  urlImage: string;
  urlNews: string;
  title: string;
  category?: string;
};

const CardNews: React.FC<CardNewsProps> = ({
  urlImage,
  urlNews,
  title,
  category,
}) => {
  return (
    <Link href={`/news/${urlNews}`}>
      <a>
        <div className={styles.containerImage}>
          <div className={styles.shadow} />
          <img src={urlImage} alt={title}  className={styles.maxHeight} />
          <p className={`${styles.textImage} ${styles.textSizeSm}`}>{title}</p>

          {category && <span className={styles.category}>{category}</span>}
        </div>
      </a>
    </Link>
  );
};

export default CardNews;
