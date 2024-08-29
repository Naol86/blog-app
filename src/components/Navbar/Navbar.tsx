'use client';
import Logo from './Logo';
import Links from './Links';
import Info from './Info';
import { MenuIcon } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className='relative w-full py-5 px-5 md:p-5 border border-1 flex justify-between items-center mb-16'>
      <div className='lg:hidden' onClick={() => setSideBar((pre) => !pre)}>
        <MenuIcon />
      </div>

      {sideBar && (
        <div className='fixed h-[95vh] bg-white top-16 left-0'>
          <Links />
        </div>
      )}

      <div className='hidden lg:block'>
        <Logo />
      </div>
      <div className='hidden lg:block'>
        <Links />
      </div>
      <Info />
    </div>
  );
}
