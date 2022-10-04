import React from 'react';
const DevInfo = () => {
  return (
    <div className='mt-20 flex flex-col items-center justify-center'>
      <h1 className='text-center text-4xl font-semibold mb-5 text-nav'>
        Who am I
      </h1>
      <div className='bg-nav h-96 w-96 rounded-full flex flex-col items-center justify-center space-y-1'>
        <p className='text-white text-base tracking-wide'>
          {'{'}
          <br />
          <span className='ml-2'>Name: Athanasios Andrianesis</span>
        </p>
        <p className='text-white text-base tracking-wide'>
          <span className='ml-2'>Email: athanadrian@gmail.com</span>
        </p>
        <p className='text-white text-base tracking-wide'>
          <span className='ml-2'>Mobile/Cell: {'  '}+306983507149</span>
        </p>
        <p className='text-white text-base tracking-wide'>
          <span className='ml-2'>Office/Work: +302106035241</span>
          <br />
          {'}'}
        </p>
      </div>
    </div>
  );
};

export default DevInfo;
