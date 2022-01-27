/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./style.module.css";
import CardNews from "../CardNews";
import { News } from "../../types";

type NewRecentProps = {
  newsRecent: News[];
};

const NewsRecent = ({ newsRecent }: NewRecentProps) => {
  return (
    <section>
      <h2 className={styles.titleNewsResents}>Notícias mais recentes</h2>
      <div className={styles.grid}>
        {newsRecent?.map(({ data, uid }, index) => {
          return (
            <CardNews
              urlNews={uid}
              key={index}
              title={data.title[0].text}
              urlImage={data.image.url}
            />
          );
        })}
      </div>
    </section>
  );
};

export default NewsRecent;
