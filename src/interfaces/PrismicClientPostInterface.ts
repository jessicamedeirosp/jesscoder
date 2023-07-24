export type ResponseProps = {
  data: {
    title: string;
    content: string;
  };
  last_publication_date: string | null;
};

export interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    video?: string;
    updatedAt: string;
  };
}
