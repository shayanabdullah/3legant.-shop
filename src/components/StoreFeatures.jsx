import React from 'react'
import Container from './layouts/Container'
import { FiTruck } from 'react-icons/fi'
import { PiCreditCard } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { motion } from 'motion/react';
import { fadeIn, textVariant } from './../utils/animations';
const StoreFeatures = () => {

const valueProps = [
  {
    id: 1,
    title: "Free Shipping",
    description: "Order above $200",
    icon: FiTruck,
    delay : 0.1
  },
  {
    id: 2,
    title: "Money-back",
    description: "30 days guarantee",
    icon: PiCreditCard,
     delay : 0.2
  },
  {
    id: 3,
    title: "Secure Payments",
    description: "Secured by Stripe",
    icon: CiLock,
     delay : 0.3
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Phone and Email support",
    icon: LuPhone,
     delay : 0.4
  },
];
  return (
    <section className=' py-8 md:py-12 px-4 md:px-0'>
        <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-6 md:gap-x-6 ">
              {
                valueProps.map((item)=> (
                    <motion.div variants={fadeIn('up', item.delay)} initial='hidden' whileInView="show" viewport={{once:true}} className="py-8 md:py-12 px-4 md:px-8  bg-neutral-2" key={item.id}>
                    <item.icon className='text-4xl mb-4'/>
                    <div className="">
                        <motion.h2 variants={textVariant(item.delay)} 
                        
                        className='font-poppins  text-sm md:text-xl font-semibold text-neutral-7 pb-2'>{item.title}</motion.h2>
                        <motion.p variants={textVariant(item.delay + 0.1)}  className='font-inter text-sm font-normal text-neutral-4'>{item.description}</motion.p>
                    </div>
                </motion.div>
                ))
              }
            </div>
        </Container>
    </section>
  )
}

export default StoreFeatures