"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";

const experiences = [
  {
    company: "Pulse Solution",
    role: "Node.js Developer",
    date: "April 2025 - Present",
    tasks: [
      "Developed and launched the Musa app's backend using Node.js, Express, and MongoDB. Utilized AWS (S3, CloudFront) for storage, and content delivery. Built key features including media management, subscriptions, notifications, and admin controls, focusing on performance and scalability.",
    ],
    tech: "Technologies used: TypeScript , Node.js, Express , MongoDB, AWS (S3, CloudFront), EJS template engine.",
  },
  {
    company: "PRNK Infotech LLP",
    role: "Frontend Developer",
    date: "Sep 2024 - March 2025",
    tasks: [
      "Sistahchatta : Developed a dynamic, fully responsive product review web app that allows users to rate and review products. Utilized TypeScript, React, Next.js, Tailwind CSS,ShadCN UI, and React Query to implement key features such as complete user profilemanagement, authentication, an admin dashboard, and infinite scrolling across all pages.",
      "Spendcraft, PauseMy.cloud, & QRCode Projects: Translated detailed Figma designs into high-performance, SEO-friendly, and accessible multi-page applications (6-7 pages each) using next.js, shadcn ui, and tailwind css, ensuring seamless user experiences across devices",
      "Dashboard Revamp: Overhauled an existing dashboard application by migrating the codebase from material ui to tailwind css and shadcn ui. This transition reduced the overall codebase by 50% (from 10,000 to 5,000 lines) while enhancing code maintainability andperformance.",
    ],
    tech: "Technologies used: React,Next.js, TypeScript, Tailwind,Figma CSS,Context api React Query,Nextauth,Material UI.",
  },
  {
    company: "Freshbuyzar",
    role: "Frontend Developer Intern",
    date: "June 2024 - August 2024",
    tasks: [
      "Transformed the static freshbuzar site to fully dynamic site. Developed and integrated a complete cart feature and implemented seamless order processing workflows.",
      "Enhanced site performance by leveraging Next.js Server-Side Rendering (SSR) and Static Site Generation (SSG)., and Successfully integrated online payment gateways to streamline the purchasing process.",
    ],
    tech: "Technologies used: React.js, Next.js, Context API, React Query, Tailwind CSS, and ShadCN UI.",
  },
];

export default function ExperienceSection() {
  const refHeading = useRef(null);
  const inViewHeading = useInView(refHeading);
  const [activeIdx, setActiveIdx] = useState(0);

  // Bar positions for animation (match your previous logic)
  const barPositions = [97, 97, 48];
  const barAbovePositions = [129, 129, 1];

  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className=" my-4 sm:my-8 sm:px-6 text-white" id="experience">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <h3 className="text-3xl font-[800] text-white sm:text-5xl">
          Experience
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-white"></div>
      </motion.div>
      <div className="mt-4 sm:mt-10 flex flex-col items-center justify-between py-2">
        <section className="flex w-full flex-col items-center justify-center space-y-4 overflow-hidden lg:flex-row lg:items-start lg:justify-between lg:space-y-0 lg:px-20 xl:space-x-6">
          {/* Companies Bar */}
          <div className="scrollbar-hide flex w-screen flex-col items-start justify-start overflow-scroll pb-4 md:items-center md:justify-center lg:w-[220px] lg:flex-row lg:overflow-hidden lg:pb-0 ">
            {/* Left bar holder */}
            <div className="relative order-1 hidden translate-y-1 rounded bg-gray-500 lg:block lg:h-[240px] lg:w-0.5">
              <motion.div
                animate={{ y: barPositions[activeIdx] }}
                className="absolute h-0.5 w-10 rounded bg-heading lg:h-10 lg:w-0.5"
              />
            </div>
            {/* Companies name as buttons */}
            <div className="order-1 flex flex-col space-y-1 px-4 md:px-8 lg:order-2 lg:px-0">
              <div className="flex flex-row lg:flex-col">
                {experiences.map((exp, idx) => (
                  <button
                    key={exp.company}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-32 flex-none rounded py-3 text-center font-mono text-sm duration-500 hover:text-gray-500 lg:w-44 lg:px-4 lg:pl-6 lg:text-left lg:text-base ${
                      activeIdx === idx ? "scale-[1.03]" : ""
                    } ${activeIdx !== idx ? "text-white" : ""}`}
                    style={activeIdx === idx ? { color: "#3182CE" } : {}}
                  >
                    {exp.company}
                  </button>
                ))}
              </div>
              <div className="block h-0.5 rounded bg-gray-500 lg:hidden">
                <motion.div
                  animate={{ x: barAbovePositions[activeIdx] }}
                  className="h-0.5 w-[128px] rounded"
                ></motion.div>
              </div>
            </div>
          </div>
          {/* Experience Details */}
          <div className="w-full flex-1 px-2">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center justify-between gap-3 px-4 md:px-0 lg:flex-row xl:gap-5"
            >
              <div
                className={`flex w-full flex-col space-y-3 ${
                  activeIdx === 1 ? "lg:max-w-xl xl:max-w-2xl" : ""
                }`}
              >
                <div className="spacey-y-2 flex flex-col">
                  <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
                    {experiences[activeIdx].role}
                  </span>
                  <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-[#3182CE] sm:flex-row sm:items-center sm:text-base">
                    <span>{experiences[activeIdx].company}</span>
                    <span>{experiences[activeIdx].date}</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-1 text-sm sm:text-base">
                  {experiences[activeIdx].tasks.map((task, i) => (
                    <div key={i} className="flex flex-row space-x-2">
                      <ArrowRightIcon className={"h-5 w-4 flex-none"} />
                      <span>{task}</span>
                    </div>
                  ))}
                  <div className="flex flex-row space-x-2">
                    <ArrowUpRightIcon className={"h-5 w-4 flex-none"} />
                    <span className="font-bold text-[#3182CE]">
                      {experiences[activeIdx].tech}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}
