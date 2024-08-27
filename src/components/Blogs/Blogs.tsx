'use client';
import { useGetBlogsQuery } from '@/lib/features/api/BlogApi';
import React from 'react';
import Blog from './Blog';
import Header from '../Header/Header';

export default function Blogs() {
  const { data, isLoading, isError } = useGetBlogsQuery();
  if (isLoading) return <div className='h-[60vh]'>Loading...</div>;
  return (
    <div className='md:w-2/3 w-full px-2 space-y-5'>
      <Header />
      {data?.map((blog, index) => (
        <Blog key={index} blog={blog} />
      ))}
    </div>
  );
}
