import type { GetStaticProps, NextPage } from "next";
import { Post } from "../components/post";
import { useState } from "react";
import { IPost, PostsProps } from "../interfaces/PostsInterface";

import {
  ResultsProps,
  ResponseProps,
} from "../interfaces/PrismicClientPostsInterface";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { Pagination } from "../components/pagination";
import { Adsense } from "../components/adsense";

const Home: NextPage<PostsProps> = ({ posts }: PostsProps) => {
  const [currentItems, setCurrentItems] = useState([] as IPost[]);

  return (
    <div className="wrapper">
      <div className="posts">
        {currentItems.map((post) => (
          <Post post={post} key={post.slug} />
        ))}
        <Adsense dataAdSlot="3678792188" />
      </div>
      <Pagination posts={posts} setCurrentItems={setCurrentItems} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const prismic = getPrismicClient();

    const { results }: ResponseProps = await prismic.query([
      Prismic.predicates.at("document.type", "posts"),
    ]);

    const posts: IPost[] = results.map(
      ({
        uid,
        data: { content, title },
        last_publication_date,
      }: ResultsProps) => {
        return {
          results,
          slug: uid
            ? uid
            : RichText.asText(title)
                .normalize("NFD")
                .replace(/[^a-zA-Z\s]/g, "")
                .toLowerCase()
                .replaceAll(" ", "-"),
          title: RichText.asText(title),

          excerpt: content.find(({ type }) => type === "paragraph")?.text ?? "",
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
      },
    );

    return {
      props: { posts },
      revalidate: 60, //segundos
    };
  } catch (e) {
    return {
      props: { posts: [] },
      revalidate: 60, // segundos
    };
  }
};

export default Home;
