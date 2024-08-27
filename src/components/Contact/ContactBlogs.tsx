import Link from 'next/link';
import React from 'react';

export default function ContactBlogs() {
  const data = ['Recent Blogs', 'New Blog'];
  return (
    <>
      <div>
        <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase '>Blogs</h2>
        <ul className='text-gray-500 font-medium'>
          {data.map((link, index) => (
            <li className='mb-4' key={index}>
              <Link href='#' className='hover:underline'>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
