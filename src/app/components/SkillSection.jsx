"use client";
import React from "react";
import { MySkills } from "../constants/MySkills";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
export default function SkillSection() {
  return (
    <section className=" sm:px-6 text-[#FAF7F2]">
      <div className="flex justify-center items-center gap-4">
        <h3 className="text-3xl font-[800] text-textWhite sm:text-5xl text-white">
          Skills
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-white"></div>
      </div>

      <div className="flex flex-col items-center justify-between gap-6  mt-8 sm:mt-12">
        {MySkills?.map((skill, i) => (
          <motion.div
            className="w-full"
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            key={i}
          >
            <SkillCard title={skill.title} skills={skill.skills} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
