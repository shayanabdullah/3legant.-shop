import React from 'react'
import Container from '../layouts/Container'
import { motion } from 'motion/react';
import { textVariant } from '../../utils/animations';
import { NavLink } from 'react-router';
import { PiInstagramLogoLight, PiYoutubeLogoLight } from 'react-icons/pi';
import { LuFacebook } from 'react-icons/lu';

const Footer = () => {
  const footerlinks = [
    { navlink: "Home", href: "/" },
    { navlink: "Shop", href: "/shop" },
    { navlink: "Product", href: "/product" },
    { navlink: "Blog", href: "/blog" },
    { navlink: "Contact us", href: "/contact" },
  ];

  return (
    <footer className='py-10 md:pt-20 md:pb-8 bg-neutral-7 px-6 md:px-0'>
      <Container>
        <div className="main flex flex-col gap-y-12 justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between">

            <div className="flex flex-col md:flex-row gap-x-8 gap-y-4 items-center mb-10 md:mb-0">
              <div className="logo pb-5 md:pr-8 md:pb-0 border-b md:border-r md:border-b-0 border-neutral-4 h-fit w-fit">
                <motion.h2
                  variants={textVariant(0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="font-poppins font-semibold text-2xl text-neutral-1"
                >
                  3legant <span className="text-neutral-4">.</span>
                </motion.h2>
              </div>
              <motion.div
                variants={textVariant(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <p className='font-inter font-medium text-sm text-neutral-3'>Furniture & Home Décor Store.</p>
              </motion.div>
            </div>

            {/* Footer links */}
            <div className="flex flex-col md:flex-row items-center gap-x-10 gap-y-10 justify-end">
              {footerlinks.map((nav, index) => (
                <motion.span
                  key={index}
                  variants={textVariant(0.2 + index * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <NavLink
                    to={nav.href}
                    className="font-space-grotesk font-medium text-sm text-neutral-1 hover:text-neutral-2! hover:underline transition-colors duration-200"
                  >
                    {nav.navlink}
                  </NavLink>
                </motion.span>
              ))}
            </div>

          </div>

          <div className="py-4 border-t-[0.5px] border-neutral-4">
            <div className="size-full flex flex-col md:flex-row items-center justify-between">

              <div className="flex items-center flex-col md:flex-row gap-x-7 gap-y-7">
                <motion.p
                  variants={textVariant(0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className='font-poppins font-medium text-xs text-neutral-3'
                >
                  Copyright © 2026 3legant. All rights reserved.
                </motion.p>
                <motion.p
                  variants={textVariant(0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className='font-poppins font-bold text-xs text-neutral-3 md:ml-7'
                >
                  Privacy Policy
                </motion.p>
                <motion.p
                  variants={textVariant(0.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className='font-poppins font-bold text-xs text-neutral-3'
                >
                  Terms of Use
                </motion.p>
              </div>

              <motion.div
                variants={textVariant(0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center gap-x-6 text-neutral-1 text-2xl my-6"
              >
                <PiInstagramLogoLight />
                <a href="https://www.facebook.com/profile.php?id=61580061792886">
                  <LuFacebook />
                </a>
                <PiYoutubeLogoLight />
              </motion.div>

            </div>

            <motion.p
              variants={textVariant(0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className='font-poppins font-medium text-xs text-neutral-3 mt-4 text-center md:text-left'
            >
              Develop by Shayan Abdullah
            </motion.p>
          </div>

        </div>
      </Container>
    </footer>
  )
}

export default Footer