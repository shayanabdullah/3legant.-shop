import React from "react";
import Container from "./layouts/Container";
import heroOne from "../assets/images/hero-first.webp";
import heroTwo from "../assets/images/hero-two.webp";
import heroThree from "../assets/images/hero-three.webp";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section>
 <Container>
       <div className="relative w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          loop={true}
          className="size-full"
        >
          <SwiperSlide>
            <img src={heroOne} className="w-full h-full " alt="slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroTwo} className="w-full min-h-137.75 object-cover" alt="slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroThree} className="w-full min-h-137.75 object-cover" alt="slide 1" />
          </SwiperSlide>
        </Swiper>

        {/* Custom Prev Button */}
        <button className="custom-prev absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition cursor-pointer text-2xl">
          <IoArrowBackOutline  />
        </button>

        {/* Custom Next Button */}
        <button className="custom-next absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition cursor-pointer text-2xl">
          <IoArrowForwardOutline />
        </button>

        {/* Custom Pagination Dots */}
        <div className="custom-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2" />
      </div>
 </Container>
    </section>
  )
}

export default Hero