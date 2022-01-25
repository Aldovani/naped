/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import CardNews from "../../components/CardNews";
import styles from "./style.module.css";
import Head from "next/head";
import Link from "next/link";
import Prismic from "prismic-javascript";
import useDebounce from "../../hooks/useDebounce ";
import { News} from "../../types";

type CategoryProps = {
  resultNews: News[];
  category: string;
  totalPages: number;
}

const Category: React.FC<CategoryProps> = ({ resultNews, category, totalPages }) => {
  const [input, setInput] = useState("");
  const [newsFiltered, setNewsFiltered] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState<News[]>(resultNews);

  useEffect(() => {
    setNews(resultNews);
    setInput("");
    setCurrentPage(1);
  }, [resultNews, category]);

  const Debounce = useDebounce(handleNews, 500);

  function goToNextPage() {
    setCurrentPage((currentPage) => currentPage + 1);
  }
  function goToPreviousPage() {
    setCurrentPage((currentPage) => currentPage - 1);
  }

  async function handleNews() {
    const client = Prismic.client("https://naped-desafio.prismic.io/api/v2");

    if (input.trim().length > 0) {
      const teste = await client.query(
        [
          Prismic.Predicates.fulltext("my.news.category", category),
          Prismic.Predicates.fulltext("my.news.title", input),
        ],
        {
          pageSize: 5,
          page: 1,
          orderings: "[document.last_publication_date  desc]",
        }
      );
      return setNewsFiltered(teste.results);
    }
  }

  return (
    <>
      <Head>
        <title>Naped {category}</title>
      </Head>
      <section className={styles.containerImage}>
        <div className={styles.shadowBanner} />
        <img
          src={`/assets/${category}.jpg`}
          className={styles.maxHeight}
          alt={`banner ${category}`}
          title={`banner ${category}`}
        />
        <div className={styles.textBanner}>
          <h2 className={styles.title}>{category}</h2>
          <p className={styles.description}>
            O Naped pode ser sua fonte de informações sobre o mundo nerd e
            outros assuntos relacionados.
          </p>
        </div>
      </section>
      <main>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleNews();
          }}
        >
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              Debounce();
              setOpen(true);
            }}
            type="text"
            className={styles.input}
            placeholder="Quer ajuda na procura? Pesquise aqui"
          />
          <button className={styles.button}>
            <img src="/assets/busca.svg" alt="search" />
          </button>
          <div className={styles.results} onMouseLeave={() => setOpen(false)}>
            <ul>
              {input.trim() !== "" &&
                open &&
                newsFiltered?.map((news: News, i) => {
                  return (
                    <Link href={`/news/${news.uid}`} key={i}>
                      <a>
                        <li>{news.data.title[0].text}</li>
                      </a>
                    </Link>
                  );
                })}
              {open && newsFiltered.length == 0 && input.trim() !== "" && (
                <li>Não encontrado </li>
              )}
            </ul>
          </div>
        </form>

        <div className={styles.grid}>
          {news?.map((news) => (
            <CardNews
              key={news.id}
              title={news.data.title[0].text}
              urlImage={news.data.image.url}
              urlNews={news.uid}
            />
          ))}
        </div>

        <div className={styles.pages}>
          <button
            className={styles.buttonPages}
            disabled={currentPage === 1}
            onClick={async () => {
              if (currentPage > 1) {
                goToPreviousPage();
                const { results } = await getNewsPage(
                  currentPage - 1,
                  category
                );
                setNews(results as News[]);
              }
            }}
          >
            <img src="/assets/left.svg" alt="" />
          </button>

          <span>
            <span className={styles.pageCurrent}>{currentPage} </span>
            de {totalPages}
          </span>

          <button
            className={styles.buttonPages}
            disabled={currentPage === totalPages}
            onClick={async () => {
              if (currentPage < totalPages) {
                goToNextPage();
                const { results } = await getNewsPage(
                  currentPage + 1,
                  category
                );
                setNews(results as News[]);
              }
            }}
          >
            <img src="/assets/right.svg" alt="" />
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Category;

export async function getServerSideProps(context) {
  const { category } = context.query;
  const categories = ["animes", "series", "games", "filmes"];

  if (categories.includes(category)) {
    const news = await getNewsPage(1, category);
    return {
      props: {
        resultNews: news.results,
        totalPages: news.total_pages,
        category: category,
      },
    };
  }

  return {
    redirect: {
      destination: "/404",
    },
  };
}

async function getNewsPage(page: number, category: string) {
  const client = Prismic.client("https://naped-desafio.prismic.io/api/v2");

  const news = await client.query(
    Prismic.Predicates.fulltext("my.news.category", category),
    {
      pageSize: 12,
      page: page,
      orderings: "[document.last_publication_date  desc]",
    }
  );
  return news;
}
