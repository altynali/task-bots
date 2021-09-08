import React from 'react';
// import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';
import SliderCardSoc from './SliderCardSoc';
import SliderCardRef from './SliderCardRef';

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper';
import { useSelector } from 'react-redux';
import { services } from '../mocks/mock';

SwiperCore.use([Navigation, Scrollbar, A11y]);

const Slider = ({ isSocMed }) => {
  // const { services } = useSelector((state) => state.app);

  let instServices = [],
    ttServices = [],
    vkServices = [],
    ytServices = [],
    tgServices = [];

  let activeServices = [];
  let socMedias = [];

  // Object.entries(services).map(function (key, index) {
  //   activeServices.push(services[1]);
  // });

  Object.values(services[0]).map((service) => {
    activeServices.push(service);
  });

  console.log(activeServices);

  activeServices.map((active) => {
    if (active.platform === 'instagram') instServices.push(active);
    if (active.platform === 'tiktok') ttServices.push(active);
    if (active.platform === 'vk') vkServices.push(active);
    if (active.platform === 'youtube') ytServices.push(active);
    if (active.platform === 'telegram') tgServices.push(active);
  });

  socMedias.push(instServices);
  socMedias.push(ttServices);
  socMedias.push(vkServices);
  socMedias.push(ytServices);
  socMedias.push(tgServices);

  console.log(socMedias);

  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  return (
    <Swiper
      navigation
      params={params}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {isSocMed
        ? [0, 1, 2, 3, 4].map((item, i) => (
            <SwiperSlide>
              <SliderCardSoc i={i + 1} activeServices={socMedias[i]} />
            </SwiperSlide>
          ))
        : null}

      {isSocMed
        ? null
        : [0, 1, 2].map((item, i) => (
            <SwiperSlide>
              <SliderCardRef i={i + 1} activeServices={socMedias[i]} />
            </SwiperSlide>
          ))}
    </Swiper>
  );
};
export default Slider;
