"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import Link from "next/link";
import { BorderBeam } from "@/components/magicui/border-beam";

const HeroSection = () => {
  return (
    <section className="lg:py-16 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Abhimanyu",
                1000,
                "Web Developer",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I fell in love with Computer Science and I have at least learnt
            something, I think… 🤷‍♂️
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-[60%] sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-indigo-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/cv.pdf"
              passHref
              target="_blank"
              className=" relative inline-block w-[60%] sm:w-fit rounded-full  hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
              <BorderBeam
                size={70}
                duration={2}
                className="from-blue-500 to-indigo-500 p-0 m-0"
              />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 relative "
        >
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative my-12 ">
            <Image
              src="/images/my.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl  w-full h-full object-cover saturate-50"
              width={300}
              height={200}
            />
            <BorderBeam
              duration={8}
              size={100}
              colorFrom="#3b82f6"
              colorTo="#6366f1"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
