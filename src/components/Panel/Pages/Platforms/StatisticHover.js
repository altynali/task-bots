import React from 'react';

const StatisticHover = ({ tasks, volume, service }) => {
  return (
    <div>
      <div className='hidden xl:block lg:block md:block sm:hidden statisticHover'>
        Статистика
      </div>
      {/* <div className='arrow-up absolute w-1/2'></div> */}
      <div className='bg-defaultGray-300 p-4 rounded-lg absolute w-1/2 border border-indigo-500 showStatistic text-white mt-4'>
        <div className='arrow-up absolute'></div>
        <span>Aктивных заданий: {tasks.now}</span>
        <span>Заданий зa сегодня: {tasks.today}</span>
        <span>Объем активных заданий: {volume.now}</span>
        <span>Объем заданий зa сегодня: {volume.today}</span>
      </div>
    </div>
  );
};

export default StatisticHover;
