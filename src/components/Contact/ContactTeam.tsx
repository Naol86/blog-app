import Link from 'next/link';
import React from 'react';

export default function ContactTeams() {
  const data = ['Board Members', 'Advisors/Mentors', 'Executives', 'Staffs'];
  return (
    <>
      {' '}
      <div>
        <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase'>Team</h2>
        <ul className='text-gray-500 font-medium'>
          {data.map((link, index) => (
            <li key={index} className='mb-4'>
              <Link href='/' className='hover:underline '>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
