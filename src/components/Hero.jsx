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
        <div className="relative w-full px-6 md:px-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            loop={true}
            autoplay={{ delay: 3000 }}
            className="size-full"
          >
            <SwiperSlide>
              <img
                src={heroOne}
                className="w-full min-h-76 md:min-h-full "
                alt="slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={heroTwo}
                className="w-full min-h-76 md:min-h-full object-cover"
                alt="slide 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={heroThree}
                className="w-full min-h-76 md:min-h-full  object-cover"
                alt="slide 3"
              />
            </SwiperSlide>
          </Swiper>

          {/* Custom Prev Button */}
          <button className="custom-prev absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow hidden md:flex items-center justify-center hover:bg-gray-100 transition cursor-pointer text-2xl ">
            <IoArrowBackOutline />
          </button>

          {/* Custom Next Button */}
          <button className="custom-next absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow  items-center justify-center hover:bg-gray-100 transition cursor-pointer text-2xl hidden md:flex">
            <IoArrowForwardOutline />
          </button>

          {/* Custom Pagination Dots */}
          <div className="custom-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2" />
        </div>

        {/* Text */}
        <div className="py-10 px-4 md:px-0">
          <div className="main grid grid-cols-1 md:grid-cols-2 gap-y-4 items-center">
            <div className="right">
              <h1 className="font-poppins font-semibold text-[40px] md:text-[72px] leading-[150%]">Simply Unique<span className="text-neutral-4">/</span> Simply Better.</h1>
            </div>
            <div className="left">
              <p className="font-inter font-normal text-base text-neutral-4"><span className="font-semibold text-neutral-5">3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
