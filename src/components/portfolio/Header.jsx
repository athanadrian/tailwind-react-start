import React from 'react';

const Header = () => {
  return (
    <>
      <div className='flex bg-nav justify-between items-center p-3'>
        <h1 className='text-4xl tracking-wider text-white'>Atana</h1>
        <div className='flex space-x-5'>
          <a
            href='@'
            className='text-white font-semibold hover:underline hover:text-gray-200'
          >
            Home
          </a>
          <a
            href='@'
            className='text-white font-semibold hover:underline hover:text-gray-200'
          >
            Projects
          </a>
          <a
            href='@'
            className='text-white font-semibold hover:underline hover:text-gray-200'
          >
            Services
          </a>
          <a
            href='@'
            className='text-white font-semibold hover:underline hover:text-gray-200'
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
