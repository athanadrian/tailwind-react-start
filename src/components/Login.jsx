import React from 'react';

const Login = () => {
  return (
    <div className='w-screen h-screen py-20 px-48 bg-red-200 overflow-hidden'>
      <div className='w-full h-full flex shadow-xl'>
        <div className='bg-white w-1/2 h-full rounded-tl-2xl rounded-bl-2xl flex flex-col items-center justify-center '>
          <h1 className='font-bold text-6xl text-center tracking-wide text-black'>
            Login
          </h1>
          <div className='flex items-center justify-center space-x-2 mt-12'>
            <img
              className='h-16 w-16 rounded-full'
              src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fpaomedia%2Fsmall-n-flat%2F1024%2Fsocial-facebook-icon.png&f=1&nofb=1&ipt=282a95aa741f8d4a044ad45c23d88e612ac8ed5491a1be3e7d783f3afa8a4845&ipo=images'
              alt='facebook'
            />
            <img
              className='h-16 w-16 rounded-full'
              src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Ftwitter-logo-png-logo-twitter-in-png-2500.png&f=1&nofb=1&ipt=bfd84035ad4445043a56293611ee296314351029531906f217af6322377ebd50&ipo=images'
              alt='twitter'
            />
          </div>
          <div className='space-y-2 flex flex-col text-center w-2/3 items-center justify-center mt-12'>
            <p className='text-grey-300 text-base'>or use your account</p>
            <input
              type='text'
              className='bg-gray-200 p-3 rounded-md w-full'
              placeholder='Email'
            />
            <input
              type='text'
              className='bg-gray-200 p-3  rounded-md w-full'
              placeholder='Password'
            />
            <a href='forgot.html'>forgot password</a>
            <button className='bg-red-500 rounded-full w-max mt-10 px-16 py-2 text-white font-semibold'>
              LOG IN
            </button>
          </div>
        </div>
        <div className='bg-red-500 w-1/2 h-full border rounded-tr-2xl rounded-br-2xl'>
          <div className='w-full h-full flex flex-col items-center justify-center text-white'>
            <h1 className='font-bold text-5xl text-center tracking-wide'>
              HTML CSS Login <br /> Form
            </h1>
            <p className='font-bold text-base text-center mt-10'>
              This form login is created using pure
              <br />
              HTML and CSS. For social icons,
              <br />
              FontAwesome is used.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
