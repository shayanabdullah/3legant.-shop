import React, { useRef, useState } from "react";
import Container from "../layouts/Container.jsx";
import ticket from "../../assets/icons/ticket-percent.webp";
import { Link } from "react-router";
import { IoArrowForward, IoChevronDownOutline, IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "motion/react";
import { fadeIn, textVariant } from "../../utils/animations.js";
import eng from "../../assets/icons/eng.svg";
import bd from "../../assets/icons/bd.svg";
import ind from "../../assets/icons/ind.svg";
import jp from "../../assets/icons/jp.svg";
import usa from "../../assets/icons/usa.svg";
import useClickOutside from './../../hooks/useClickOutside';
const TopBar = () => {
  const [topbar, setTopbar] = useState(true);
  const [openLan, setOpenLan] = useState(false);
  const [openCurrency, setOpenCurrency] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState("USD");
  const [currentlan, setCurrentLan] = useState("Eng");

  const dropDownlanRef = useRef(null);
  const dropDownCurRef = useRef(null);
  useClickOutside(
    dropDownlanRef,
    () => setOpenLan(false),
    "mousedown",
    openLan,
  );

  useClickOutside(
    dropDownCurRef,
    () => setOpenCurrency(false),
    "mousedown",
    openCurrency,
  );

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
          viewport={{ once: true }}
          className="py-2.5 bg-neutral-2 flex justify-end items-center px-6"
        >
          <Container>
            <div className="main flex items-center justify-center gap-x-3 w-full">
              <img src={ticket} alt="icon" fetchPriority="high" />
              <motion.h2 className="font-inter font-semibold text-xs md:text-md text-neutral-5">
                30% off storewide — Limited time!
              </motion.h2>
              <Link className=" hidden md:flex items-center gap-x-1 text-blue font-inter font-medium text-xs md:text-md h-full border-b border-blue">
                Shop Now
                <IoArrowForward />
              </Link>
               <div className="items-center gap-x-10 ml-5 hidden md:flex">

            <div className="flex items-center gap-x-5 relative border-l border-neutral-4 pl-5">
              {/* LANGUAGE */}
              <div className="flex items-center relative">
                <div
                  className="flex items-center gap-x-1 cursor-pointer text-sm"
                  onClick={() => setOpenLan(!openLan)}
                  ref={dropDownlanRef}
                >
                  {currentlan == "Eng" ? (
                    <>
                      <img
                        src={eng}
                        alt="icon"
                        fetchPriority="high"
                        width={15}
                      />
                      {currentlan}
                    </>
                  ) : currentlan == "BN" ? (
                    <>
                      <img
                        src={bd}
                        alt="icon"
                        fetchPriority="high"
                        width={15}
                      />
                      {currentlan}
                    </>
                  ) : (
                    <>
                      <img
                        src={jp}
                        alt="icon"
                        fetchPriority="high"
                        width={15}
                      />
                      {currentlan}
                    </>
                  )}
                  <IoChevronDownOutline />
                </div>

                {/* DROPDOWN */}
                <AnimatePresence>
                  {openLan && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={() => setOpenLan(false)}
                      className="bg-neutral-1 rounded-sm text-body-sm absolute top-[122%] w-full z-50 left-0 shadow-md "
                    >
                      <ul className="size-full flex flex-col gap-y-1">
                        {currentlan !== "Eng" && (
                          <li
                            className="hover:bg-neutral-3 hover:text-neutral-6 text-sm  transition-all duration-200  cursor-pointer flex items-center gap-x-1 p-1"
                            onClick={() => setCurrentLan("Eng")}
                          >
                            <img
                              src={eng}
                              alt="icon"
                              fetchPriority="high"
                              width={15}
                            />
                            Eng
                          </li>
                        )}
                        {currentlan !== "BN" && (
                          <li
                            className="hover:bg-neutral-3 hover:text-neutral-6 text-sm  transition-all duration-200  cursor-pointer flex items-center gap-x-1 p-1"
                            onClick={() => setCurrentLan("BN")}
                          >
                            <img
                              src={bd}
                              alt="icon"
                              fetchPriority="high"
                              width={15}
                            />
                            BN
                          </li>
                        )}
                        {currentlan !== "JP" && (
                          <li
                            className="hover:bg-neutral-3 hover:text-neutral-6 text-sm  transition-all duration-200  cursor-pointer flex items-center gap-x-1 p-1"
                            onClick={() => setCurrentLan("JP")}
                          >
                            <img
                              src={jp}
                              alt="icon"
                              fetchPriority="high"
                              width={15}
                            />
                            JP
                          </li>
                        )}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CURRENCY */}
              <div className="flex items-center relative">
                <div
                  className="flex items-center gap-x-1 cursor-pointer text-sm"
                  onClick={() => setOpenCurrency(!openCurrency)}
                  ref={dropDownCurRef}
                >
                  {currentCurrency == "USD" ? (
                    <>
                      <img
                        src={usa}
                        alt="icon"
                        fetchPriority="high"
                        width={15}
                      />
                      {currentCurrency}
                    </>
                  ) : currentCurrency=== 'BDT' ? (
                    <>
                      <img
                        src={bd}
                        alt="icon"
                        fetchPriority="high"
                        width={15}
                      />
                      {currentCurrency}
                    </>
                  ) : (
                    <>
                       <img
                        src={ind}
                        alt="icon"
                        fetchPriority="high"
                        width={15}
                      />
                      {currentCurrency}
                    </>
                  )}
                  <IoChevronDownOutline />
                </div>

                {/* DROPDOWN */}
                <AnimatePresence>
                  {openCurrency && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={() => setOpenCurrency(false)}
                      className="bg-neutral-1 rounded-sm text-body-sm absolute top-[122%] w-full z-50 left-1 shadow-md "
                    >
                      <ul className="size-full flex flex-col gap-y-1">
                        {currentCurrency !== "USD" && (
                          <li
                            className="hover:bg-neutral-3 hover:text-neutral-6 text-sm  transition-all duration-200  cursor-pointer flex items-center gap-x-1 p-1"
                            onClick={() => setCurrentCurrency("USD")}
                          >
                            <img
                              src={usa}
                              alt="icon"
                              fetchPriority="high"
                              width={15}
                            />
                            USD
                          </li>
                        )}
                        {currentCurrency !== "BDT" && (
                          <li
                            className="hover:bg-neutral-3 hover:text-neutral-6 text-sm  transition-all duration-200  cursor-pointer flex items-center gap-x-1 p-1"
                            onClick={() => setCurrentCurrency("BDT")}
                          >
                            <img
                              src={bd}
                              alt="icon"
                              fetchPriority="high"
                              width={15}
                            />
                            BDT
                          </li>
                        )}
                        {currentCurrency !== "INR" && (
                          <li
                            className="hover:bg-neutral-3 hover:text-neutral-6 text-sm  transition-all duration-200  cursor-pointer flex items-center gap-x-1 p-1"
                            onClick={() => setCurrentCurrency("INR")}
                          >
                            <img
                              src={ind}
                              alt="icon"
                              fetchPriority="high"
                              width={15}
                            />
                            INR
                          </li>
                        )}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
        
          </div>
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
