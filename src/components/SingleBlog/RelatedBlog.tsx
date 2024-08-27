import React from 'react';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import SecondaryBtn from '../Buttons/SecondaryBtn';
import { MessageSquare } from 'lucide-react';

export default function RelatedBlog() {
  return (
    <div className='w-72 border-2 p-2 rounded-md m-5'>
      <img
        src='/assets/images/footer-logo.png'
        alt='temp'
        className='w-full max-h-36 object-contain'
      />
      <p className='text-customDarkGray'>Design Liberalized Exchange Rate Management</p>
      <div className='text-sm text-customGray my-3 space-y-2'>
        <img
          src='/assets/images/footer-logo.png'
          alt='temp'
          className='w-10 h-10 rounded-full object-cover'
        />
        by <span className='text-customGray'>Naol Kasinet</span> | <span>Jun 10, 2021</span>
        <SecondaryBtn text='UI/UX' />
        <SecondaryBtn text='DEVELOPMENT' />
      </div>
      <p className='text-xs text-customDarkGray text-justify my-3'>
        A little personality goes a long way, especially on a business blog. So don’t be afraid to
        let loose.
      </p>
      <div className='flex justify-between border-t mt-3 py-3 px-2'>
        <div className='flex items-center font-montserrat'>
          <MessageSquare className='text-customMediumGray' />{' '}
          <span className='ml-2'>2.3k Likes</span>
        </div>
        <p className='text-indigo-700 font-medium'>Read More</p>
      </div>
    </div>
  );
}
