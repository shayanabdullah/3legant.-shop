import React from "react";
import Container from "../layouts/Container";
import { motion } from "motion/react";
import { FiMail } from "react-icons/fi";
import { fadeIn, textVariant } from "../../utils/animations";

const NewsLetter = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className="news py-30 relative px-8 md:px-0"
    >
      <div className="overlay absolute top-0 inset-0 bg-neutral-5/50 z-10 lg:hidden backdrop-blur-[1px]"></div>
      <Container>
        <div className="relative z-20 lg:ml-35 xl:ml-0!">
          <div className="size-full flex flex-col justify-center items-center">
            <div className="">
              <div className="header pb-10">
                <motion.h2
                  variants={textVariant(0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  className="font-poppins font-semibold text-3xl md:text-[40px] text-neutral-1 lg:text-neutral-7 pb-3"
                >
                  Join Our Newsletter
                </motion.h2>
                <motion.p
                  variants={textVariant(0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  className="font-inter font-medium text-[18px] text-neutral-1 lg:text-neutral-7"
                >
                  Sign up for deals, new products and promotions
                </motion.p>
              </div>
              <motion.div
                variants={textVariant(0.4)}
                initial="hidden"
                whileInView={"show"}
                className="input relative w-full z-30"
              >
                <input
                  type="email"
                  placeholder="Email address"
                  className="py-3 outline-0 border-b border-neutral-1 lg:border-neutral-4/50 w-full font-inter font-semibold text-base text-neutral-1 lg:text-neutral-4 pl-6"
                />
                <i className="absolute top-1/2 left-0 -translate-y-1/2 text-neutral-1 lg:text-neutral-7">
                  <FiMail />
                </i>
                <button className="font-inter font-medium text-sm cursor-pointer text-neutral-1 lg:text-neutral-4 absolute top-1/2 right-0 -translate-y-1/2 hover:underline transition-all duration-300">
                  Signup
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default NewsLetter;
