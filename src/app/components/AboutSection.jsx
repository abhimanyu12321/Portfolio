"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.Sc(Honors) in Computer Science</li>
        <li>Keshav Mahavidalaya , Delhi University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend developer by HackerRank</li>
        <li>JavaScript Intermediate By HackerRank</li>
        <li>Responsive Web Design By freeCodeCamp</li>
        <li>JavaScript Algorithms and Data Structures By freeCodeCamp</li>
        <li>Frontend Development Libraries By freeCodeCamp</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-4">
      <div className="flex justify-center items-center gap-4">
        <h3 className="text-3xl font-[800] text-textWhite sm:text-5xl ">
          About Me
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-white"></div>
      </div>

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="logo"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg mb-4">
            Hi Everyone, I am{" "}
            <span className="text-primary-500">Abhimanyu</span> from Rajasthan,
            India.
          </p>
          <p className="text-base lg:text-lg text-[#ADB7BE]">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, TypeScript, React, Redux, Node.js, Express,
            PostgreSQL, MongoDB HTML, CSS, and Git. I am a quick learner and I
            am always looking to expand my knowledge and skill set. I am a team
            player and I am excited to work with others to create amazing
            applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
