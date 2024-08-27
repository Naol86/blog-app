'use client';
import { navbarLinks } from '@/types/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const links: navbarLinks[] = [
  { name: 'Home', url: '/home' },
  { name: 'About Us', url: '/about-us' },
  { name: 'Team', url: '/team' },
  { name: 'Success Stories', url: '/success-stories' },
  { name: 'Contact Us', url: '/contact-us' },
  { name: 'Blogs', url: '/blogs' },
  { name: 'Get Involved', url: '/get-involved' },
];

export default function Links() {
  const path = usePathname();

  return (
    <div className=' lg:relative bg-white right-0 top-0'>
      <ul className='lg:flex font-montserrat'>
        {links.map((link, index) => (
          <li
            key={index}
            className={`mx-2 text-customGray font-semibold text-sm ${
              link.url === path ? 'text-blue-700' : ''
            }`}
          >
            <div className='px-2'>
              <Link href={link.url}>
                {link.name}
                {path.includes(link.url) ? (
                  <div className='h-1 w-[100%] px-2 bg-blue-700 rounded-full' />
                ) : null}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
