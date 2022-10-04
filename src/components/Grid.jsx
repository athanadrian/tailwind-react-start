import React from 'react';

const Grid = () => {
  return (
    <>
      <h1 className='text-4xl font-semibold'>GRID</h1>
      <div className='grid grid-cols-8'>
        <div className='bg-red-500 h-52 col-span-2 sm:col-span-8'>Box 1</div>
        <div className='bg-blue-500 h-52 col-span-2 sm:col-span-8'>Box 2</div>
        <div className='bg-green-500 h-52 col-span-2 sm:col-span-8'>Box 3</div>
        <div className='bg-yellow-500 h-52 col-span-2 sm:col-span-8'>Box 4</div>
      </div>
      <div className='mt-5 grid grid-cols-4 sm:grid-cols-1'>
        <div className='bg-red-500 h-52'>Box 1</div>
        <div className='bg-blue-500 h-52'>Box 2</div>
        <div className='bg-green-500 h-52'>Box 3</div>
        <div className='bg-yellow-500 h-52'>Box 4</div>
      </div>
    </>
  );
};

export default Grid;
