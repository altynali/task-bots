import React from 'react';
import Slider from './Slider';

export default function Hero() {
  return (
    <div className='mt-10 mb-20' id='pricing'>
      <div className='relative overflow-hidden flex'>
        <div className='max-w-7xl mx-auto'>
          <div className='relative z-10 pb-10 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
            <main className='mt-8 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
              <div className='sm:text-center lg:text-center '>
                <h1 className='text-4xl tracking-tight font-extrabold text-indigo-400 sm:text-4xl md:text-5xl'>
                  <span className='block xl:inline'>Наши услуги</span>
                </h1>
                {/* <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p> */}
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className='px-10 text-white'>
        <Slider isSocMed={true} />
      </div>

      {/* <div className='px-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 text-white'>
        <Card title='Наличие большенства соцсетей' desc='' />
        <Card title='' desc='' />
        <Card title='' desc='' />
      </div> */}
    </div>
  );
}
