import React from 'react';
import ContactLinks from './ContactLinks';
import ContactTeam from './ContactTeam';
import ContactBlogs from './ContactBlogs';
import ContactLogo from './ContactLogo';

export default function Contact() {
  return (
    <footer className='bg-white border-t bottom-0 w-full gap-5'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <ContactLogo />
          <div className='grid grid-cols-2 gap-10 sm:gap-6 sm:grid-cols-3'>
            <ContactLinks />
            <ContactTeam />
            <ContactBlogs />
          </div>
        </div>
      </div>
    </footer>
  );
}
