import React from 'react';

const Elements = () => {
  return (
    <div className='text-center items-center justify-center h-64 bg-teal-500'>
      <h1 className='text-lg font-bold'>ATANA</h1>
      <button className='bg-red-500 border border-white text-white rounded'>
        My Button
      </button>
      <div className='rounded-full h-32 bg-cyan-600 w-32'></div>
      <button className='px-2 py-1 bg-teal-900 border border-gray-800 rounded text-white'>
        Button CSS
      </button>
    </div>
  );
};

export default Elements;
