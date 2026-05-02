 import productOne from "../assets/images/product-1.webp";
import productTwo from "../assets/images/product-2.webp";
import lamp from "../assets/images/lamp.webp";
import basket from "../assets/images/basket.webp";
import toaster from "../assets/images/toaster.webp";
import drawer from "../assets/images/drawer.webp";
 
export const products = [
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