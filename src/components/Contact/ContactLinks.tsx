'use client';
import Link from 'next/link';
import React from 'react';
import { links } from '../Navbar/Links';

export default function ContactLinks() {
  const data = links.filter((link) => !['/contact-us', '/team', '/blogs'].includes(link.url));

  return (
    <>
      <div>
        <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase '>Links</h2>
        <ul className='text-gray-500 font-medium'>
          {data.map((link, index) => (
            <li className='mb-4' key={index}>
              <Link href={link.url} className='hover:underline text-lg'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
