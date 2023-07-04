

import { A11y, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavButtons } from '../Components/CarouselBttns';
import ResellmeFeaturesProp from '../Props/ResellmeFeaturesProp';

// import './App.css';

function UseCaseCarousel() {
  return (
    <div className="App">
      <h1>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView="auto"
        >
          <SwiperSlide className="res-slide" >
                      <ResellmeFeaturesProp iconImage={ require("../Images/codeSign.png") } heading= "Web development"  heading1= "Freelancer"  text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." bttnText= "READ MORE" />
          </SwiperSlide>
          <SwiperSlide className="res-slide" >
                      <ResellmeFeaturesProp iconImage={ require("../Images/threePC..png") } heading= "Small Housing & Domain"  heading1= "Registration Companies"  text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." bttnText= "READ MORE" />
          </SwiperSlide>
          <SwiperSlide className="res-slide" >
                      <ResellmeFeaturesProp iconImage={ require("../Images/cylinderCloud.png") } heading= "Company Registries"  text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in" bttnText= "READ MORE" />
          </SwiperSlide>
          <SwiperSlide className="res-slide" >
                      <ResellmeFeaturesProp iconImage={ require("../Images/building.png") } heading= "Small Digital Agencies"  text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in" bttnText= "READ MORE" />
          </SwiperSlide>
          <SwiperSlide className="res-slide" >
                      <ResellmeFeaturesProp iconImage={ require("../Images/contactperson.png") } heading= "Other"  text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in" bttnText= "READ MORE" />
          </SwiperSlide>

          <SwiperNavButtons />
        </Swiper>
      </h1>
    </div>
  );
}

export default UseCaseCarousel;