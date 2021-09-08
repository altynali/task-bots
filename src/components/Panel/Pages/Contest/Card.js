import React from 'react';
import shild from '../../../../images/shild.jpeg';

const Card = () => {
  return (
    <div className='bg-gray-700 p-4 px-6 rounded-xl mb-1 text-gray-100'>
      <div className=' w-full lg:max-w-full lg:flex'>
        <div
          className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
          title='Mountain'
        >
          <img src={shild} />
        </div>
        <div className='bg-gray-700 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
          <div className='mb-8'>
            <div className='flex justify-between'>
              <div className=' font-bold text-xl mb-2'>
                Best Mountain Trails 2020
              </div>

              <span>10000</span>
            </div>

            <p className=' text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className='flex justify-between'>
            <div>
              <button className='text-md items-center justify-center border border-transparent rounded-full text-defaultGray-50 bg-indigo-400 hover:bg-indigo-400 px-2 py-1 '>
                Итоги конкурса
              </button>
            </div>

            <span>10000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
