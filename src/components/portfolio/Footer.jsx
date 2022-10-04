import React from 'react';

const Footer = () => {
  return (
    <div>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#4B8FE2'
          fill-opacity='1'
          d='M0,256L1440,192L1440,320L0,320Z'
        ></path>
      </svg>
      <div className='bg-nav flex flex-col justify-center items-center text-white'>
        Atana Design ©{new Date().getFullYear()}
        <div className='border border-white w-1/2 my-2' />
        Created by DevWithMe
      </div>
    </div>
  );
};

export default Footer;
