import React, { useEffect, useState } from 'react';
import { platformTranslation } from '../Panel/mocks';
import ListOfSoc from './ListOfSoc';
import { useSelector } from 'react-redux';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import { SideMenu } from './SideMenu';
import { services, user, points_per_dollar } from './../mocks/mock';

const SocMediaList = () => {
  const [activePlatform, setActivePlatform] = useState(platformTranslation[0]);

  // const { services, user, globalData } = useSelector((state) => state.app);
  let activeServices = [];
  activeServices = Object.values(services[0]);

  const [activePlatformArr, setActivePlatformArr] = useState(activeServices);

  let instServices = [],
    ttServices = [],
    vkServices = [],
    ytServices = [],
    tgServices = [];

  activeServices.map((active) => {
    if (active.platform === 'instagram') instServices.push(active);
    if (active.platform === 'tiktok') ttServices.push(active);
    if (active.platform === 'vk') vkServices.push(active);
    if (active.platform === 'youtube') ytServices.push(active);
    if (active.platform === 'telegram') tgServices.push(active);
  });

  const handleActive = (platform) => {
    console.log(platform);
    setActivePlatform(platform);
    if (platform.platform === 'all') setActivePlatformArr(activeServices);
    if (platform.platform === 'instagram') setActivePlatformArr(instServices);
    if (platform.platform === 'tiktok') setActivePlatformArr(ttServices);
    if (platform.platform === 'vk') setActivePlatformArr(vkServices);
    if (platform.platform === 'youtube') setActivePlatformArr(ytServices);
    if (platform.platform === 'telegram') setActivePlatformArr(tgServices);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  let rubles = (user.points / points_per_dollar) * 73.42;
  let str = `${rubles}`;
  rubles = str.slice(0, str.indexOf('.') + 5);

  let dollars = user.points / points_per_dollar;
  let str1 = `${dollars}`;
  dollars = str1.slice(0, str1.indexOf('.') + 5);

  const currencies = [
    {
      cur: 'points',
      amount: user.points,
      value: 'поинтов',
      text: 'В поинтах',
    },
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

  console.log('activePlatformArr', activePlatformArr);

  return (
    <div className='bg-gray-800 flex justify-around '>
      <div className='w-1/6 xl:w-1/5'>
        <a
          className='bg-gray-800 pt-5 text-gray-100 pl-5 text-lg flex cursor-pointer'
          href='/'
        >
          <ChevronLeftIcon className='h-5 w-5 mt-1' />
          Назад
        </a>

        <div className={'w-full pt-20 pl-6 mx-auto hidden xl:flex'}>
          <div className='flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-6'>
            <div className='w-full'>
              <SideMenu
                activeCur={activeCur}
                currencies={currencies}
                setActiveCur={setActiveCur}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center bg-gray-800 items-center py-8 w-2/3'>
        <div className='w-11/12'>
          <div className='bg-gray-700 p-4 px-6 rounded-xl mb-6 text-gray-100 '>
            <div className='font-medium text-2xl '>Услуги и цены</div>
          </div>
          <div className='block xl:hidden'>
            <SideMenu
              activeCur={activeCur}
              currencies={currencies}
              setActiveCur={setActiveCur}
            />
          </div>
          <div className='font-medium bg-gray-700 rounded-lg mb-4 text-gray-100 flex py-2'>
            <div className='horizontal-scroller overflow-y-hidden pb-2 md:pb-0'>
              <div className='flex justify-between pl-2 '>
                {platformTranslation.map((platform, i) => (
                  <div className={'cursor-pointer'} key={i}>
                    <div
                      className={
                        'flex items-center justify-center border-b-2 border-transparent p-3 cursor-pointer ' +
                        (platform.short == activePlatform.short
                          ? 'border-indigo-200 text-indigo-200'
                          : 'text-defaultGray-100 hover:text-indigo-100')
                      }
                      onClick={() => {
                        handleActive(platform);
                      }}
                    >
                      {platform.full === 'Все платформы' ? null : (
                        <img
                          className='w-5 h-5 rounded-full mr-2'
                          src={platform.image}
                        />
                      )}
                      {platform.full === 'Все платформы' ? (
                        <span>Все платформы</span>
                      ) : (
                        <>
                          <span className='flex xl:hidden lg:hidden md:flex sm:flex '>
                            {platform.short}
                          </span>
                          <span className='hidden xl:flex lg:flex md:hidden sm:hidden '>
                            {platform.full}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={'max-w-8xl w-full'}>
            <div className='flex flex-col lg:flex-row items-start justify-center space-y-10 lg:space-y-0 lg:space-x-10 w-full'>
              <ListOfSoc
                activePlatformArr={activePlatformArr}
                activeCur={activeCur}
                points_per_dollar={points_per_dollar}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='w-1/12'></div>
    </div>
  );
};

export default SocMediaList;
