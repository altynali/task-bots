import React, { useEffect, useState } from 'react';
import { platformTranslation } from '../../mocks';
import Card from './BotCard';
import { useDispatch, useSelector } from 'react-redux';
import { getBots } from '../../../../redux/actions/bot';
import { bots } from './../../../mocks/mock';

const Bots = () => {
  const dispatch = useDispatch();
  const [activePlatform, setActivePlatform] = useState(platformTranslation[0]);

  useEffect(() => {
    //dispatch(getBots());
  }, []);

  // const { bots } = useSelector((state) => state.bot);

  return (
    <>
      <div className='bg-gray-700 p-4 px-6 rounded-xl mb-6 text-gray-100 '>
        <div className='font-medium text-2xl '>
          Зарабатывайте поинты с помощью удобного бота
        </div>
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
                    setActivePlatform(platform);
                  }}
                >
                  {platform.full === 'Все платформы' ? null : (
                    <img
                      className='w-5 h-5 rounded-full mr-2'
                      src={platform.image}
                    />
                  )}
                  {platform.full === 'Все платформы' ? (
                    <span>Все боты</span>
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

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 text-gray-100'>
        {bots.map((bot, i) => (
          <Card bot={bot} key={i} />
        ))}
      </div>
    </>
  );
};

export default Bots;
