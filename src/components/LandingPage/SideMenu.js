import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import coin from '../../images/coin.png';

export const SideMenu = ({ activeCur, currencies, setActiveCur }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={'bg-gray-700 p-3 rounded-xl mb-6 w-full '}>
      <div className='flex items-center justify-between mb-4'>
        <img src={coin} className={'w-20 h-20 rounded-full'} alt={coin} />
        <div className='flex flex-col items-start justify-start'>
          <div className='text-xl text-defaultGray-100'>{activeCur.amount}</div>
          <div className='text-md text-defaultGray-100'>{activeCur.value}</div>
        </div>
        <div
          className=' text-white cursor-pointer hover:text-indigo-300 xl:pl-10'
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <ChevronDownIcon className='w-9 h-9 lg:w-7 lg:h-7 xl:w-7 xl:h-7 xl:ml-10' />
          ) : (
            <ChevronUpIcon className='w-9 h-9 lg:w-7 lg:h-7 xl:w-7 xl:h-7 xl:ml-10' />
          )}
        </div>
      </div>

      {open && (
        <div className='side-menu'>
          {currencies.map((cur, i) => {
            if (cur.value !== activeCur.value)
              return (
                <div
                  className={
                    'flex flex-col items-start justify-start mb-4 ml-4 cursor-pointer ' +
                    `side${i}`
                  }
                  onClick={() => setActiveCur(cur)}
                >
                  <div className='text-md text-defaultGray-100 hover:text-indigo-300'>
                    {cur.text}
                  </div>
                </div>
              );
          })}
        </div>
      )}
    </div>
  );
};
