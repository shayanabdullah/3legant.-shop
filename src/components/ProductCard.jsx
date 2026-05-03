import React from 'react'
import { MdOutlineStar } from 'react-icons/md'
import { TiHeartOutline } from 'react-icons/ti'
import { motion } from 'motion/react';
import { textVariant } from '../utils/animations';

const ProductCard = ({img, title, tag, tagColor, discount, previousPrice, price, rating}) => {
  return (
    <div>
        <div className="img relative overflow-hidden group cursor-pointer mb-3.5">
            <img src={img} alt="product" fetchPriority='high' loading='lazy' width={'100%'} />
                <div className="flex flex-col gap-y-2 absolute top-4 left-4 z-10">
                    {tag && <h3 className={`py-1 px-3.5  font-inter font-bold text-neutral-1 ${tagColor || 'bg-neutral-1 text-neutral-7'}`}>{tag}</h3>}
                 {discount && <h3 className='py-1 px-3.5 bg-green font-inter font-bold text-neutral-1 w-fit'>{discount}</h3>}
                   </div>
               <div className="p-4 size-full flex flex-col justify-between absolute top-full  group-hover:top-0 group-hover:opacity-100 opacity-0 transition-all duration-500 bg-neutral-3/50 *:">
                <div className="header w-full flex justify-end">
               
                     <button className='p-2.25 rounded-full bg-neutral-1 text-neutral-7 text-xl shadow shadow-neutral-4  cursor-pointer '>
                         <TiHeartOutline />
                     </button>
                </div>
                <button className='py-3 w-full bg-neutral-7 text-neutral-1 rounded-lg font-inter font-medium cursor-pointer'>Add to cart</button>
               </div>
        </div>
        <div className="text">
            <motion.div variants={textVariant(0.1)} initial='hidden' whileInView={'show'} viewport={{once:true}} className="star pb-2.5">
               {
                rating >= 4 ? (
                  <div className="flex items-center gap-x-1 text-xl">
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                  </div>
                )
                : (
                  <div className="flex items-center gap-x-1 text-xl">
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                  </div>
                )   
               }
            </motion.div >
            <div className="title">
                <motion.h2 variants={textVariant(0.2)} initial='hidden' animate={'show'}  className='font-inter font-semibold text-base'>{title || 'product '}</motion.h2>
            </div>
            <div className="price flex items-center gap-x-2">
                <motion.p variants={textVariant(0.3)} initial='hidden' animate={'show'}  className='font-inter font-semibold text-sm text-neutral-7'>${price}</motion.p>
                {previousPrice &&  <p className='font-inter font-normal text-sm text-neutral-4 line-through'>{previousPrice}.00</p> }
            </div>
        </div>
    </div>
  )
}

export default ProductCard