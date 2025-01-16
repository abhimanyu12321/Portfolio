"use client";
import { useState, useTransition, useRef } from "react";
import { motion, useInView } from "framer-motion";
import React from "react";
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";

const ExperienceSection = () => {
  const refHeading = useRef(null);
  const refContent = useRef(null);
  const inViewHeading = useInView(refHeading);
  const inViewContent = useInView(refContent, { once: true });
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
        {/* Experience */}
        <ExperienceWrapper />
      </div>
    </section>
  );
};

export default ExperienceSection;

// Experience wrapper component

const ExperienceWrapper = () => {
  const barRef = React.useRef(null);

  const GetDescription = () => {
    switch (DescriptionJob) {
      case "Freshbuyzar":
        return <Freshbuyzar />;
      case "Infloso":
        return <Infloso />;
    }
  };
  const [DescriptionJob, setDescriptionJob] = React.useState("Freshbuyzar");
  return (
    <section
      className="flex w-full flex-col items-center justify-center space-y-4
        overflow-hidden lg:flex-row lg:items-start lg:justify-between lg:space-y-0 lg:px-20 xl:space-x-6"
    >
      {/* Left side of Where I've Worked, contains the bar and name of companies */}
      <CompaniesBar setDescriptionJob={setDescriptionJob} />
      {/* Description for The job */}
      <div className="w-full flex-1 px-2">{GetDescription()}</div>
    </section>
  );
};

//   Freshbuzar component
function Freshbuyzar() {
  const tasks = [
    {
      text: "Transformed the static freshbuzar site to fully dynamic site. Developed and integrated a complete cart feature and implemented seamless order processing workflows. ",
    },
    {
      text: "Enhanced site performance by leveraging Next.js Server-Side Rendering (SSR) and Static Site Generation (SSG)., and Successfully integrated online payment gateways to streamline the purchasing process.",
    },
    {
      text: "Developed  user-friendly landing pages along with other pages like contact,services,product etc for several clients using Figma.",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-between gap-3 px-4 md:px-0 lg:flex-row xl:gap-5"
      >
        <div className="flex w-full flex-col space-y-3 ">
          <div className="spacey-y-2 flex flex-col">
            {/* Title */}
            <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
              FullStack Developer Intern
            </span>
            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-[#3182CE] sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span>Freshbuyzar</span>

              {/* Date */}
              <span>June 2024 - Present</span>
            </div>
          </div>
          <div className="flex flex-col space-y-1 text-sm sm:text-base">
            {/* Tasks Description 1 */}
            {tasks?.map((item, index) => {
              return (
                <div key={index} className="flex flex-row space-x-2">
                  <ArrowRightIcon className={"h-5 w-4 flex-none"} />
                  <span>{item.text}</span>
                </div>
              );
            })}
            <div className="flex flex-row space-x-2">
              <ArrowRightIcon className={"h-5 w-4 flex-none"} />
              <span className="font-bold text-[#3182CE]">
                Technologies used: React.js, Next.js, Context API, React Query,
                Tailwind CSS, and ShadCN UI.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

// Infloso component
function Infloso() {
  const tasks = [
    {
      text: "Developed UI screens for user authentication and profile management using React, Next.js, Tailwind CSS, Figma, NextUI, and TypeScript.",
    },
    {
      text: "Implemented both credential-based and OAuth authentication mechanisms using NextAuth and Zustand.",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-between gap-3 px-4 md:px-0 lg:flex-row xl:gap-5"
      >
        <div className="flex w-full flex-col space-y-3 lg:max-w-xl xl:max-w-2xl ">
          <div className="spacey-y-2 flex flex-col">
            {/* Title */}
            <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
              FullStack Developer Intern
            </span>
            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-[#3182CE] sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span>Infloso</span>

              {/* Date */}
              <span>March 2024 - May 2024</span>
            </div>
          </div>
          <div className="flex flex-col space-y-1 text-sm sm:text-base">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
              return (
                <div key={index} className="flex flex-row space-x-2">
                  <ArrowRightIcon className={"h-5 w-4 flex-none"} />
                  <span>{item.text}</span>
                </div>
              );
            })}
            <div className="flex flex-row space-x-2">
              <ArrowUpRightIcon className={"h-5 w-4 flex-none"} />
              <span className="font-bold text-[#3182CE]">
                Technologies used: Next.js, TypeScript, Tailwind CSS, React
                Query,Nextauth, and Zustand.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

// Companies bar component
const CompaniesBar = (props) => {
  const [barPosition, setBarPosition] = React.useState(48);
  const [barAbovePosition, setBarAbovePosition] = React.useState(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] =
    React.useState([true, false, false, false, false, false, false]);

  const CompanyButton = (props) => {
    return (
      <button
        onClick={() => {
          setBarPosition(props.BarPosition);
          setBarAbovePosition(props.BarAbovePosition);
          props.setDescriptionJob(props.DescriptionJob);
          setCompanyNameBackgroundColorGreen(
            props.CompanyNameBackgroundColorGreen
          );
        }}
        className={` w-32 flex-none rounded py-3
               text-center font-mono text-sm duration-500 hover:text-gray-500 lg:w-44 lg:px-4 lg:pl-6 lg:text-left
               lg:text-base
               ${
                 companyNameBackgroundColorGreen[
                   props.ButtonOrderOfcompanyNameBackgroundColorGreen
                 ]
                   ? "scale-[1.03] text-[#3182CE]"
                   : "text-textWhite"
               }`}
      >
        {props.CompanyName}
      </button>
    );
  };

  return (
    <div className="scrollbar-hide flex w-screen flex-col items-start justify-start overflow-scroll pb-4 md:items-center md:justify-center lg:w-[220px] lg:flex-row lg:overflow-hidden lg:pb-0 ">
      {/* Left bar holder */}
      <div className="relative order-1 hidden translate-y-1 rounded bg-gray-500 lg:block lg:h-[240px] lg:w-0.5">
        {/* Animated left bar */}
        <motion.div
          animate={{ y: barPosition }}
          className="absolute h-0.5 w-10 rounded bg-heading lg:h-10 lg:w-0.5"
        />
      </div>
      {/* // ? Companies name as buttons */}
      <div className="order-1 flex flex-col space-y-1 px-4 md:px-8 lg:order-2 lg:px-0">
        <div className="flex flex-row lg:flex-col">
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={0}
            CompanyName="Freshbuyzar"
            BarPosition={48}
            BarAbovePosition={1}
            DescriptionJob="Freshbuyzar"
            CompanyNameBackgroundColorGreen={[
              true,
              false,
              false,
              false,
              false,
              false,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={1}
            CompanyName="Infloso"
            BarPosition={97}
            BarAbovePosition={129}
            DescriptionJob="Infloso"
            CompanyNameBackgroundColorGreen={[
              false,
              true,
              false,
              false,
              false,
              false,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
        </div>
        <div className="block h-0.5 rounded bg-gray-500 lg:hidden">
          <motion.div
            animate={{ x: barAbovePosition }}
            className="h-0.5 w-[128px] rounded"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};
