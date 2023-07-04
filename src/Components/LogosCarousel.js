

import { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavButtons } from './CarouselBttns';


function LogosCarousel() {
  return (
    <div className="App">
      <h1>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView="auto"
        >
          <SwiperSlide className="res-slide">
                    <img src={ require("../Images/techZim.png") } alt="" />
          </SwiperSlide>
          <SwiperSlide className="res-slide">
                    <img src={ require("../Images/technoMag.png") } alt="" /> 
          </SwiperSlide>
          <SwiperSlide className="res-slide">
                    <img src={ require("../Images/econet.png") } alt="" />
          </SwiperSlide>
          <SwiperSlide className="res-slide">
                    <img src={ require("../Images/net.png") } alt="" />
          </SwiperSlide>
          <SwiperSlide className="res-slide">
                    <img src={ require("../Images/fourSemis.png") } alt="" />
          </SwiperSlide>
          <SwiperSlide className="res-slide">
                    <img src={ require("../Images/two5logo.png") } alt="" />
          </SwiperSlide>
          <SwiperSlide className="res-slide">
                    <img src={ require("../Images/chat263.png") } alt="" />
          </SwiperSlide>
          <SwiperSlide className="res-slide">
                    <img src={ require("../Images/cassava.png") } alt="" />
          </SwiperSlide>
          
          <SwiperNavButtons/>
        </Swiper>
      </h1>
    </div>
  );
}

export default LogosCarousel;