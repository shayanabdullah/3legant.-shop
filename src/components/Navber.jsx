import React from "react";
import Container from "./layouts/Container";
import { Link, NavLink } from "react-router";
import search from "../assets/icons/search.webp";
import cart from "../assets/icons/shopping-bag.webp";
import user from "../assets/icons/user-circle.webp";
import { motion } from "motion/react";
import { fadeIn, textVariant } from "./../utils/animations";
const Navber = () => {
  const navLinks = [
    {
      navlink: "Home",
      href: "/",
    },
    {
      navlink: "Shop",
      href: "/shop",
    },
    {
      navlink: "Product",
      href: "/product",
    },
    {
      navlink: "Contact us",
      href: "/contact",
    },
  ];

  return (
    <motion.nav
      variants={fadeIn("down", 0.1)}
      animate="show"
      initial="hidden"
      className="py-4.5 bg-neutral-1"
    >
      <Container>
        {/* Desktop Navber */}
        <div className="nav-main flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <motion.h2
              variants={textVariant(0.1)}
              className="font-poppins font-semibold text-2xl text-primary"
            >
              3legant.
            </motion.h2>
          </div>
          {/* Navlinks */}
          <div className="flex items-center gap-x-10">
            {navLinks.map((nav, index) => (
              <motion.span  key={index} variants={textVariant(0.2)}>
                <NavLink
                  to={nav.href}
                 
                  style={({ isActive }) => ({
                    color: isActive ? "#141718" : "#6C7275",
                  })}
                  className={
                    "font-space-grotesk font-medium text-sm hover:text-neutral-7! transition-colors duration-200"
                  }
                >
                  {nav.navlink}
                </NavLink>
              </motion.span>
            ))}
          </div>
          {/* Cart and Others */}
          <div className="flex items-center gap-x-5">
            <div className="flex items-center gap-x-4">
              <div className="search flex items-center ">
                <button className="cursor-pointer">
                  <img
                    src={search}
                    alt="icon"
                    fetchPriority="high"
                    loading="lazy"
                  />
                </button>
              </div>
              {/* user */}
              <div className="user flex items-center ">
                <button className="cursor-pointer">
                  <img
                    src={user}
                    alt="icon"
                    fetchPriority="high"
                    loading="lazy"
                  />
                </button>
              </div>
            </div>
            {/* cart */}
            <div className="cart flex items-center gap-x-2">
              <button className="cursor-pointer">
                <img
                  src={cart}
                  alt="icon"
                  fetchPriority="high"
                  loading="lazy"
                />
              </button>
              <span className="px-2 py-1 rounded-full bg-primary text-neutral-1 font-inter font-semibold text-xs">
                2
              </span>
            </div>
          </div>
        </div>
      </Container>
    </motion.nav>
  );
};

export default Navber;
