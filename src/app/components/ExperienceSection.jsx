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
    <section className="py-[80px] sm:px-6 text-white" id="experience">
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
      <div className="mt-16 sm:mt-20 flex flex-col items-center justify-between py-6">
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
      case "GoCareers":
        return <GoCareers />;
      case "Epoch":
        return <Epoch />;
      case "PhysicsWallah":
        return <PW />;
    }
  };
  const [DescriptionJob, setDescriptionJob] = React.useState("GoCareers");
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

//   GoCareers component
function GoCareers() {
  const tasks = [
    {
      text: "Single-handedly driving the development of a cutting-edge job board platform with a major focus on enhancing UX, resulting in a 40% increase in user engagement.",
    },
    {
      text: "Engineered a complete codebase migration from React.js to Next.js, enhancing optimization and performance metrics by a notable 30%, revolutionizing user experience and website speed for 100k+ monthly traffic.",
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
              SDE Intern
            </span>
            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-[#3182CE] sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span>Go Careers</span>

              {/* Date */}
              <span>Apr 2024 - Present</span>
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
                Technologies used: React.js, Next.js, Redux, React Query,
                TypeScript, Tailwind CSS, and Shadcn UI.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

// Epoch component
function Epoch() {
  const tasks = [
    {
      text: "Developed an AI-driven trading platform for streamlined stock analysis, integrating a financial chatbot and a comprehensive stock dashboard. Focused on enhancing UX with real-time data updates and interactive features. Delivered a robust, scalable solution meeting the complex needs of stock traders.",
    },
    {
      text: "Successfully migrated the codebase from pages router to app router, optimizing the UI and achieving a 20% performance increase.",
    },
    {
      text: "Led a cross-functional team of 3 members, fostering efficient collaboration and successfully guiding the team towards achieving project objectives.",
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
              Full Stack Engineer Intern
            </span>
            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-[#3182CE] sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span>Epoch - (California-US)</span>

              {/* Date */}
              <span>Jan 2024 - Apr 2024</span>
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
                Query, and Web Socket.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

// PW component

function PW() {
  const tasks = [
    {
      text: "Effectively executed social marketing strategies to boost awareness of Physics Wallah's educational programs, resulting in increased student engagement and course sign-ups.",
    },
    {
      text: "Promoted PW Skills, GATE and UPSC courses, enhancing brand visibility and student enrollment.",
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
              Campus Ambassador
            </span>
            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-[#3182CE] sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span>Physics Wallah</span>

              {/* Date */}
              <span>Feb 2024 - Present</span>
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
            CompanyName="Go Careers"
            BarPosition={48}
            BarAbovePosition={1}
            DescriptionJob="GoCareers"
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
            CompanyName="Epoch"
            BarPosition={97}
            BarAbovePosition={129}
            DescriptionJob="Epoch"
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
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={2}
            CompanyName="Physics Wallah"
            BarPosition={145}
            BarAbovePosition={257}
            DescriptionJob="PhysicsWallah"
            CompanyNameBackgroundColorGreen={[
              false,
              false,
              true,
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
