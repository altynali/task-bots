import Navbar from './Navbar';
import BottomRefs from './BottomRefs';
import HeroTop from './HeroTop';
import SocialMedia from './SocialMedia';
import Advantages from './Advantages';
import Footer from './Footer';
import React from 'react';

const LandingPage = () => {
  const bgColor = ' bg-gray-800';

  return (
    <div className={'w-full min-h-screen overflow-hidden ' + bgColor}>
      <Navbar />
      <HeroTop />
      <SocialMedia />
      <Advantages />
      <BottomRefs />
      <Footer />
    </div>
  );
};

export default LandingPage;
