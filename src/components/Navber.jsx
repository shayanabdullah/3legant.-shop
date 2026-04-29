import React from "react";
import Container from "./layouts/Container";
import { Link, NavLink } from "react-router";
import search from "../assets/icons/search.webp";
import cart from "../assets/icons/shopping-bag.webp";
import user from "../assets/icons/user-circle.webp";
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
    <nav className="py-4.5 bg-neutral-1">
      <Container>
        {/* Desktop Navber */}
        <div className="nav-main flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <h2 className="font-poppins font-semibold text-2xl text-primary">
              3legant.
            </h2>
          </div>
          {/* Navlinks */}
          <div className="flex items-center gap-x-10">
            {navLinks.map((nav, index) => (
              <NavLink
                to={nav.href}
                style={({ isActive }) => ({
                  color: isActive ? "#141718" : "#6C7275",
                })}
                className={"font-space-grotesk font-medium text-sm hover:text-neutral-7! transition-colors duration-200"}
              >
                {nav.navlink}
              </NavLink>
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
    </nav>
  );
};

export default Navber;
