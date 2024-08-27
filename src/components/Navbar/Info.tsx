import React from 'react';
import PrimaryBtn from '../Buttons/PrimaryBtn';

export default function Info() {
  return (
    <div className='flex items-center'>
      <p className='text-customDarkGray font-bold mr-4'>Login</p>
      <PrimaryBtn name='Donate' />
    </div>
  );
}
