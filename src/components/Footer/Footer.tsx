import React from 'react';
import Contact from '../Contact/Contact';
import FooterInfo from './FooterInfo';

export default function Footer() {
  return (
    <footer className='bg-white border-t bottom-0 w-full'>
      <Contact />
      <FooterInfo />
    </footer>
  );
}
