import React from 'react';

const Intro = () => {
  return (
    <>
      <div className='grid grid-cols-12 bg-nav'>
        <div className='col-span-5 sm:col-span-12 md:col-span-12'>
          <lottie-player
            src='https://assets6.lottiefiles.com/packages/lf20_gnb0jsok.json'
            background='transparent'
            speed='1'
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className='col-span-7 sm:col-span-12 md:col-span-12 tracking-wide flex flex-col items-center justify-center'>
          <div className='text-left 2xl:p-20 space-y-5'>
            <h1 className='text-4xl font-semibold text-white'>Hi I'm Atana!</h1>
            <h1 className='text-xl text-gray-200'>
              Full Stack Developer - Tech Lover - Team Player n ....Rock
              Climber!
            </h1>
            <p className='text-xlv text-white'>
              My name is Athanasios Andrianesis, (Atana) and I am an experienced
              software engineer and freelance developer.
              <br /> I have a degree in Computer Science and several years of
              experience working on a wide range of technologies and projects
              from C# development for Document Management Projects, to modern
              mobile and web applications in React, React-Native and Angular.
              <br /> Throughout my career, I have acquired advanced technical
              knowledge and the ability to use several platforms, libraries and
              frameworks. I invite you to check my portfolios, where I have put
              a lot of effort to implement several projects.
              <br />
              In addition I am a maniac rock climber having more than 2000
              ascents and over 36 Km distance climbed. Mostly I prefer sport
              climbing but I do not miss the opportunity to go trad also!
            </p>
          </div>
        </div>
      </div>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#4B8FE2'
          fill-opacity='1'
          d='M0,320L0,256L288,256L288,160L576,160L576,160L864,160L864,192L1152,192L1152,224L1440,224L1440,0L1152,0L1152,0L864,0L864,0L576,0L576,0L288,0L288,0L0,0L0,0Z'
        ></path>
      </svg>
    </>
  );
};

export default Intro;
