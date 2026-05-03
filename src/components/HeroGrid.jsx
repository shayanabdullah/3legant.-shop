import React from "react";
import Container from "./layouts/Container";
import sofa from "../assets/images/hero-sofa.webp";
import drawer from "../assets/images/hero-drawer.webp";
import toaster from "../assets/images/hero-toaster.webp";
import { IoArrowForwardOutline } from "react-icons/io5";
import { motion } from "motion/react";
import { fadeIn, textVariant } from "../utils/animations";
import Button from "./ui/Button";
const HeroGrid = () => {
  return (
    <section className="px-5 md:px-0">
      <Container>
        <motion.div variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} viewport={{once:true}} className="main grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="left size-full relative group">
            <div className="text absolute top-8 md:top-12 left-8 md:left-12 ">
              <motion.h2
                variants={textVariant(0.1)}
                animate={"show"}
                viewport={{ once: true }}
                initial="hidden"
                className="font-poppins font-semibold text-[28px] md:text-[34px] text-neutral-7 pb-1"
              >
                Living Room
              </motion.h2>
              <motion.p className="flex items-center gap-x-1 font-inter font-medium text-base py-1 ">
                <Button
                  text={"Shop Now"}
                  icon={
                    <IoArrowForwardOutline className="transition-all duration-300 group-hover:ml-3" />
                  }
                />
              </motion.p>
            </div>
            <img
              src={sofa}
              alt="sofa"
              fetchPriority="high"
              loading="lazy"
              width={"100%"}
            />
          </div>
          <div className="right grid grid-rows-2 gap-y-4 md:gap-y-6">
            <div className="size-full bg-neutral-2 relative group">
              <div className="text absolute bottom-12 left-8 ">
                <motion.h2
                  variants={textVariant(0.1)}
                  animate={"show"}
                  viewport={{ once: true }}
                  initial="hidden"
                  className="font-poppins font-semibold text-[28px] md:text-[34px] text-neutral-7 pb-1"
                >
                  Bedroom
                </motion.h2>
                <motion.p className="flex items-center gap-x-1 font-inter font-medium text-base py-1 ">
                  <Button
                    text={"Shop Now"}
                    icon={
                      <IoArrowForwardOutline className="transition-all duration-300 group-hover:ml-3" />
                    }
                  />
                </motion.p>
              </div>
              <img
                src={drawer}
                alt="drawer"
                fetchPriority="high"
                loading="lazy"
                width={"100%"}
              />
            </div>
            <div className="size-full bg-neutral-2 relative group">
              <div className="text absolute bottom-12 left-8 ">
                <motion.h2
                  variants={textVariant(0.1)}
                  animate={"show"}
                  viewport={{ once: true }}
                  initial="hidden"
                  className="font-poppins font-semibold text-[28px] md:text-[34px] text-neutral-7 pb-1"
                >
                  Kitchen
                </motion.h2>
                <motion.p className="flex items-center gap-x-1 font-inter font-medium text-base py-1 ">
                  <Button
                    text={"Shop Now"}
                    icon={
                      <IoArrowForwardOutline className="transition-all duration-300 group-hover:ml-3" />
                    }
                  />
                </motion.p>
              </div>
              <img
                src={toaster}
                alt="drawer"
                fetchPriority="high"
                loading="lazy"
                width={"100%"}
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroGrid;
