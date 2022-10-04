import React from 'react';
import DevInfo from './portfolio/DevInfo';
import Footer from './portfolio/Footer';
import Header from './portfolio/Header';
import Intro from './portfolio/Intro';
import Technologies from './portfolio/Technologies';

const Portfolio = () => {
  return (
    <>
      <Header />
      <Intro />
      <Technologies />
      <DevInfo />
      <Footer />
    </>
  );
};

export default Portfolio;
