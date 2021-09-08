import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { customService } from '../../../../redux/actions/task';

const CustomServices = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className='bg-gray-700 p-4 px-6 rounded-xl mb-6 text-defaultGray-100'>
        <div className='font-medium text-2xl '>Подключиться к услуге</div>
      </div>
      <div className='bg-gray-700 p-4 px-6 rounded-xl text-defaultGray-100 grid grid-cols-1'>
        <div className='w-11/12 xl:w-1/3 lg:w-2/3 md:w-2/3 sm:w-2/3 px-4 py-2 mt-2 border-2 bg-white border-indigo-500 rounded-sm'>
          <input
            placeholder='Введите токен код'
            className='outline-none cursor-pointer w-full text-gray-600'
          />
        </div>
        <button
          className={
            'font-bold text-lg flex items-center justify-center py-1 border border-transparent ' +
            'rounded-full text-defaultGray-50 bg-indigo-400 hover:bg-indigo-500 w-11/12 xl:w-1/3 lg:w-2/3 md:w-2/3 sm:w-2/3 mt-4'
          }
          onClick={() => {
            dispatch(customService());
          }}
        >
          Подключиться
        </button>
      </div>
    </>
  );
};

export default CustomServices;
