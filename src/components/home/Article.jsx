import React from "react";
import Container from "../layouts/Container";
import { motion } from "motion/react";
import { fadeIn, textVariant } from "../../utils/animations";
import { IoArrowForwardOutline } from "react-icons/io5";
import one from "../../assets/images/article-one.webp";
import two from "../../assets/images/article-two.webp";
import three from "../../assets/images/article-three.webp";
import Button from "../ui/Button";

const Article = () => {
  return (
    <section className="py-10 md:py-20 px-8 md:px-0">
      <Container>
        <div className="header w-full flex justify-between items-center pb-10">
          <motion.h2
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="font-poppins font-semibold text-[32px] md:text-[40px] leading-11"
          >
            Articles
          </motion.h2>
          <Button
            text={"More Articles"}
            icon={
              <IoArrowForwardOutline className="transition-all duration-300 group-hover:ml-3" />
            }
          />
        </div>
        {/* Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
          <motion.div
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="card size-full cursor-pointer"
          >
            <img
              src={one}
              alt="one"
              fetchPriority="high"
              loading="lazy"
              width={"100%"}
            />
            <div className="text mt-6">
              <motion.h2
                variants={textVariant(0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className="font-poppins md:text-xl font-semibold text-neutral-7 pb-2"
              >
                7 ways to decor your home
              </motion.h2>
              <Button
                text={"Read More"}
                icon={
                  <IoArrowForwardOutline className="transition-all duration-300 group-hover:ml-3" />
                }
                variants={textVariant(0.2)}
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn(0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="card size-full cursor-pointer"
          >
            <img
              src={two}
              alt="one"
              fetchPriority="high"
              loading="lazy"
              width={"100%"}
            />
            <div className="text mt-6">
              <motion.h2
                variants={textVariant(0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className="font-poppins md:text-xl font-semibold text-neutral-7 pb-2"
              >
                Kitchen organization
              </motion.h2>
              <Button
                text={"Read More"}
                icon={
                  <IoArrowForwardOutline className="transition-all duration-300 group-hover:ml-3" />
                }
                variants={textVariant(0.3)}
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn(0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="card size-full cursor-pointer"
          >
            <img
              src={three}
              alt="one"
              fetchPriority="high"
              loading="lazy"
              width={"100%"}
            />
            <div className="text mt-6">
              <motion.h2
                variants={textVariant(0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className="font-poppins md:text-xl font-semibold text-neutral-7 pb-2"
              >
                Decor your bedroom
              </motion.h2>
              <Button
                text={"Read More"}
                icon={
                  <IoArrowForwardOutline className="transition-all duration-300 group-hover:ml-3" />
                }
                variants={textVariant(0.4)}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Article;
