import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";
import { GetServerSideProps } from "next";
import {
  PostProps,
  ResponseProps,
} from "../../interfaces/PrismicClientPostInterface";
import styles from "../../styles/posts.module.css";
import Link from "next/link";
import { PiArrowLeft } from "react-icons/pi";
export default function Post({
  post: { title, updatedAt, content },
}: PostProps) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.posts__info} content-flex`}>
        <Link href="/" className={styles.backToHome}>
          <PiArrowLeft /> Voltar
        </Link>
        {/* <span >2 min de leitura</span> */}
        <time>{updatedAt}</time>
      </div>
      <article className={styles.posts_item}>
        <h1>{title}</h1>
        <div
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query: { slug },
}) => {
  try {
    const prismic = getPrismicClient(req);

    const {
      data: { title, content },
      last_publication_date,
    }: ResponseProps = await prismic.getByUID("posts", String(slug), {});

    const post = {
      slug,
      title: RichText.asText(title),
      content: RichText.asHtml(content),
      updatedAt: last_publication_date
        ? new Date(last_publication_date).toLocaleString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })
        : "",
    };

    return {
      props: { post },
    };
  } catch (e) {
    return {
      props: { post: {} },
    };
  }
};
