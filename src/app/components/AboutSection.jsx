"use client";
import React from "react";
import Image from "next/image";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import SchoolIcon from "@mui/icons-material/School";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-white py-5 md:py-20"
      id="about"
    >
      <div className="flex">
        <SentimentSatisfiedAltIcon fontSize="large" />
        <h2 className="uppercase text-xl font-bold md:text-3xl  ml-2">
          About Me
        </h2>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 ">
        <div>
          <Image
            src="/images/1166-16-222-1.png"
            alt="Description of the image"
            width={380}
            height={380}
          />
        </div>
        <div>
          <h2 className="text-lg uppercase font-semibold text-white mb-4 md:text-3xl">
            Who am i ?
          </h2>
          <p className="text-sm lg:text-base indent-8">
            Hello! <WavingHandIcon className="mr-2" /> I&apos;m Kornkanok
            Rinphon (Aomsin), a fresh graduate from Computer Engineering,
            excited to embark on a journey into the world of
            <span className=" text-pink-400 font-semibold mx-1">
              frontend development.
            </span>
          </p>
          <p className="text-sm lg:text-base indent-8 pt-2">
            Now I am looking for a career as a 
            <span className=" text-pink-400 font-semibold mx-1">
              Full-Time Frontend Developer 
            </span>
            and aim to improve my coding skills and productivity in this field.
            In addition to technical skills I also strive to strengthen
            problem-solving abilities and promote effective collaboration within
            teams. My long-term ambition is to succeed in the programming field
            and further develop my career.
          </p>
          <div className="mt-8">
            <span className="uppercase text-xl font-bold md:text-3xl">
              <SchoolIcon fontSize="large mr-2" />
              Education
            </span>
            <div className="grid grid-cols-3 gap-4 mt-5">
              <Image src="/images/NULOGO.png" width={120} height={120} />
              <div className="col-span-2">
                <p className="font-small mb-1">2019 - 2023</p>
                <p className="mb-1 font-bold">
                  Bachelor of Computer Engineering
                </p>
                <p className="font-small mb-1">
                  Faculty of Engineering Naresuan University
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
