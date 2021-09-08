import React from 'react';
import { PlusIcon, SearchIcon } from '@heroicons/react/solid';

const NoTask = ({ setOpenCreateTask }) => {
  return (
    <div className={'bg-gray-700 p-4 rounded-xl mb-6'}>
      <div className={'flex flex-col items-center content-center'}>
        <img className='w-auto h-24 rounded-full mb-2' alt={'Icon order'} />
        <div className={'text-lg font-semibold text-defaultGray-100 mb-4'}>
          Добавьте ваше первое задание!
        </div>
        <button
          className='font-bold text-lg flex items-center justify-center py-1 px-4 border border-transparent rounded-full text-defaultGray-50 bg-indigo-400 hover:bg-indigo-500'
          onClick={() => {
            setOpenCreateTask(true);
          }}
        >
          <PlusIcon className={'w-6 h-6'} />
          <div>Добавить задание</div>
        </button>
      </div>
    </div>
  );
};

export default NoTask;
