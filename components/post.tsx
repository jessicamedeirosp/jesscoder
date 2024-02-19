import Link from "next/link";
import { IPost } from "../interfaces/PostsInterface";
import styles from "../styles/post.module.css";
interface IProps {
  post: IPost;
}
export function Post({ post }: IProps) {
  const { slug, updatedAt, title, excerpt } = post;
  return (
    <Link key={slug} href={`/blog/${slug}`}>
      <div className={styles.post}>
        <h2 className={styles.post__title}>{title}</h2>
        <p className={styles.post__text}>{excerpt}</p>

        <p
          className={`${styles.post__date}  content-flex content-flex-between`}
        >
          {/* <span>2 min de leitura</span> */}
          <span>{updatedAt}</span>
        </p>
      </div>
    </Link>
  );
}
