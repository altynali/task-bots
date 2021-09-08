import React from 'react';
import Card from './StatisticCard';
import StatisticGraph from './StatisticGraph';

const BalanceSeller = () => {
  return (
    <>
      <div className='bg-gray-700 p-4 px-6 rounded-xl mb-6 '>
        <div className='font-medium text-2xl text-gray-100 '>Ваш баланс</div>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-3'>
        <Card />
        <Card dollars={true} />
        <Card rubles={true} dollars={true} />
      </div>
      <div className='hidden xl:block lg:block md:block'>
        <StatisticGraph />
      </div>
    </>
  );
};

export default BalanceSeller;
