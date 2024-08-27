import Logo from './Logo';
import Links from './Links';
import Info from './Info';

export default function Navbar() {
  return (
    <div className='w-full py-5 px-5 md:p-5 border border-1 flex justify-between items-center mb-20'>
      <Logo />
      <div className='hidden lg:block'>
        <Links />
      </div>
      <Info />
    </div>
  );
}
