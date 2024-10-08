import { BlogPost } from '@/types/Blog-types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const BlogAPI = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    getBlogs: builder.query<BlogPost[], void>({
      query: () => '/blogs',
    }),
    getBlogsById: builder.query<BlogPost, string>({
      query: (id) => `/blogs/${id}`,
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogsByIdQuery } = BlogAPI;
