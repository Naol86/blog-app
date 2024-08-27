import { BlogHeaderProps } from '@/types/Blog-types';
import React from 'react';

export default function BlogHeader({ image, author, profession, date }: BlogHeaderProps) {
  const timestamp = new Date(date);
  const formattedDate = timestamp.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <div className='flex items-center gap-4'>
        <img
          className='w-14 h-14 rounded-full object-cover'
          src={
            author.image || 'https://cdn.pixabay.com/photo/2019/04/12/21/19/man-4123268_960_720.jpg'
          }
          alt=''
        />
        <div className='font-medium font-montserrat'>
          <div>
            <span className='font-semibold text-lg '>{author.name || 'Naol Kasinet'}</span>{' '}
            <span className='mx-2 text-2xl align-bottom'>.</span>
            <span className='text-sm text-customDarkGray'>{formattedDate}</span>
          </div>
          <div className='text-sm text-gray-500 '>{author.role || 'Unknown'}</div>
        </div>
      </div>
    </div>
  );
}
