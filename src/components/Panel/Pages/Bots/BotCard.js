import React from 'react';
import shild from '../../../../images/shild.jpeg';

const BotCard = ({ bot }) => {
  return (
    <div className=' mb-6 bg-gray-700 rounded-md'>
      <div className='overflow-hidden pl-5 xl:pl-0 lg:pl-0 md:pl-0 sm:pl-0'>
        <div className='flex border-b pb-1 xl:flex lg:grid lg:grid-cols-2 lg:mb-3 lg:pb-3'>
          <img
            className='w-20 h-20 ml-6 mt-2 rounded-full'
            src={shild}
            alt='Mountain'
          />
          <div>
            <div className='font-bold text-lg ml-2 mt-4 '>{bot.name}</div>
            <img
              className='w-8 h-8 ml-6 mt-2 rounded-full'
              src={shild}
              alt='Mountain'
            />
          </div>
          <div className='mt-8 xl:mt-12 lg:mt-5 ml-12 xl:ml-12 lg:ml-6 block xl:block lg:flex'>
            <div className='font-bold text-sm ml-2 mb-1'>Цена</div>
            <div className='font-bold text-sm ml-2 text-green-600'>
              бесплатно
            </div>
          </div>
        </div>

        <div className='px-6 py-1'>
          <div className='font-bold text-sm text-gray-100 '>
            Ссылка разработчика
          </div>
        </div>
        <div className='px-6 pt-4 pb-2 grid grid-cols-3 xl:inline-block lg:inline-block '>
          <a className='inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer'>
            {bot.developer_url}
          </a>
          {/* <span className='inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #travel
          </span>
          <span className='inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #winter
          </span> */}
        </div>

        <div className='px-6 py-1'>
          <div className='font-bold text-sm text-gray-100 '>
            Выполняемые задачи
          </div>
        </div>
        <div className='px-6 pt-4 pb-2 grid grid-cols-3 xl:inline-block lg:inline-block '>
          <span className='inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #photography
          </span>
          <span className='inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #travel
          </span>
          <span className='inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #winter
          </span>
        </div>

        <div className=' justify-around mx-1 my-6 mb-8 grid grid-cols-1 xl:flex lg:flex md:flex sm:flex ml-7 xl:ml-0 lg:ml-0'>
          <button className='text-sm items-center justify-center border border-gray-300 rounded-full text-gray-500 bg-gray-100 px-2 py-1 gap-4 w-6/12 mb-2 xl:mb-0 lg:mb-0 md:mb-0'>
            Обсуждение на форуме
          </button>
          <button className='text-sm items-center justify-center border border-transparent rounded-full text-defaultGray-50 bg-indigo-400 hover:bg-indigo-400 px-2 py-1 w-5/12'>
            Перейти к боту
          </button>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
