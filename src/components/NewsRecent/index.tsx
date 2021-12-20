/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./style.module.css";
import CardNews from "../CardNews";


const NewsRecent = ({ news }: any) => {
  return (
    <section>
      <h2 className={styles.titleNewsResents}>Notícias mais recentes</h2>
      <div className={styles.grid}>
        {news?.map((item, index) => {
const data = item.data
          
          return(
        
            
            <CardNews
            urlNews={item.uid}
            key={index}
            title={data.title[0].text}
            urlImage={data.image.url}
            category={data.category[0].text}
            />
            )
          }
           )}
      </div>
    </section>
  );
};

export default NewsRecent;
