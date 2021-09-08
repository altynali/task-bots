import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ListOfSoc = ({ activePlatformArr, activeCur, points_per_dollar }) => {
  return (
    <div className={'bg-gray-700 p-4 rounded-xl mb-6 w-full'}>
      <div className='text-lg xl:text-sm lg:text-sm md:text-sm font-bold text-defaultGray-100 p-3 grid gap-4 sm:grid-cols-2 lg:flex md:flex lg:flex-row items-center '>
        <div className={'w-full xl:w-1/4 lg:w-1/4 md:w-1/4'}>
          Платформа / Услуга
        </div>
        <div className={'w-full xl:w-1/2 lg:w-1/2 md:w-1/2 '}>Описание</div>
        <div className={'w-full xl:w-1/6 lg:w-1/6 md:w-1/6'}>
          Цена за 1000 шт,
          {activeCur.cur === 'points'
            ? 'поинты'
            : activeCur.cur === 'rubles'
            ? 'руб'
            : 'доллары'}
        </div>
        <div className={'w-full xl:w-1/6 lg:w-1/6 md:w-1/6'}>
          за 1 шт,{' '}
          {activeCur.cur === 'points'
            ? 'поинты'
            : activeCur.cur === 'rubles'
            ? 'рубли'
            : 'доллары'}
        </div>
      </div>

      {activePlatformArr.map((task) => {
        return (
          <div
            className={
              'w-full p-3 border-t border-defaultGray-100 grid gap-4 sm:grid-cols-2 lg:flex md:flex lg:flex-row items-center text-lg xl:text-sm lg:text-sm'
            }
          >
            <div className='flex flex-col  w-full xl:w-1/4 lg:w-1/4 md:w-1/4'>
              <div className='cursor-pointer text-defaultGray-100 text-lg xl:text-sm lg:text-sm'>
                <div className='cursor-pointer text-defaultGray-100 font-bold'>
                  {task.platform.toUpperCase()}
                  <div className='text-indigo-300 font-bold '>
                    <span> {task.task_type.toUpperCase()} </span>
                    <span>{task.name_append}</span>
                  </div>
                </div>
              </div>
              {/* <div className='text-gray-400 text-md xl:text-sm lg:text-sm'>
                date
              </div> */}
            </div>

            <span className=' text-defaultGray-100 w-full xl:w-1/2 lg:w-1/2 md:w-1/2'>
              {task.description}
            </span>
            <span className='text-defaultGray-100 w-1/6 text-left '>
              {activeCur.cur === 'points'
                ? task.placement * 1000
                : activeCur.cur === 'rubles'
                ? (task.placement / points_per_dollar) * 78.24 * 1000
                : (task.placement / points_per_dollar) * 1000}
            </span>
            <span className='text-defaultGray-100 w-1/6 text-left '>
              {activeCur.cur === 'points'
                ? task.placement
                : activeCur.cur === 'rubles'
                ? (task.placement / points_per_dollar) * 78.24
                : task.placement / points_per_dollar}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ListOfSoc;
