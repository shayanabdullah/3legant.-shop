import React, { useState } from "react";
import Container from "./layouts/Container";
import ticket from "../assets/icons/ticket-percent.webp";
import { Link } from "react-router";
import { IoArrowForward, IoClose } from "react-icons/io5";
import { motion } from "motion/react";
import { fadeIn, textVariant } from "../utils/animations";

const TopBar = () => {
  const [topbar, setTopbar] = useState(true);
  const handleClick = () => {
    setTopbar(false);
  };
  return (
    <>
      {topbar && (
        <motion.header
          variants={fadeIn("down", 0.1)}
          animate="show"
          initial="hidden"  
          className="py-2.5 bg-neutral-2 flex justify-end items-center px-6"

        >
          <Container>
            <div className="main  flex items-center justify-center gap-x-3 w-full">
              <img
                src={ticket}
                alt="icon"
                fetchPriority="high"
                loading="lazy"
              />
              <motion.h2
                variants={textVariant(0.1)}
                className="font-inter font-semibold text-xs md:text-md text-neutral-5"
              >
                30% off storewide — Limited time!
              </motion.h2>
              <Link className=" hidden md:flex items-center gap-x-1 text-blue font-inter font-medium text-xs md:text-md h-full border-b border-blue">
                Shop Now
                <IoArrowForward />
              </Link>
            </div>
          </Container>
          <div
            className="cross text-2xl text-neutral-5 cursor-pointer"
            onClick={handleClick}
          >
            <IoClose />
          </div>
        </motion.header>
      )}
    </>
  );
};

export default TopBar;
