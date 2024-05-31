"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Amazon Clone Webapp",
    description:
      "Ecommerce webapp for shopping build with MERN Stack , MaterialUI. Have features which allows user to reset password via email, Authentication , can comment and rate products , and have Admin Panel , dashboard feature. ",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abhimanyu12321/Shopping-app-frontend",
    previewUrl:
      "https://shopping-app-frontend-q1op-git-master-abhimanyu12321.vercel.app/",
  },
  {
    id: 2,
    title: "Multi Language quiz",
    description:
      "A quiz site where users choose one language , then go through some words and their translated words and then go through a quiz. The result with the user's answer and correct answer is shown at last, build with React , MaterialUI , TypeScript , Redux. Have text-to-voice feature. ",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abhimanyu12321/Multilanguage-Quiz",
    previewUrl: "https://multilanguage-quiz.vercel.app/",
  },
  {
    id: 3,
    title: "IMDB Movie App",
    description:
      "A Movie site where users can find popular , upcoming and Top-rated Movie List build with React , Next,js ,TailwindCSS and imdb Movie API for fetching data. ",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abhimanyu12321/movie-app",
    previewUrl: "https://movie-app-abhimanyu12321.vercel.app/",
  },
  {
    id: 4,
    title: "AI CERTS Landing page",
    description:
      "A landing page for AI CERTS which is a certification platform  build with React , Next,js ,TailwindCSS. ",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abhimanyu12321/AI-clerts-assignment",
    previewUrl: "https://ai-clerts-assignment.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
