import React from 'react';
import ig from '../../images/ig.png';
import vk from '../../images/vk.png';
import tt from '../../images/tt.png';
import yt from '../../images/yt.png';
import tg from '../../images/tg.png';
import { Link } from 'react-router-dom';

const Card = ({ i, activeServices }) => {
  let img;

  switch (i) {
    case 1:
      img = ig;
      break;
    case 2:
      img = tt;
      break;
    case 3:
      img = vk;
      break;
    case 4:
      img = yt;
      break;
    case 5:
      img = tg;
      break;
    default:
      break;
  }

  return (
    <div className='rounded text-center '>
      <div className='w-1/2 h-1/2 xl:w-10/12 lg:w-9/12 md:w-10/12 sm:w-10/12 mx-auto'>
        <img
          className={
            'w-full xl:m-auto lg:m-auto md:w-65 md:m-auto sm:w-52 sm:m-auto '
          }
          src={img}
          alt='Ref'
        />
      </div>
      <div className='p-4'>
        <div className='font-bold text-xl xl:text-xl  lg:text-3xl mb-2'>
          {/* {activeServices[0].platform.toUpperCase()} */}
        </div>
        <div>
          <Link
            className='xl:text-xl  lg:text-2xl text-base cursor-pointer'
            to='/socmedia-list'
          >
            Накрутка лайков
          </Link>
          <br />
          <Link
            className='xl:text-xl  lg:text-2xl text-base cursor-pointer'
            to='/socmedia-list'
          >
            Накрутка подписчиков
          </Link>
          <br />

          <Link
            className='xl:text-xl  lg:text-2xl text-base cursor-pointer'
            to='/socmedia-list'
          >
            Накрутка просмотров
          </Link>
          <br />

          <Link
            className='xl:text-xl  lg:text-2xl text-base cursor-pointer'
            to='/socmedia-list'
          >
            Накрутка комментарии
          </Link>
          <br />

          <Link
            className='xl:text-xl  lg:text-2xl text-base cursor-pointer'
            to='/socmedia-list'
          >
            Накрутка голосов
          </Link>
          <br />

          <Link
            className='xl:text-xl  lg:text-2xl text-base cursor-pointer'
            to='/socmedia-list'
          >
            Накрутка репостов
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
