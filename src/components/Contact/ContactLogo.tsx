import Image from 'next/image';
import React from 'react';
import PrimaryBtn from '../Buttons/PrimaryBtn';

export default function ContactLogo() {
  return (
    <div className='flex items-center my-5'>
      <div className='mb-6 md:mb-0'>
        <Image src='/assets/images/footer-logo.png' alt='logo' width={250} height={250} />
      </div>
      <div className=''>
        <p className='font-semibold text-lg max-w-sm mb-5'>
          Get involved in improving tech education in Africa!
        </p>
        <PrimaryBtn name={'Support Us'} />
      </div>
    </div>
  );
}
