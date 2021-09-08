import React, { useState } from 'react';
import Card from './balanceSellerCard';

const BalanceSeller = () => {
  return (
    <>
      <div className='bg-gray-700 p-4 px-6 rounded-xl mb-6 '>
        <div className='font-medium text-2xl text-gray-100'>Ваш баланс</div>
      </div>
      <div className='w-full xl:w-1/2 lg:w-1/2 md:w-1/2'>
        <Card />
      </div>
    </>
  );
};

export default BalanceSeller;
