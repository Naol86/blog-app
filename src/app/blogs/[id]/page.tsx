import SingleBlog from '@/components/SingleBlog/SingleBlog';
import BlogProvider from '@/lib/providers/BlogProvider';
import React from 'react';

export default function page({ params: { id } }: { params: { id: string } }) {
  return (
    <div className='flex justify-center my-10 md:my-28'>
      <BlogProvider>
        <SingleBlog id={id} />
      </BlogProvider>
    </div>
  );
}
