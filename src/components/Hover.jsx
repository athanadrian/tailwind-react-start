import React from 'react';

const Hover = () => {
  return (
    <div>
      <h1 className='text-4xl font-semibold m-4'>Hover Effect</h1>
      <button className='m-4 px-14 py-2 w-max text-white hover:text-gray-400 bg-red-500 hover:bg-red-200 rounded-full'>
        HOVER ME
      </button>
    </div>
  );
};

export default Hover;
