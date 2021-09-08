import React from 'react';
import shild from '../../images/shild.jpeg';
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
      img = vk;
      break;
    case 3:
      img = tt;
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
  let platform;
  if (i === 1) platform = 'Instagram';
  if (i === 2) platform = 'Vk';
  if (i === 3) platform = 'Tiktok';

  let acc;
  if (i === 1) acc = 'Svetlana.darknight9';
  if (i === 2) acc = 'Сергей Аксёнов';
  if (i === 3) acc = 'Ritunes.mash24';

  let text;
  if (i === 1)
    text =
      'Спасибо большое на такой чудесный сервис! 3 раза пользовалась  и все 3 раза накрутили даже больше чем заказывала) ';
  if (i === 2)
    text =
      'Заказал накрутку лайков на аватарку,пришли быстро и ровно столько сколько заказывал. ';
  if (i === 3)
    text =
      'Заказала накрутку лайков на 2 видео сразу,пришли в течении пару часов,видео взлетели в реки)Всем советую,кто хочет раскрутиться.';

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
        <div className='font-bold text-md xl:text-xl lg:text-3xl md:text-xl mb-2 w-full'>
          {/* {activeServices[0].platform.toUpperCase()} */}
          {acc}
        </div>
        <div>
          <div className='xl:text-xl lg:text-2xl text-base cursor-pointer'>
            Платформа: {platform}
          </div>
          <br />
          <div className='xl:text-xl lg:text-2xl text-base cursor-pointer'>
            {text}
          </div>
          {/* <div className='border-b-2 border-gray-100 pt-5 w-1/2 flex justify-center m-auto'></div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
