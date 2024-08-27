import React from 'react';

export default function PrimaryBtn({ name }: { name: string }) {
  return (
    <button className='bg-blue-700 py-2 px-3 min-w-[40px] rounded-lg text-white font-semibold'>
      {name}
    </button>
  );
}
