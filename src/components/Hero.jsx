import React, { useState } from "react";
import Container from "./layouts/Container.jsx";
import heroOne from "../assets/images/hero-first.webp";
import heroTwo from "../assets/images/hero-two.webp";
import heroThree from "../assets/images/hero-three.webp";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { motion } from "motion/react";
import { textVariant } from "../utils/animations.js";


const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <section>
      <Container>
        <div className="relative w-full px-6 md:px-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, ]}
            
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            loop={true}
            autoplay={{ delay: 3000 }}
            la
            className="size-full"
          >
            <SwiperSlide>
              <img
                src={heroOne}
                className="w-full h-100 md:h-134 object-cover"
                alt="slide 1"
                fetchPriority="high"
                loading="eager"
                width="1227"
                height="536"
                onLoad={() => setLoaded(true)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={heroTwo}
                className="w-full h-100 md:h-134 object-cover swiper-lazy"
                alt="slide 2"
                loading="lazy"
                width="1227"
                height="536"
                
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={heroThree}
                className="w-full h-100 md:h-134 object-cover"
                alt="slide 3"
                loading="lazy"
                width="1227"
                height="536"
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
              <motion.h1
                variants={textVariant(0.1)}
                animate={loaded ? "show" : "hidden"}
                viewport={{ once: true }}
                className="font-poppins font-semibold text-[40px] md:text-[72px] leading-[150%]"
              >
                Simply Unique<span className="text-neutral-4">/</span> Simply
                Better.
              </motion.h1>
            </div>
            <div className="left">
              <motion.p
                variants={textVariant(0.2)}
                animate={loaded ? "show" : "hidden"}
                viewport={{ once: true }}
                className="font-inter font-normal text-base text-neutral-4"
              >
                <span className="font-semibold text-neutral-5">3legant</span> is
                a gift & decorations store based in HCMC, Vietnam. Est since
                2019.{" "}
              </motion.p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
