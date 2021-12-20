/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import CardNews from "../../components/CardNews";
import styles from "./style.module.css";
import Head from "next/head";
import Link from "next/link";
import Prismic from "prismic-javascript";
import useDebounce from "../../hooks/useDebounce ";

const Category: React.FC = ({ resultNews, category, totalPages }: any) => {
  const [input, setInput] = useState("");
  const [newsFiltered, setNewsFiltered] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState(resultNews);
  const [pages, setPages] = useState(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  });
  useEffect(() => {
    setNews(resultNews);
    setInput("");
    setCurrentPage(1);
  }, [resultNews,category]);

  const Debounce = useDebounce(handleNews, 500);

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

  async function handlePage(page: number) {
    const client = Prismic.client("https://naped-desafio.prismic.io/api/v2");

    const news = await client.query(
      Prismic.Predicates.fulltext("my.news.category", category),
      {
        pageSize: 2, page: page,
        orderings: "[document.last_publication_date  desc]"

      }
    );
    setNews(news.results);
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
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        >
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              Debounce();
            }}
            type="text"
            className={styles.input}
            placeholder="Quer ajuda na procura? Pesquise aqui"
          />
          <button className={styles.button}>
            <img src="/assets/busca.svg" alt="search" />
          </button>
          <div className={styles.results}>
            <ul>
              {input.trim() !== "" && open
                ? newsFiltered?.map((news: any, i) => {
                    return (
                      <Link href={`/news/${news.uid}`} key={i}>
                        <a>
                          <li>{news.data.title[0].text}</li>
                        </a>
                      </Link>
                    );
                  })
                : null}
              {open && newsFiltered.length == 0 && input.trim() !== "" && (
                <li>Não encontrado </li>
              )}
            </ul>
          </div>
        </form>

        <div className={styles.grid}>
          {news?.map((news: any) => (
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
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
                handlePage(currentPage);
              }
            }}
          >
            <img src="/assets/left.svg" alt="" />
          </button>

          {pages.map((page) => (
            <button
              key={page}
              className={`${styles.buttonPages} ${
                page === currentPage ? styles.pageCurrent : ""
              }`}
              onClick={() => {
                setCurrentPage(page);
                handlePage(page);
                alert("teste");

              }}
            >
              {page}
            </button>
          ))}

          <button
            className={styles.buttonPages}
            disabled={currentPage === totalPages}
            onClick={() => {
              if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
                handlePage(currentPage);
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
    const client = Prismic.client("https://naped-desafio.prismic.io/api/v2");

    const news = await client.query(
      Prismic.Predicates.fulltext("my.news.category", category),
      {
        pageSize: 12,
        page: 1,
        orderings: "[document.last_publication_date  desc]"
      }
    );

    console.log(news);
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
