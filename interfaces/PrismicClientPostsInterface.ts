export interface ResultsProps {
  uid?: string;
  data: {
    title: string;
    content: [
      {
        type: string;
        text: string;
      },
    ];
  };
  last_publication_date: string | null;
}

export interface ResponseProps {
  results: ResultsProps[];
}
