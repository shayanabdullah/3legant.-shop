import React from "react";
import banner from "../assets/images/PromoBanner.webp";
import { IoArrowForwardOutline } from "react-icons/io5";
import Button from "./ui/Button";
import { motion } from 'motion/react';
import { textVariant } from "../utils/animations";
const PromoBanner = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-0">
      <div className="img size-full">
        <img src={banner} alt="Banner" fetchPriority="high" loading="lazy" />
      </div>
      <div className="text size-full px-8 py-12 lg:px-18 bg-neutral-2 flex flex-col justify-center ">
        <motion.p variants={textVariant(0.1)} initial='hidden' whileInView={'show'} viewport={{once:true}} className="font-inter font-bold text-blue pb-4">
          SALE UP TO 35% OFF
        </motion.p>
        <motion.h2 variants={textVariant(0.2)} initial='hidden' whileInView={'show'} viewport={{once:true}} className="font-poppins font-semibold text-[32px] md:text-[40px] text-neutral-7 leading-13 pb-4">
          HUNDREDS of <span className="block">New lower prices!</span>
        </motion.h2>
        <motion.p variants={textVariant(0.3)} initial='hidden' whileInView={'show'} viewport={{once:true}} className="font-inter font-normal md:text-xl leading-8 pb-6">
          It’s more affordable than ever to give every{" "}
          <span className="block">room in your home a stylish makeover</span>
        </motion.p>
        <Button text={'Shop Now'} icon={<IoArrowForwardOutline className="transition-all duration-300 group-hover:ml-3" />}  variants={textVariant(0.4)}/>
      </div>
    </section>
  );
};

export default PromoBanner;
