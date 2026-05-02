import React from "react";
import Container from "./layouts/Container";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router";
import productOne from "../assets/images/product-1.webp";
import productTwo from "../assets/images/product-2.webp";
import lamp from "../assets/images/lamp.webp";
import basket from "../assets/images/basket.webp";
import toaster from "../assets/images/toaster.webp";
import drawer from "../assets/images/drawer.webp";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      title: "Modern Loveseat Sofa",
      price: 199.9,
      oldPrice: 400.00,
      discount: "-50%",
      tag: {
        label: "SALE",
      },
      rating: 5,
      img: productOne,
    },
    {
      id: 2,
      title: "Glass Dome Table Lamp",
      price: 24.99,
      oldPrice: 49.99,
      discount: "-50%",
      tag: {
        label: "NEW",
        color: "bg-green-500",
      },
      rating: 4,
      img: productTwo,
    },
    {
      id: 3,
      title: "Minimal Beige Table Lamp",
      price: 24.99,
      oldPrice: 39.99,
      discount: "-35%",
      tag: {
        label: "TRENDING",
        color: "bg-blue-500",
      },
      rating: 4,
      img: lamp,
    },
    {
      id: 4,
      title: "Handwoven Bamboo Basket",
      price: 24.99,
      oldPrice: 34.99,
      discount: "-30%",
      tag: {
        label: "BESTSELLER",
        color: "bg-yellow-500",
      },
      rating: 5,
      img: basket,
    },
    {
      id: 5,
      title: "Retro 2-Slice Toaster",
      price: 224.99,
      oldPrice: 299.99,
      discount: "-25%",
      tag: {
        label: "LIMITED",
        color: "bg-purple-500",
      },
      rating: 4,
      img: toaster,
    },
    {
      id: 6,
      title: "White Drawer unit",
      price: 89.99,
      tag: {
        label: "POPULAR",
        color: "bg-purple-500",
      },
      rating: 4,
      img: drawer,
    },
  ];
  return (
    <section className="py-8 md:py-12 px-4 md:px-0 ">
      <Container>
        <div className="header w-full flex justify-between items-center pb-12">
          <h2 className="font-poppins font-semibold text-[32px] md:text-[40px] leading-11">
            New <br /> Arrivals
          </h2>
          <Link className="flex items-center gap-x-1 font-inter font-medium text-base py-1 border-b group">
            More Products
            <IoArrowForwardOutline className="transition-all duration-300 group-hover:ml-3" />
          </Link>
        </div>
        <div className="main pb-6 relative! w-full!">
          {/* Product Card */}
          <Swiper
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper w-full!"
            slidesPerView={'auto'}
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
