

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
                  <div className="logosContainer">
                    <img src={ require("../Images/techzim.png") } alt="" />
                  </div>
          </SwiperSlide>
          <SwiperSlide className="res-slide">
                  <div className="logosContainer">
                    <img src={ require("../Images/techno.png") } alt="" /> 
                    </div>
          </SwiperSlide>
          <SwiperSlide className="res-slide">
                  <div className="logosContainer">
                    <img src={ require("../Images/econet.png") } alt="" />
                    </div>
          </SwiperSlide>
          <SwiperSlide className="res-slide">
                  <div className="logosContainer">
                    <img src={ require("../Images/netone.png") } alt="" />
                    </div>
          </SwiperSlide>
          <SwiperSlide className="res-slide">
                  <div className="logosContainer">
                    <img src={ require("../Images/union.png") } alt="" />
                    </div>
          </SwiperSlide>
          <SwiperSlide className="res-slide">
                  <div className="logosContainer">
                    <img src={ require("../Images/825.png") } alt="" />
                    </div>
          </SwiperSlide>
          <SwiperSlide className="res-slide">
                  <div className="logosContainer">
                    <img src={ require("../Images/263.png") } alt="" />
                    </div>
          </SwiperSlide>
          <SwiperSlide className="res-slide">
                  <div className="logosContainer">
                    <img src={ require("../Images/cassava.png") } alt="" />
                    </div>
          </SwiperSlide>
          
          <SwiperNavButtons/>
        </Swiper>
      </h1>
    </div>
  );
}

export default LogosCarousel;