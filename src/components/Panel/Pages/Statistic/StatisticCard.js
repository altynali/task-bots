import React from 'react';
import { useSelector } from 'react-redux';
import coin from '../../../../images/coin.png';
import { points_per_dollar, user } from '../../../mocks/mock';

const Card = ({ dollars, rubles }) => {
  // const { user } = useSelector((state) => state.app);

  let points = user.points;
  let points_worked = user.points_worked;
  let points_frozen = user.points_frozen;
  let points_income = user.points_income;

  if (dollars) {
    if (points !== '0.00') points /= points_per_dollar;
    if (points_worked !== '0.00') points_worked /= points_per_dollar;
    if (points_frozen !== '0.00') points_frozen /= points_per_dollar;
    if (points_income !== '0.00') points_income /= points_per_dollar;

    let str1 = `${points}`;
    points = str1.slice(0, str1.indexOf('.') + 5);

    // points = points.toFixed(2);
    // points_worked = points_worked.toFixed(2);
    // points_frozen = points_frozen.toFixed(2);
    // points_income = points_income.toFixed(2);
    if (rubles) {
      if (points !== '0.00') points *= 73.42;
      if (points_worked !== '0.00') points_worked *= 73.42;
      if (points_frozen !== '0.00') points_frozen *= 73.42;
      if (points_income !== '0.00') points_income *= 73.42;

      let str = `${points}`;
      points = str.slice(0, str.indexOf('.') + 5);
    }
  }

  return (
    <div className={'bg-gray-700 p-3 rounded-xl mb-6 w-full'}>
      <div className='flex items-center justify-start mb-4'>
        <img src={coin} className={'w-20 h-20 rounded-full'} />

        <div className='flex flex-col items-start justify-start'>
          <div className='text-xl text-defaultGray-100'>{points}</div>
          <div className='text-md text-defaultGray-100'>
            {dollars ? (rubles ? 'рублей' : 'долларов') : 'поинтов'}
          </div>
        </div>
      </div>
      <div className='hidden xl:block lg:block md:block'>
        <div className='flex flex-col items-start justify-start mb-4 ml-4'>
          <div className='text-xl text-defaultGray-100'>{points_worked}</div>
          <div className='text-md text-defaultGray-100'>
            {dollars ? (rubles ? 'рублей' : 'долларов') : 'поинтов'} заработано
          </div>
        </div>
        <div className='flex flex-col items-start justify-start mb-4 ml-4'>
          <div className='text-xl text-defaultGray-100'>{points_frozen}</div>
          <div className='text-md text-defaultGray-100'>
            {dollars ? (rubles ? 'рублей' : 'долларов') : 'поинтов'} заморожено
          </div>
        </div>
        <div className='flex flex-col items-start justify-start mb-4 ml-4'>
          <div className='text-xl text-defaultGray-100'>
            {user.drops_percent}%
          </div>
          <div className='text-md text-defaultGray-100'>процент дропа</div>
        </div>
        <div className='flex flex-col items-start justify-start mb-4 ml-4'>
          <div className='text-xl text-defaultGray-100'>{points_income}</div>
          <div className='text-md text-defaultGray-100'>
            суммарный доход за все время в{' '}
            {dollars ? (rubles ? 'рублях' : 'долларах') : 'поинтах'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
