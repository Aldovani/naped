import React from "react";
import Prismic from "prismic-javascript";
import styles from "./style.module.css";
import Image from "next/image";
import Footer from "../../components/Footer";
import NewsRecent from "../../components/NewsRecent";
import { parseISO, format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

const News: React.FC = ({ news, newsRecent }: any) => {
  const {
    title,
    image,
    image2,
    text1,
    text2,
    text3,
    category,
    date,
    description,
  } = news.data;
  console.log(news.data);
  const dateFormatted = format(parseISO(date), "dd MMMM yyyy", {
    locale: ptBr,
  })
    .split(" ")
    .join(" de ");
  
  
  return (
    <>
      <section>
        <h1 className={styles.titleNews}>{title[0].text}</h1>
        <p className={styles.descriptionNews}>{description[0].text}</p>
        <span className={styles.dateNews}>{dateFormatted}</span>
      </section>

      <main>
        <div className={styles.containerImage}>
          <Image src={image.url} alt={image.alt} width={1120} height={450} />
          <span className={styles.category}>{category}</span>
        </div>

        <p className={styles.textNews}>{text1[0].text}</p>

        <p className={styles.textNews}>{text2[0].text}</p>

        <Image src={image2.url} alt={image2.alt} width={1200}  height={450} />
        <p className={styles.textNews}>{text3[0].text}</p>
      </main>

      <NewsRecent news={newsRecent} />

      <Footer />
    </>
  );
};

export default News;

export async function getServerSideProps(context) {
  const { id } = context.params;
  const client = Prismic.client("https://naped-desafio.prismic.io/api/v2");

  try {
    const news = await client.query(Prismic.Predicates.at("my.news.uid", id));

    const newsRecent = await client.query(
      Prismic.Predicates.at("document.type", "news"),
      {
        orderings: "[document.last_publication_date  desc]",
        pageSize: 9,
      }
    );

    if (news.results_size) {
      return {
        props: {
          news: news.results[0],
          newsRecent: newsRecent.results,
        },
      };
    } else {
      return {
        redirect: {
          destination: "/404",
        },
      };
    }
  } catch (e) {
    console.log(e);
  }
}
