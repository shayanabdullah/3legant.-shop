import React from "react";
import Container from "../layouts/Container";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router";
import ProductCard from "../product/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { products } from "../../data/product";
import Button from "../ui/Button";
import { motion } from "motion/react";
import { textVariant } from "../../utils/animations";

const NewArrivals = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-0 ">
      <Container>
        <div className="header w-full flex justify-between items-center pb-12">
          <motion.h2
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="font-poppins font-semibold text-[32px] md:text-[40px] leading-11"
          >
            New <br /> Arrivals
          </motion.h2>
          <Button
            text={"More Products "}
            icon={
              <IoArrowForwardOutline className="transition-all duration-300 group-hover:ml-3" />
            }
          />
        </div>
        <div className="main pb-6 relative! w-full!">
          {/* Product Card */}
          <Swiper
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper w-full!"
            slidesPerView={"auto"}
            spaceBetween={24}
            freeMode={true}
            pagination={{
              type: "progressbar",
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  img={product.img}
                  tag={product.tag.label}
                  discount={product.discount}
                  rating={product.rating}
                  title={product.title}
                  previousPrice={product.oldPrice}
                  tagColor={product.tag.color}
                  price={product.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default NewArrivals;
