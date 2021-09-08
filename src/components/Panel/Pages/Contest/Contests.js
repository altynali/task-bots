import React from 'react';
import Card from './Card';

const Contests = () => {
  return (
    <>
      <div className='bg-gray-700 p-4 px-6 rounded-xl mb-6 text-gray-100'>
        <div className='font-medium text-2xl '>
          Участвуйте в конкурсах и выигрывайте миллионы поинтов!
        </div>
      </div>
      <Card />
      <Card />
      <Card />
    </>
  );
};

export default Contests;
