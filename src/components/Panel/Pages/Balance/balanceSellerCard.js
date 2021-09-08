import React from 'react';
import { MinusCircleIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import coin from '../../../../images/coin.png';
import { user } from './../../../mocks/mock';

const BuyerCard = () => {
  // const { user } = useSelector((state) => state.app);

  return (
    <div className={'bg-gray-700 p-3 rounded-xl mb-6 w-full'}>
      <div className='flex items-center justify-start mb-4'>
        <img src={coin} className={'w-20 h-20 rounded-full'} />

        <div className='flex flex-col items-start justify-start'>
          <div className='text-xl text-defaultGray-100'>{user.points}</div>
          <div className='text-md text-defaultGray-100'>поинтов</div>
        </div>
      </div>
      <div className='flex flex-col items-start justify-start mb-4 ml-4'>
        <div className='text-xl text-defaultGray-100'>{user.points_worked}</div>
        <div className='text-md text-defaultGray-100'>поинтов заработано</div>
      </div>
      <div className='flex flex-col items-start justify-start mb-4 ml-4'>
        <div className='text-xl text-defaultGray-100'>{user.points_frozen}</div>
        <div className='text-md text-defaultGray-100'>поинтов заморожено</div>
      </div>
      <button className='font-bold my-2 mt-6 text-lg flex items-center justify-center py-1 border border-transparent rounded-full text-defaultGray-50 bg-indigo-400 hover:bg-indigo-500 w-full'>
        Купить
      </button>
    </div>
  );
};

export default BuyerCard;
