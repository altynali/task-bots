import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { globalData } = useSelector((state) => state.app);

  return (
    <div className='w-full bg-indigo-700 text-white'>
      <div className='xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-5'>
        <div className='w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start'>
          <div className='w-full sm:w-1/4 pr-6 flex flex-col space-y-2'>
            {/* <a href='#' className={'flex items-center justify-center'}>
              <picture className='w-auto h-10 mr-2'>
                <source
                  type='image/webp'
                  srcSet={globalData.global.logo_webp}
                />
                <source srcSet={globalData.global.logo} />
                <img
                  className='w-auto h-10'
                  src={globalData.global.logo}
                  alt={globalData.global.site_name + ' logo'}
                />
              </picture>
            </a> */}
            <span className='text-xl'>LOGO</span>
          </div>
          <div className='w-full sm:w-1/4 flex flex-col space-y-4'>
            <a className='opacity-60'>About Us</a>
            <a className='opacity-60'>Responsibilities</a>
            <a className='opacity-60'>Out Services</a>
            <a className='opacity-60'>Contact</a>
          </div>
          <div className='w-full sm:w-1/4 flex flex-col space-y-4'>
            <a className='opacity-60'>About Us</a>
            <a className='opacity-60'>Responsibilities</a>
            <a className='opacity-60'>Out Services</a>
            <a className='opacity-60'>Contact</a>
          </div>
          <div className='w-full sm:w-1/4 flex flex-col space-y-4'>
            <a className='opacity-60'>About Us</a>
            <a className='opacity-60'>Responsibilities</a>
            <a className='opacity-60'>Out Services</a>
            <a className='opacity-60'>Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
