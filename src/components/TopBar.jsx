import React from "react";
import Container from "./layouts/Container";
import ticket from "../assets/icons/ticket-percent.webp";
import { Link } from "react-router";
import { IoArrowForward, IoClose } from "react-icons/io5";

const TopBar = () => {
  return (
    <>
      <header className="py-2.5 bg-neutral-2 flex justify-end items-center px-6">
        <Container>
          <div className="main  flex items-center justify-center gap-x-3 w-fu">
            <img src={ticket} alt="icon" fetchPriority="high" loading="lazy"/>
            <h2 className="font-inter font-semibold text-sm text-neutral-5">
              30% off storewide — Limited time!
            </h2>
            <Link className="flex items-center gap-x-1 text-blue font-inter font-medium text-sm h-full border-b border-blue">
            Shop Now
            <IoArrowForward />
            </Link>
          </div>
        </Container>
        <div className="cross text-2xl text-neutral-5 cursor-pointer"><IoClose /></div>
      </header>
    </>
  );
};

export default TopBar;
