import React from 'react';
import main from '../../images/main.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function HeroTop() {
  const { user } = useSelector((state) => state.app);

  return (
    <div className='relative bg-gray-800 overflow-hidden pt-20'>
      <div className='max-w-7xl mx-auto '>
        <div className='relative z-10 bg-gray-800 sm:pb-16 md:pb-20 xl:max-w-2xl lg:max-w-xl lg:w-full lg:pb-28 xl:pb-32'>
          <main className='pt-10 max-w-6xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-6 xl:pt-28'>
            <div className='sm:text-center lg:ml-16 xl:ml-5 lg:text-left mt-20 lg:w-10/12 xl:w-full'>
              <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                <span className='block text-indigo-500 xl:inline lg:w-11/12'>
                  Продвигайте свои соцсети
                </span>
              </h1>
              <p className='mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:w-10/12 xl:w-11/12'>
                Повышайте свою популярность в соцсетях всего в несколько кликов,
                просто и эффективно!
              </p>
              <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                <div className='rounded-md shadow'>
                  <Link
                    to={user ? '/panel' : '/login'}
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 md:py-4 md:text-lg md:px-10'
                  >
                    Начать!
                  </Link>
                </div>
                {/* <div className='mt-3 sm:mt-0 sm:ml-3'>
                  <a
                    href='#'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-400 md:py-4 md:text-lg md:px-10'
                  >
                    Live demo
                  </a>
                </div> */}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className='absolute lg:inset-y-16 xl:right-16 lg:right-10 mr-2 mt-20 flex justify-center items-center w-1/2 h-11/12 lg:w-1/3'>
        <img src={main} alt='main' />
      </div>
    </div>
  );
}
