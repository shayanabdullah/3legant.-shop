import React, { useRef, useState } from "react";
import Container from "../layouts/Container.jsx";
import { Link, NavLink, useLocation } from "react-router";
import search from "../../assets/icons/search.webp";
import cart from "../../assets/icons/shopping-bag.webp";
import user from "../../assets/icons/user-circle.webp";
import { motion } from "motion/react";
import { fadeIn, slideInLeft, textVariant } from "../../utils/animations.js";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { LuFacebook, LuSearch } from "react-icons/lu";
import { BsHeart } from "react-icons/bs";
import { PiInstagramLogoLight, PiYoutubeLogoLight } from "react-icons/pi";
import useClickOutside from "../../hooks/useClickOutside.jsx";

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const handleClickMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  useClickOutside(menuRef, () => setIsMenuOpen(false), isMenuOpen);
  const currentPath = useLocation().pathname;
  return (
    <motion.nav
      variants={fadeIn("down", 0.1)}
      animate="show"
      initial="hidden"
      viewport={{ once: true }}
      className="py-4.5 bg-neutral-1 "
    >
      <Container>
        {/* Desktop Navber */}
        <div className="nav-main hidden lg:flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <motion.h2
              variants={textVariant(0.2)}
              viewport={{ once: true }}
              className="font-poppins font-semibold text-2xl text-primary"
            >
              3legant.
            </motion.h2>
          </div>
          {/* Navlinks */}
          <div className="flex items-center gap-x-10">
            {navLinks.map((nav, index) => (
              <motion.span
                key={index}
                variants={textVariant(0.2)}
                viewport={{ once: true }}
              >
                <NavLink
                  to={nav.href}
                  style={({ isActive }) => ({
                    color: isActive ? "#141718" : "#6C7275",
                  })}
                  className=
                    {`font-space-grotesk font-medium text-sm hover:text-neutral-7! transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${nav.href === currentPath ? "after:w-full" : ""}`}
                  
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
                  <LuSearch className="text-2xl" />
                </button>
              </div>
              {/* user */}
              <div className="user flex items-center ">
                <button className="cursor-pointer">
                  <img
                    src={user}
                    alt="icon"
                    fetchPriority="high"
                    loading="eager"
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
                  loading="eager"
                />
              </button>
              <span className="px-2 py-1 rounded-full bg-primary text-neutral-1 font-inter font-semibold text-xs">
                2
              </span>
            </div>
          </div>
        </div>

        {/* Mobile navber */}
        <div className="main px-6 lg:hidden">
          <div className="flex items-center justify-between">
            <div className="logo flex items-center gap-x-2 ">
              <button className="text-2xl" onClick={handleClickMenu}>
                <MdMenu />
              </button>
              <motion.h2
                variants={textVariant(0.1)}
                viewport={{ once: true }}
                className="font-poppins font-semibold text-xl text-primary"
              >
                3legant.
              </motion.h2>
            </div>
            {/* Cart*/}
            <div className="flex items-center gap-x-1 cursor-pointer">
              <img src={cart} alt="icon" loading="lazy" fetchPriority="high" />
              <span className="px-1  rounded-full bg-neutral-7 text-neutral-1 font-inter font-medium text-sm">
                2
              </span>
            </div>
          </div>

          {/* side bar */}

          {/* overlay */}
          {isMenuOpen && (
            <div className="fixed top-0 inset-0 bg-neutral-6/70 z-20!"></div>
          )}
        </div>
        <div
          ref={menuRef}
          className={`absolute top-0 z-30! p-6 max-w-87.5 w-full h-screen border-r border-neutral-3 bg-white transition-all duration-300 ${isMenuOpen ? "left-0" : "-left-full "}`}
        >
          <div className="flex flex-col justify-between h-full">
            <div className="top">
              <div className="logo flex items-center justify-between pb-4">
                <motion.h2
                  variants={textVariant(0.1)}
                  viewport={{ once: true }}
                  className="font-poppins font-semibold text-xl text-primary"
                >
                  3legant.
                </motion.h2>
                <button className="text-2xl" onClick={handleClickMenu}>
                  <RxCross2 />
                </button>
              </div>
              <div className="inputs flex flex-col items-center relative gap-y-2 pb-4">
                <LuSearch className="text-2xl absolute top-2  left-2" />
                <input
                  type="text"
                  className="border border-neutral-4! py-2 pl-10 rounded-md! outline-0 min-w-full  font-inter text-body-sm text-neutral-4 focus-within:border-neutral-4 "
                  placeholder="Search"
                />
              </div>
              {/* Nav links */}

              <div className="navLinks flex flex-col gap-y-4">
                {navLinks.map((nav, index) => (
                  <motion.div
                    key={index}
                    variants={textVariant(0.2)}
                    className={
                      "font-inter font-medium text-sm hover:text-neutral-7! transition-colors duration-200 py-2.5 border-b border-neutral-3 w-full"
                    }
                    viewport={{ once: true }}
                  >
                    <NavLink
                      to={nav.href}
                      style={({ isActive }) => ({
                        color: isActive ? "#141718" : "#6C7275",
                      })}
                    >
                      {nav.navlink}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bottom">
              {/* cart, wishlist */}
              <div className="flex flex-col gap-y-4 mb-5">
                <div className="cart w-full flex items-center justify-between pb-3 border-b border-neutral-3 text-body-md font-inter font-semibold capitalize text-neutral-4">
                  cart
                  <div className="flex items-center gap-x-1 cursor-pointer">
                    <img
                      src={cart}
                      alt="icon"
                      loading="eager"
                      fetchPriority="high"
                    />
                    <span className="px-1  rounded-full bg-neutral-7 text-neutral-1 font-inter font-medium text-sm">
                      2
                    </span>
                  </div>
                </div>
                <div className="cart w-full flex items-center justify-between pb-3 border-b border-neutral-3 text-body-md font-inter font-semibold capitalize text-neutral-4">
                  Wishlist
                  <div className="flex items-center gap-x-1 cursor-pointer text-2xl text-black">
                    <BsHeart />
                    <span className="px-1  rounded-full bg-neutral-7 text-neutral-1 font-inter font-medium text-sm">
                      2
                    </span>
                  </div>
                </div>
              </div>
              <button className="py-2.5 px-6 font-inter font-medium text-white text-body-lg bg-primary rounded-md cursor-pointer w-full ">
                Sign in
              </button>
              {/* socal media icon */}
              <div className="flex items-center gap-x-6 text-[#141718] text-2xl mt-5">
                <PiInstagramLogoLight />
                <a href="https://www.facebook.com/profile.php?id=61580061792886">
                  <LuFacebook />
                </a>
                <PiYoutubeLogoLight />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.nav>
  );
};

export default Navber;
