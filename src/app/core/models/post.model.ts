export enum ContentStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED'
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
export interface Img {
  id: string;
  url: string;
  alt: string;
}
export interface Source {
  label: string;
  url: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: Img,
  status: ContentStatus;
  publishedAt?: Date;
  author: User;
  authorId: string;
  categories: Category[];
  tags: Tag[];
  source: Source[];
  vimeo:string;
  youtube:string;
  createdAt: Date;
  updatedAt: Date;
}