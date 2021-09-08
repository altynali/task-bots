import React from 'react';
import rocket from '../../images/rocket.png';
import medal from '../../images/medal.png';
import person from '../../images/person.png';

const Card = ({ title, desc, id }) => {
  let img;
  if (id === '1') img = rocket;
  if (id === '2') img = medal;
  if (id === '3') img = person;

  return (
    <div className='rounded px-20 text-center xl:mx-2 '>
      <img
        className='w-full xl:w-full xl:m-auto lg:w-5/12 lg:m-auto md:w-65 md:m-auto sm:w-52 sm:m-auto'
        //w-70 md:w-70 sm:w-52 sm:ml-12
        src={img}
        alt='adv'
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl xl:text-xl  lg:text-3xl mb-2'>
          {title}
        </div>
        <p className='xl:text-xl  lg:text-2xl text-base'>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
