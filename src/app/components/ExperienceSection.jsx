import React from "react";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const ExperienceSection = () => {
  return (
    <section className="text-white py-5 md:py-20" id="experiences">
        <div className="flex">
            <BusinessCenterIcon fontSize="large"/> 
            <h2 className="uppercase text-xl font-bold md:text-3xl mb-4 ml-1">
                My Experiences
            </h2>
        </div>
        

        <div className="group max-w-screen-2xl py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 divide-y divide-gray-400 mt-5 transition-transform transform hover:scale-105">
          <div className="flex items-center justify-between px-8">
            <div>
              <p className="text-xl font-semibold text-gray-700">
                SFIA Version 8 Competency Profile System (Senior Project)
              </p>
              <p className="text-sm font-light text-gray-600 mt-1">
                <LocationCityIcon />{" "}
                <span className="ml-1">Naresuan University</span>
              </p>
            </div>
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">
              Jul 2023 - Dec 2023
            </span>
          </div>

          <div className="mt-3 px-8">
            <p className="mt-2 text-gray-600 dark:text-gray-300 indent-8">
              SFIA Version 8 is a system that helps analyze skills. own
              potential according to international standards I am part of the
              team developing the system. throughout the development period I
              helped the team Plan work and solve problems that arise so that
              they are successfully completed.
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Responsibilities </span>
              <br></br>• Designed user interfaces and optimized user experience
              for desktop,tablet and mobile devices. <br></br>• Developed and
              implemented the frontend code based on user interface design.
              <br></br>• Write an API for connecting between applications and
              connect frontend to backend is by using RESTful API communication.
            </p>
          </div>

          <div className="mt-4 pt-4 px-8">
            <p className="font-semibold text-gray-600">Skills</p>
            <div className="flex flex-wrap pt-2">
              <span className="bg-red-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                Angular
              </span>
              <span className="bg-sky-400 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                Tailwind css
              </span>
              <span className="bg-green-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                NodeJS
              </span>
              <span className="bg-gray-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                Express.js
              </span>
              <span className="bg-yellow-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                MySQL
              </span>
              <span className="bg-rose-400 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                TypeORM
              </span>
              <span className="bg-purple-600 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                Figma
              </span>
            </div>
          </div>
        </div>

        <div className="group max-w-screen-2xl py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 divide-y divide-gray-400 mt-5 transition-transform transform hover:scale-105">
          <div className="flex items-center justify-between px-8">
            <div>
              <p className="text-xl font-semibold text-gray-700">
                Software Tester (Internship)
              </p>
              <p className="text-sm font-light text-gray-600 mt-1">
                <LocationOnIcon />{" "}
                <span className="ml-1">Paiduaykanmai Co., Ltd.</span>
              </p>
            </div>
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">
              Apr 2023 - Jun 2023
            </span>
          </div>

          <div className="mt-3 px-8">
            <p className="mt-2 text-gray-600 dark:text-gray-300 indent-8">
              For this internship, I have trained about Software Tester,
              including software system testing, divided into Manual Testing and
              Automated Testing.
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Responsibilities </span>
              <br></br>• Authored comprehensive Test Scenarios and Test Cases to
              ensure thorough coverage of Nest8 and Savety systems.<br></br> •
              Conducted weekly tests to evaluate the overall functionality of
              both Nest8 and Savety systems. <br></br>• Implemented Automation
              Testing using Cypress to enhance efficiency and accuracy in the
              testing process. <br></br>• Collaborated within an Agile
              framework, adapting to iterative development cycles and ensuring
              quick response to changing project requirements.
            </p>
          </div>

          <div className="mt-4 pt-4 px-8">
            <p className="font-semibold text-gray-600">Skills</p>
            <div className="flex flex-wrap pt-2">
              <span className="bg-red-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                Test Scenarios and Test Cases
              </span>
              <span className="bg-blue-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                Manual Testing
              </span>
              <span className="bg-purple-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                Automation Testing using Cypress
              </span>
            </div>
          </div>
        </div>

        <div className="group max-w-screen-2xl py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 divide-y divide-gray-400 mt-5 transition-transform transform hover:scale-105">
          <div className="flex items-center justify-between px-8">
            <div>
              <p className="text-xl font-semibold text-gray-700">
                Enrollment Systems
              </p>
              <p className="text-sm font-light text-gray-600 mt-1">
                <LocationCityIcon />{" "}
                <span className="ml-1">Naresuan University</span>
              </p>
            </div>
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">
              Jan 2023 - Mar 2023
            </span>
          </div>

          <div className="mt-3 px-8">
            <p className="mt-2 text-gray-600 dark:text-gray-300 indent-8">
              Enrollment Systems is a system designed to allow students and
              teachers to complete the enrollment process conveniently and
              efficiently. This system is divided into 2 main levels of users:
              students and professors (administrators). Each level has different
              rights and functions.
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Responsibilities </span>
              <br></br>• Participate with the team in designing and developing
              database systems according to user needs.<br></br> • Design the
              UX/UI of the system and develop the system according to the user
              interface.
            </p>
          </div>

          <div className="mt-4 pt-4 px-8">
            <p className="font-semibold text-gray-600">Skills</p>
            <div className="flex flex-wrap pt-2">
              <span className="bg-fuchsia-600 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                PHP
              </span>
              <span className="bg-pink-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                CSS
              </span>
              <span className="bg-lime-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                Bootstrap
              </span>
              <span className="bg-yellow-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                MySQL
              </span>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ExperienceSection;
