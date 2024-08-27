import { Plus } from 'lucide-react';
import React from 'react';

export default function AddBtn() {
  return (
    <button className='px-3 md:px-6 py-3 bg-blue-700 rounded-3xl text-white font-semibold'>
      <span className='flex space-x-3'>
        <Plus />
        New Blog
      </span>
    </button>
  );
}
