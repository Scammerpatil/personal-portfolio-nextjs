type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  _id: number;
  title: string;
  paragraph: string;
  imageURL: string;
  author: Author;
  tags: string[];
  slugs: string;
  publishDate: string;
};
