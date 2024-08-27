import React from 'react';

export default function SecondaryBtn({ text }: { text: string }) {
  return (
    <button className='py-2 px-3 min-w-5 text-xs text-customGray font-montserrat mx-1 font-semibold rounded-3xl bg-customLightGray'>
      {text}
    </button>
  );
}
