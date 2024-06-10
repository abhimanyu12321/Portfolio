import React from "react";
import { MySkills } from "../constants/MySkills";
import SkillCard from "./SkillCard";

export default function SkillSection() {
  return (
    <section id="skills" className="mt-24 sm:py-[80px] sm:px-6 text-[#FAF7F2]">
      <div className="flex justify-center items-center gap-4">
        <h3 className="text-3xl font-[800] text-textWhite sm:text-5xl text-white">
          Skills
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-white"></div>
      </div>

      <div className="flex flex-col items-center justify-between gap-6 py-6 mt-20">
        {MySkills?.map((skill, i) => (
          <div className="w-full" key={i}>
            <SkillCard title={skill.title} skills={skill.skills} />
          </div>
        ))}
      </div>
    </section>
  );
}
