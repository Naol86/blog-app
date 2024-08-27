import Image from 'next/image';

export default function Logo() {
  return (
    <div className='relative'>
      <Image
        // fill
        alt='logo'
        src='/assets/images/logo.png'
        width={120}
        height={60}
        // sizes='(100px'
        // className='min-w-[100] max-w[150]'
      />
    </div>
  );
}
