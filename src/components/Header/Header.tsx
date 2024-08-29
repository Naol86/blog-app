import React from 'react';
import AddBtn from '../Buttons/AddBtn';

export default function Header() {
  return (
    <div className='my-10 flex justify-between px-5 items-center mb-20'>
      <div>
        <h1 className='text-xl md:text-3xl'>Blog</h1>
      </div>
      <div className='flex items-center'>
        <input
          type='text'
          placeholder='search...'
          className='w-28 md:w-56 h-10 p-5 rounded-3xl mr-3 text-customGray font-semibold outline-none border-2'
        />
        <AddBtn />
      </div>
    </div>
  );
}
