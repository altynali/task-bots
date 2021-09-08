import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { pagesBuyer, pagesSeller } from './mocks';
import coin from '../../images/coin.png';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { user, points_per_dollar } from './../mocks/mock';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const SidebarPages = ({
  handleActiveUrl,
  setActivePage,
  activePage,
  activeRole,
  handleActiveRole,
}) => {
  // const { user } = useSelector((state) => state.app);

  const [open, setOpen] = useState(false);

  let rubles = (user.points / points_per_dollar) * 73.42;
  let str = `${rubles}`;
  rubles = str.slice(0, str.indexOf('.') + 5);

  let dollars = user.points / points_per_dollar;
  let str1 = `${dollars}`;
  dollars = str1.slice(0, str1.indexOf('.') + 5);

  const currencies = [
    { cur: 'points', amount: user.points, value: 'поинтов', text: 'В поинтах' },
    {
      cur: 'rubles',
      amount: rubles,
      value: 'рублей',
      text: 'В рублях',
    },
    {
      cur: 'dollars',
      amount: dollars,
      value: 'долларов',
      text: 'В долларах',
    },
  ];

  const [activeCur, setActiveCur] = useState(currencies[0]);

  let pages = [];
  if (activeRole === 'seller') pages = [...pagesSeller];
  else if (activeRole === 'buyer') pages = [...pagesBuyer];

  return (
    <>
      <div className={'bg-gray-700 p-3 rounded-xl mb-6 w-full '}>
        <div className='flex items-center justify-around mb-4 px-2'>
          <img
            src={coin}
            className={'w-20 h-20 mr-2 rounded-full'}
            alt={coin}
          />
          <div className='flex flex-col items-start justify-start'>
            <div className='text-xl text-defaultGray-100'>
              {activeCur.amount}
            </div>
            <div className='text-md text-defaultGray-100'>
              {activeCur.value}
            </div>
          </div>
          <div
            className='ml-20 xl:ml-16 lg:ml-5 md:ml-96 sm:ml-1/3 text-white cursor-pointer hover:text-indigo-300'
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <ChevronDownIcon className='w-9 h-9 lg:w-7 lg:h-7 xl:w-7 xl:h-7' />
            ) : (
              <ChevronUpIcon className='w-9 h-9 lg:w-7 lg:h-7 xl:w-7 xl:h-7' />
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
        <button
          className='font-bold text-lg flex items-center justify-center py-1 border border-transparent rounded-full text-defaultGray-50 bg-indigo-400 hover:bg-indigo-500 w-full'
          onClick={() => {
            setActivePage(pages.find((page) => page.name === 'Баланс'));
            handleActiveUrl(pages.find((page) => page.name === 'Баланс').url);
          }}
        >
          Купить
        </button>
      </div>
      <div className={'bg-gray-700 rounded-xl mb-6 overflow-hidden'}>
        {pages.map((page, i) => {
          return (
            <>
              <div className={'border-t border-defaultGray-100'} key={i}>
                <div
                  className={
                    'p-3 text-lg border-l-4 border-transparent flex items-center justify-content-start font-semibold cursor-pointer ' +
                    (page.url === activePage.url
                      ? 'border-indigo-300 text-indigo-300'
                      : ' text-gray-200 hover:text-gray-100')
                  }
                  onClick={() => {
                    setActivePage(page);
                    handleActiveUrl(page.url);
                  }}
                >
                  <page.icon className={'w-6 h-6 mr-2'} />
                  <span>{page.name}</span>
                </div>
              </div>
            </>
          );
        })}

        <div className={'border-t border-defaultGray-100'}>
          <Link
            className={
              'p-3 text-lg border-l-4 border-transparent flex items-center justify-content-start font-semibold cursor-pointer text-gray-200 hover:text-gray-100'
            }
            to='/'
          >
            <ChevronLeftIcon className={'w-6 h-6 mr-2'} />
            <span>На главную</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SidebarPages;
