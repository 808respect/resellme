
import { A11y, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavButtons } from '../Components/CarouselBttns';
import TestimonialCardsProp from '../Props/TestimonialCardsProp';

// import './App.css';

function TestimonialCarousel() {
  return (
    <div className="App">
      <h1>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView="auto"
        >
          <SwiperSlide className="res-slide" >
                      <TestimonialCardsProp  image={ require("../Images/girlSmile2.png") } commas= { require("../Images/commas.png") }  h6= "Jane Doe" underH6= "Company Name"  text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  />
          </SwiperSlide>
          <SwiperSlide className="res-slide" >
                      <TestimonialCardsProp  image={ require("../Images/foldArms.png") } commas= { require("../Images/commas.png") }  h6= "John Doe" underH6= "Company Name"  text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  />
          </SwiperSlide>
          <SwiperSlide className="res-slide" >
                      <TestimonialCardsProp  image={ require("../Images/code.png") } commas= { require("../Images/commas.png") }  h6= "Jane Doe" underH6= "Company Name"  text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  />
          </SwiperSlide>

          <SwiperNavButtons />
        </Swiper>
      </h1>
    </div>
  );
}

export default TestimonialCarousel;