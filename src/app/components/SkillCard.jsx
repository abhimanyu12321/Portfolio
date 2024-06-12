"use client";
import Image from "next/image";
import React from "react";
import {
  ReactOriginal,
  NextjsOriginal,
  JavascriptOriginal,
  MaterialuiOriginal,
  NodejsOriginal,
  MysqlOriginal,
  MongodbOriginal,
  PythonOriginal,
  GithubOriginal,
  GitOriginal,
  FigmaOriginal,
  TypescriptOriginal,
  ReduxOriginal,
  BootstrapOriginal,
  CplusplusOriginal,
  CsharpOriginal,
  Css3Original,
  GraphqlPlain,
  SqldeveloperOriginal,
  JiraOriginal,
  TailwindcssOriginal,
  ExpressOriginal,
  SlackPlain,
  PostmanOriginal,
  Html5Original,
  COriginal,
  PrismaOriginal,
} from "devicons-react";
import { motion } from "framer-motion";

const SkillCard = ({ title, skills }) => {
  return (
    <div className="flex h-full w-[100%] flex-col items-center sm:items-start justify-center gap-3 rounded-[5px] bg-[#18191E] p-[20px]">
      <div className="text-lg sm:text-2xl font-bold">{title}</div>
      <div className="grid grid-cols-2 place-items-center items-start flex-row flex-wrap sm:items-center justify-start gap-3 sm:flex md:gap-5">
        {skills?.map((skill, i) => (
          <motion.div
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
              delay: i / 10,
            }}
            key={i}
          >
            <SkillCardBlock icon={skill.icon} name={skill.name} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;

// Skill Block component

const SkillCardBlock = ({ icon, name }) => {
  let IconComponent = null;
  switch (icon) {
    case "ReactOriginal":
      IconComponent = ReactOriginal;
      break;

    case "COriginal":
      IconComponent = COriginal;
      break;
    case "NextjsOriginal":
      IconComponent = NextjsOriginal;
      break;

    case "PostmanOriginal":
      IconComponent = PostmanOriginal;
      break;
    case "ReduxOriginal":
      IconComponent = ReduxOriginal;
      break;
    case "Css3Original":
      IconComponent = Css3Original;
      break;
    case "TailwindcssOriginal":
      IconComponent = TailwindcssOriginal;
      break;
    case "PrismaOriginal":
      IconComponent = PrismaOriginal;
      break;
    case "FigmaOriginal":
      IconComponent = FigmaOriginal;
      break;
    case "BootstrapOriginal":
      IconComponent = BootstrapOriginal;
      break;
    case "JavascriptOriginal":
      IconComponent = JavascriptOriginal;
      break;
    case "MaterialuiOriginal":
      IconComponent = MaterialuiOriginal;
      break;
    case "NodejsOriginal":
      IconComponent = NodejsOriginal;
      break;
    case "ExpressOriginal":
      IconComponent = ExpressOriginal;
      break;

    case "MysqlOriginal":
      IconComponent = MysqlOriginal;
      break;

    case "MongodbOriginal":
      IconComponent = MongodbOriginal;
      break;

    case "PythonOriginal":
      IconComponent = PythonOriginal;
      break;

    case "CplusplusOriginal":
      IconComponent = CplusplusOriginal;
      break;
    case "CsharpOriginal":
      IconComponent = CsharpOriginal;
      break;
    case "SqldeveloperOriginal":
      IconComponent = SqldeveloperOriginal;
      break;
    case "GraphqlPlain":
      IconComponent = GraphqlPlain;
      break;
    case "GithubOriginal":
      IconComponent = GithubOriginal;
      break;
      break;
    case "GitOriginal":
      IconComponent = GitOriginal;
      break;
    case "JiraOriginal":
      IconComponent = JiraOriginal;
      break;
    case "Html5Original":
      IconComponent = Html5Original;
      break;
    case "TypescriptOriginal":
      IconComponent = TypescriptOriginal;
      break;
    default:
      break;
  }
  return (
    <div className="flex cursor-pointer flex-row items-center justify-evenly gap-3 rounded-md px-4 py-3 transition-all duration-150 ease-in-out hover:bg-gray-800 md:gap-4">
      {IconComponent ? (
        <div>
          <IconComponent className="scale-[150%]" />
        </div>
      ) : (
        <Image
          src={"/skill.png"}
          alt="skill"
          width={20}
          height={20}
          className="-mr-1"
        />
      )}
      <div className="text-sm sm:text-base">{name}</div>
    </div>
  );
};
