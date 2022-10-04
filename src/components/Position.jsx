import React from 'react';

const Position = () => {
  return (
    <>
      {/* FIXED POSITION */}
      {/*<div className='bg-blue-500 p-5 flex space-x-5 text-white justify-end relative'>
        <a href='@' className=''>
          Home
        </a>
        <a href='@' className=''>
          Service
        </a>
        <a href='@' className=''>
          About
        </a>
      </div>
      <button className='rounded-full w-max bg-red-500 text-white text-2xl font-semibold p-2 fixed top-0 left-0 right-0'>
        OK
      </button>
      <h1 className='text-4xl p-20'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo culpa
        eligendi laborum expedita unde numquam, dolorem adipisci labore
        recusandae repellat nihil iste esse vero! Placeat esse voluptatem
        consequatur voluptatibus repudiandae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nemo culpa eligendi laborum expedita unde
        numquam, dolorem adipisci labore recusandae repellat nihil iste esse
        vero! Placeat esse voluptatem consequatur voluptatibus repudiandae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo culpa
        eligendi laborum expedita unde numquam, dolorem adipisci labore
        recusandae repellat nihil iste esse vero! Placeat esse voluptatem
        consequatur voluptatibus repudiandae.
      </h1>
      <div className='bg-teal-500 w-96 h-96 rounded-xl' />
      <h1 className='text-4xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo culpa
        eligendi laborum expedita unde numquam, dolorem adipisci labore
        recusandae repellat nihil iste esse vero! Placeat esse voluptatem
        consequatur voluptatibus repudiandae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nemo culpa eligendi laborum expedita unde
        numquam, dolorem adipisci labore recusandae repellat nihil iste esse
        vero! Placeat esse voluptatem consequatur voluptatibus repudiandae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo culpa
        eligendi laborum expedita unde numquam, dolorem adipisci labore
        recusandae repellat nihil iste esse vero! Placeat esse voluptatem
        consequatur voluptatibus repudiandae.
      </h1> */}
      {/* END FIXED POSITION */}

      {/* ABSOLUTE POSITION */}
      {/* <div className='bg-blue-500 p-5 flex space-x-5 text-white justify-end relative'>
        <a href='@' className=''>
          Home
        </a>
        <a href='@' className=''>
          Service
        </a>
        <a href='@' className=''>
          About
        </a>
      </div>
      <button className='rounded-full w-max bg-red-500 text-white text-2xl font-semibold p-2 absolute top-0 left-0'>
        OK
      </button>
      <div className='bg-teal-500 w-96 h-96 m-10 relative'>
        <button className='bg-red-600 text-white rounded-xl w-32 absolute top-0 right-0'>
          ABS
        </button>
      </div> */}
      {/* END ABSOLUTE POSITION */}

      {/* CUSTOM POSITION */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='bg-teal-500 w-96 h-96 m-10 relative'>
          <button className='bg-red-600 text-white rounded-xl w-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            ABS
          </button>
        </div>
      </div>
      {/* END CUSTOM POSITION */}
    </>
  );
};

export default Position;
