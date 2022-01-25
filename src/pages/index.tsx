/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Prismic from "prismic-javascript";
import CardNews from "../components/CardNews";
import Footer from "../components/Footer";
import NewsRecent from "../components/NewsRecent";
import styles from "../styles/Home.module.css";
import { News } from "../types";


type HomeProps = {
  newsRecent: News[];
}


export default function Home({ newsRecent }:HomeProps) {
  return (
    <>
      <section className={styles.box}>
        <h1 className={styles.title}>
          Mundo nerd?
          <br />
          Naped!
        </h1>
        <p className={styles.paragraph}>
          O Naped pode ser sua fonte de informações sobre o mundo nerd e outros
          assuntos relacionados.
        </p>
      </section>

      <main className={styles.content}>
        <section className={styles.contentMain}>
          <div className={styles.containerImage}>
            <div className={styles.shadow} />
            <img src="/assets/picture_1.png" alt="" />
            <p className={`${styles.textImage} ${styles.textSizeLg}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eros tellus, malesuada et velit in, blandit molestie dolor.
            </p>
            <span className={styles.category}>Lorem</span>
          </div>

          <div className={styles.containerBox}>
            <div className={styles.containerImage}>
              <div className={styles.shadow} />

              <img src="/assets/picture_2.png" alt="Imagem 2" />
              <p className={`${styles.textImage} ${styles.textSizeSm}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </p>
              <span className={styles.category}>Lorem</span>
            </div>

            <div className={styles.containerImage}>
              <div className={styles.shadow} />

              <img src="/assets/picture_7.png" alt="" />

              <p className={`${styles.textImage} ${styles.textSizeSm}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eros tellus, malesuada et velit in, blandit molestie dolor.
              </p>
              <span className={styles.category}>Lorem</span>
            </div>
          </div>
        </section>

        <div className={styles.containerNews}>
          <section>
            <div className={styles.boxNews}>
              <div className={styles.containerImage}>
                <div className={`${styles.shadow} ${styles.bg}`} />

                <img
                  className={styles.imageSm}
                  src="/assets/picture_6.png"
                  alt="Imagem 3"
                />
                <span className={styles.category}>Lorem</span>
              </div>

              <div className={styles.contentNews}>
                <p className={styles.titleNews}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eros tellus, malesuada et velit in, blandit molestie dolor.
                </p>
                <p className={styles.descriptionNews}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eros tellus, malesuada et velit in, blandit molestie dolor.
                </p>

                <p className={styles.dateNews}>00/00/00</p>
                <Link href="/">
                  <a className={styles.readNews}>Ler noticia</a>
                </Link>
              </div>
            </div>

            <div className={styles.boxNews}>
              <div className={styles.containerImage}>
                <div className={`${styles.shadow} ${styles.bg}`} />

                <img
                  className={styles.imageSm}
                  src="/assets/picture_3.png"
                  alt="Imagem 3"
                />
                <span className={styles.category}>Lorem</span>
              </div>

              <div className={styles.contentNews}>
                <p className={styles.titleNews}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eros tellus, malesuada et velit in, blandit molestie dolor.
                </p>
                <p className={styles.descriptionNews}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eros tellus, malesuada et velit in, blandit molestie dolor.
                </p>
                <p className={styles.dateNews}>00/00/00</p>
                <Link href="/">
                  <a className={styles.readNews}>Ler noticia</a>
                </Link>{" "}
              </div>
            </div>

            <div className={styles.boxNews}>
              <div className={styles.containerImage}>
                <div className={`${styles.shadow} ${styles.bg}`} />

                <img
                  className={styles.imageSm}
                  src="/assets/picture_12.png"
                  alt="Imagem 3"
                />
                <span className={styles.category}>Lorem</span>
              </div>

              <div className={styles.contentNews}>
                <p className={styles.titleNews}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eros tellus, malesuada et velit in, blandit molestie dolor.
                </p>
                <p className={styles.descriptionNews}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eros tellus, malesuada et velit in, blandit molestie dolor.
                </p>
                <p className={styles.dateNews}>00/00/00</p>
                <Link href="/">
                  <a className={styles.readNews}>Ler noticia</a>
                </Link>{" "}
              </div>
            </div>

            <div className={styles.boxNews}>
              <div className={styles.containerImage}>
                <div className={`${styles.shadow} ${styles.bg}`} />

                <img
                  className={styles.imageSm}
                  src="/assets/picture_4.png"
                  alt="Imagem 4"
                />
                <span className={styles.category}>Games</span>
              </div>

              <div className={styles.contentNews}>
                <p className={styles.titleNews}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eros tellus, malesuada et velit in, blandit molestie dolor.
                </p>
                <p className={styles.descriptionNews}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eros tellus, malesuada et velit in, blandit molestie dolor.
                </p>
                <p className={styles.dateNews}>00/00/00</p>
                <Link href="/news/minecraft">
                  <a className={styles.readNews}>Ler noticia</a>
                </Link>{" "}
              </div>
            </div>

            <div className={styles.boxNews}>
              <div className={styles.containerImage}>
                <div className={`${styles.shadow} ${styles.bg}`} />

                <img
                  className={styles.imageSm}
                  src="/assets/picture_8.png"
                  alt="Imagem 4"
                />
                <span className={styles.category}>Lorem</span>
              </div>

              <div className={styles.contentNews}>
                <p className={styles.titleNews}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eros tellus, malesuada et velit in, blandit molestie dolor.
                </p>
                <p className={styles.descriptionNews}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eros tellus, malesuada et velit in, blandit molestie dolor.
                </p>
                <p className={styles.dateNews}>00/00/00</p>
                <Link href="/">
                  <a className={styles.readNews}>Ler noticia</a>
                </Link>{" "}
              </div>
            </div>
          </section>

          <aside>
            <h2 className={`${styles.titleNewsResents} ${styles.mbSm}`}>
              Populares
            </h2>
            <div className={styles.containerNewsPopular}>
              <CardNews
                urlNews="/"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                category="Lorem"
                urlImage="/assets/picture_11.png"
              />
              <CardNews
                urlNews="/"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                category="Lorem"
                urlImage="/assets/picture_9.png"
              />
              <CardNews
                urlNews="/"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                category="Lorem"
                urlImage="/assets/picture_10.png"
              />
            </div>
          </aside>
        </div>

        <NewsRecent    newsRecent={newsRecent} />
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const client = Prismic.client("https://naped-desafio.prismic.io/api/v2");

  const news = await client.query(
    Prismic.Predicates.at("document.type", "news"), {
      orderings: '[document.last_publication_date  desc]',
      pageSize: 9,
    }
  );


  

  return {
    props: {
      newsRecent: news.results,
    },
  };
}
