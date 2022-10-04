import React from 'react';
import { FaCss3, FaNodeJs, FaReact } from 'react-icons/fa';
import { BsBootstrapFill } from 'react-icons/bs';
import {
  SiMongodb,
  SiExpress,
  SiAntdesign,
  SiTailwindcss,
} from 'react-icons/si';
const Technologies = () => {
  return (
    <div className='mt-20'>
      <h1 className='text-center text-4xl font-semibold text-nav'>
        Technologies
      </h1>
      <div className='grid grid-cols-4 mt-20 sm:grid-cols-1 md:grid-cols-2 sm:space-y-2 md:space-y-2 text-nav'>
        <div>
          <FaReact
            className='w-full hover:text-react hover:scale-105 transition-all cursor-pointer'
            size={150}
          />
        </div>
        <div>
          <FaNodeJs
            className='w-full hover:text-green-600 hover:scale-105 transition-all cursor-pointer'
            size={150}
          />
        </div>
        <div>
          <SiMongodb
            className='w-full hover:text-green-400 hover:scale-105 transition-all cursor-pointer'
            size={150}
          />
        </div>
        <div>
          <SiExpress
            className='w-full hover:text-red-600 hover:scale-105 transition-all cursor-pointer'
            size={150}
          />
        </div>
      </div>
      <div className='grid grid-cols-4 mt-20 sm:grid-cols-1 sm:space-y-2 md:space-y-2 md:grid-cols-2 text-nav'>
        <div>
          <BsBootstrapFill
            className='w-full hover:text-purple-600 hover:scale-105 transition-all cursor-pointer'
            size={150}
          />
        </div>
        <div>
          <SiAntdesign
            className='w-full hover:text-blue-600 hover:scale-105 transition-all cursor-pointer'
            size={150}
          />
        </div>
        <div>
          <SiTailwindcss
            className='w-full hover:text-tailwind hover:scale-105 transition-all cursor-pointer'
            size={150}
          />
        </div>
        <div>
          <FaCss3
            className='w-full hover:text-yellow-600 hover:scale-105 transition-all cursor-pointer'
            size={150}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
