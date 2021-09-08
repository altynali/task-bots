import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const Referrals = () => {
  return (
    <>
      <div className='bg-gray-700 p-4 px-6 rounded-xl mb-6 text-defaultGray-100'>
        <div className='font-medium text-2xl '>
          Приглашайте друзей и получайте монеты!
        </div>
      </div>
      <div className='bg-gray-700 p-4 px-6 rounded-xl mb-6 text-defaultGray-100'>
        <div className='font-medium text-xl mb-4'>
          1. Отправьте эту ссылку вашим друзьям
        </div>
        <div className='w-full xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/2 px-4 py-2 mt-2 border-2 bg-white border-indigo-500 rounded-sm'>
          <input
            onClick={(e) => {
              navigator.clipboard.writeText(e.target.value);
            }}
            readOnly='readOnly'
            value='Some link'
            className='outline-none cursor-pointer w-full text-gray-600'
          />
        </div>
        <div className='font-medium text-xl mt-6'>
          2. Друзья регистрируются по ссылке и получают - 100 поинтов
        </div>
        <div className='w-full py-2 flex mt-2'>
          <CheckIcon className='w-4 h-4 bg-green-500 text-white rounded-full mt-1 mr-2' />{' '}
          Бонус за регистрацию по ссылке дается только активным пользователям
        </div>
        <div className='font-medium text-xl mt-6'>
          3. Вы получаете 15% монет друзей вечно
        </div>
        <div className='w-full py-2 flex mt-2'>
          <CheckIcon className='w-4 h-4 bg-green-500 text-white rounded-full mt-1 mr-2' />{' '}
          100 поинтов за каждого активного пользователя, зарегистрировавшегося
          по Вашей ссылке.
        </div>
        <div className='w-full py-2 flex'>
          <CheckIcon className='w-4 h-4 bg-green-500 text-white rounded-full mt-1 mr-2' />{' '}
          15% от заработанных пользователями монет вечно.*
        </div>
      </div>
    </>
  );
};

export default Referrals;
