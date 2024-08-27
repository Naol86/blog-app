export interface Author {
  id: string;
  name: string;
  email: string;
  image: string;
  role: string;
}

export interface BlogPost {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: Author;
  isPending: boolean;
  tags: string[];
  likes: number;
  relatedBlogs: BlogPost[];
  skills: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface BlogHeaderProps {
  image: string;
  author: Author;
  profession: string;
  date: string;
}

export interface BlogBodyProps {
  title: string;
  content: string;
  image: string;
}
