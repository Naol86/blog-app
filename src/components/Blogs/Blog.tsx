import { BlogPost } from '@/types/Blog-types';
import React from 'react';
import BlogHeader from './BlogHeader';
import BlogBody from './BlogBody';
import BlogTag from './BlogTag';
import Link from 'next/link';

export default function Blog({ blog }: { blog: BlogPost }) {
  return (
    <div className='border-t w-full p-3 space-y-2'>
      <Link href={`/blogs/${blog._id}`}>
        <BlogHeader
          image='temp'
          author={blog.author || ''}
          profession='temp'
          date={blog.createdAt}
        />
        <BlogBody title={blog.title} content={blog.description} image={blog.image} />
        <BlogTag tags={blog.tags} />
      </Link>
    </div>
  );
}
