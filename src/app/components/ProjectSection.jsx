"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import FolderCopyIcon from '@mui/icons-material/FolderCopy';

const projectsData = [
  {
    id: 1,
    title: "SFIA Version 8 Competency Profile System",
    image: "/images/projects/sfia.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Kornkanokdevweb/SFIAVersion8",
    previewUrl: "https://client-sfiav8.vercel.app/",
  },
  {
    id: 2,
    title: "Enrollment Systems",
    image: "/images/projects/student.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Kornkanokdevweb/StudentCourse",
    previewUrl: "https://github.com/Kornkanokdevweb/StudentCourse",
  },
];

const ProjectSection = () => {
  return (
    <section className="text-white py-5 md:py-20" id="projects">
      <div className="flex py-4">
        <FolderCopyIcon fontSize="large" />
        <h2 className="uppercase text-xl font-bold md:text-3xl mb-4 ml-2">
          My Projects
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};
export default ProjectSection;
