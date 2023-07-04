
// import React from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <img src={ require("../Images/leftArrow.png") } alt="" onClick={() => swiper.slidePrev()} />
      <img src={ require("../Images/rightArrow.png") } alt="" onClick={() => swiper.slideNext()} />
    </div>
  );
};

