'use client';
import { useGetBlogsByIdQuery } from '@/lib/features/api/BlogApi';
import React from 'react';
import InnerHTML from 'dangerously-set-html-content';
import RelatedBlog from './RelatedBlog';

export default function SingleBlog({ id }: { id: string }) {
  const { data, isLoading, isError } = useGetBlogsByIdQuery(id);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: </div>;

  return (
    <div className='w-full px-2 md:max-w-3xl lg:max-w-5xl space-y-5'>
      <h1 className='text-center text-2xl'>{data?.title}</h1>
      <p className='text-center text-customMediumGray'>
        {data?.skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </p>
      <div className='w-full'>
        <img src={data?.image} alt={data?.title} className='object-contain w-full' />
      </div>
      <div>
        <div className='flex justify-center'>
          <img
            src={
              data?.author?.image ||
              'https://cdn.pixabay.com/photo/2019/04/12/21/19/man-4123268_960_720.jpg'
            }
            alt=''
            className='w-14 h-14 rounded-full text-center object-cover'
          />
        </div>
        <p className='text-center'>
          <span className='border-r-2 px-3 mr-3'>{data?.author?.name || 'Naol Kasinet'}</span>
          <span>{data?.author?.role || 'Unknown'}</span>
        </p>
      </div>
      <InnerHTML html={data?.description || ''} />

      <h1>Related Blogs</h1>
      <div className='flex mx-auto w-full flex-col md:flex-row flex-wrap justify-center items-center md:justify-around w-[100%]'>
        {Array.from({ length: 3 }).map((_, index) => (
          <RelatedBlog key={index} />
        ))}
      </div>
    </div>
  );
}
