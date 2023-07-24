export interface IPost {
  slug: string | undefined;
  title: string;
  excerpt: string;
  updatedAt: string;
}

export interface PostsProps {
  posts: IPost[];
}
