import React, { useState } from "react";
import Container from "../components/layouts/Container";
import left from "../assets/images/signIn.webp";
import mobile from "../assets/images/mobileSign.webp";
import { Link } from "react-router";
import { motion } from "motion/react";
import { textVariant } from "../utils/animations";
import { FiMail } from "react-icons/fi";
import { LuEye, LuEyeOff } from "react-icons/lu";
const Register = () => {
    const [type, setType] = useState("password");  
    const [showPass, setShowPass] = useState(false);
      const handleShow = () => {
    setShowPass((prev) => !prev);
    setType(showPass ? "text" : "password");
  };
  const isMobile = window.innerWidth < 600;
  return (
    <section className="max-w-[1500px] mx-auto"> 
        <div className="main size-full grid grid-cols-1 md:grid-cols-2 overflow-y-hidden lg:max-h-screen!  md:min-h-192">
          <div className="left lg:w-[102%] ">
            <img src={isMobile ? mobile : left} alt="signin" fetchPriority="high" loading="lazy" className="h-full w-full"/>
          </div>
          <div className="right lg:w-[98%] py-10 px-8 lg:px-20 flex flex-col  justify-center  ">
            <div className="pb-5 md:pb-8">
              <motion.h2
                variants={textVariant(0.2)}
                initial="hidden"
                whileInView={"show"}

                
                className="font-poppins font-semibold text-[40px] text-neutral-7 pb-4 md:pb-6"
              >
                Sign up
              </motion.h2>
              <motion.p
                variants={textVariant(0.3)}
                initial="hidden"
                whileInView={"show"}
                className="font-inter font-semibold text-neutral-4"
              >
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-green hover:underline transition-all"
                >
                  Sign in
                </Link>
              </motion.p>
            </div>
            {/* input fields */}
            <motion.div
              variants={textVariant(0.4)}
              initial="hidden"
              whileInView={"show"}
              className="input w-full flex flex-col gap-y-6 pb-8"
            >
              <input
                type="text"
                placeholder="Your name"
                className="py-3 outline-0 border-b border-neutral-4 w-full font-inter font-semibold text-base  text-neutral-4 "
              />
              <input
                type="text"
                placeholder="Username"
                className="py-3 outline-0 border-b border-neutral-4 w-full font-inter font-semibold text-base text-neutral-4 "
              />
              <input
                type="email"
                placeholder="Email address"
                className="py-3 outline-0 border-b border-neutral-4 w-full font-inter font-semibold text-base text-neutral-4 "
              />
            <div className="relative">
                <input
                type={type}
                placeholder="Password"
                className="py-3 outline-0 border-b border-neutral-4 w-full font-inter font-semibold text-base text-neutral-4 "
              />
                <i
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-xl cursor-pointer"
                    onClick={handleShow}
                  >
                    {type == "text" ? <LuEyeOff /> : <LuEye />}
                  </i>
            </div>
            </motion.div>
            <div className="flex items-center gap-x-3 pb-8">
              <input type="checkbox" id="terms"  className="accent-black"/>
              <label htmlFor="terms" className="font-inter font-normal text-base text-neutral-4 cursor-pointer ">
               I agree with <span className="font-semibold text-neutral-7">Privacy Policy</span> and <span className="font-semibold text-neutral-7">Terms of Use</span>
              </label>
            </div>
            <button className="py-3.5 px-6 font-inter font-medium text-white text-body-lg bg-primary rounded-md cursor-pointer w-full ">
                Sign in
              </button>
          </div>
        </div>
    </section>
  );
};

export default Register;
