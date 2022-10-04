import React from 'react';

const Flexbox = () => {
  return (
    <div className='w-screen'>
      <h1 className='text-4xl font-semibold'>Tailwind Flexbox</h1>
      {/* <div className='flex space-x-2'> */}
      <div className='flex flex-nowrap space-x-2 h-52 border border-black justify-between items-center'>
        <div className='bg-red-500 h-20 w-52'>
          <h1>Box 1</h1>
        </div>
        <div className='bg-blue-500 h-20 w-52'>
          <h1>Box 2</h1>
        </div>
        <div className='bg-green-500 h-20 w-52'>
          <h1>Box 3</h1>
        </div>
      </div>
    </div>
  );
};

export default Flexbox;
