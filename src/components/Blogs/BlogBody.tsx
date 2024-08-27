import { BlogBodyProps } from '@/types/Blog-types';
import React from 'react';
import InnerHTML from 'dangerously-set-html-content';

export default function BlogBody({ title, content, image }: BlogBodyProps) {
  return (
    <div className='md:flex justify-between gap-5 items-center'>
      <div className='md:w-2/3 w-full'>
        <h1>{title}</h1>
        <p className='text-customMediumGray font-medium text-justify line-clamp-6'>
          <InnerHTML html={content} />
        </p>
      </div>
      <div className='md:w-1/3 w-full mt-3 md:mt-0'>
        <img src={image} alt='blog' className='w-full h-full rounded-xl object-cover' />
      </div>
    </div>
  );
}
