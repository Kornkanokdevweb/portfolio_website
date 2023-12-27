"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const ProflieSction = () => {
  return (
    <section className="py-10" id="home">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Kornkanok Rinphon",
                1000, //
                "Frontend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "0.5em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base uppercase sm:text-lg mb-6 lg:text-xl">
            This is my portfolio website
          </p>
          <div>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                Hire Me
              </button>
            </ScrollLink>
            <button
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3"
              onClick={() => {
                const pdfPath = "/resume/Resume-Kornkanok.pdf";
                const link = document.createElement("a");
                link.href = pdfPath;
                link.download = "Resume-Kornkanok.pdf";
                link.click();
              }}
            >
              Download Resume
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative mt-10">
            <Image
              src="/images/pic1.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Profile picture"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProflieSction;
