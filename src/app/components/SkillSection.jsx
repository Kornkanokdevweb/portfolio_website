import React from "react";
import LaptopIcon from "@mui/icons-material/Laptop";
import TerminalIcon from "@mui/icons-material/Terminal";
import CodeIcon from '@mui/icons-material/Code';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

const SkillSection = () => {
  return (
    <section className="text-white py-5 md:py-20" id="skills">
      <div className="flex">
        <LaptopIcon fontSize="large" />
        <h2 className="uppercase text-xl font-bold md:text-3xl mb-4 ml-2">
          My Skills
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <div class="group flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full transition-transform transform hover:scale-105">
          <div class="p-6">
            <TerminalIcon sx={{ fontSize: 50 }} />
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Stack & Programming
            </h5>
            <div className="flex flex-wrap pt-2">
              <span className="bg-red-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                HTML
              </span>
              <span className="bg-sky-400 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                CSS
              </span>
              <span className="bg-yellow-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                JavaScript
              </span>
              <span className="bg-green-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                TypeScript
              </span>
              <span className="bg-gray-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                PHP
              </span>
              <span className="bg-rose-400 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                SQL
              </span>
            </div>
          </div>
        </div>

        <div class="group flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full transition-transform transform hover:scale-105">
          <div class="p-6">
            <CodeIcon sx={{ fontSize: 50 }} />
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Framework & Database
            </h5>
            <div className="flex flex-wrap pt-2">
              <span className="bg-rose-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                Angular
              </span>
              <span className="bg-lime-400 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                Tailwind CSS
              </span>
              <span className="bg-yellow-700 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                Bootstrap
              </span>
              <span className="bg-yellow-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                NodeJS
              </span>
              <span className="bg-green-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                Express.js
              </span>
              <span className="bg-cyan-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                MySQL
              </span>
              <span className="bg-indigo-400 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                TypeORM
              </span>
            </div>
          </div>
        </div>

        <div class="group flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full transition-transform transform hover:scale-105">
          <div class="p-6">
            <HomeRepairServiceIcon sx={{ fontSize: 50 }} />
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                tools
            </h5>
            <div className="flex flex-wrap pt-2">
              <span className="bg-fuchsia-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                Git
              </span>
              <span className="bg-sky-400 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                Postman
              </span>
              <span className="bg-yellow-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                Figma
              </span>
              <span className="bg-blue-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-1 rounded">
                Trello
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
