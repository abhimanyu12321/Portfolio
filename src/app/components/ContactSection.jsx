"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section id="contact" className=" my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 flex flex-col justify-center items-center">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s <span className="text-primary-500">Connect</span>
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4 justify-center items-center">
          <Link href="https://github.com/abhimanyu12321" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/abhimanyu12321"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abhimanyumajoka9087@gmail.com"
            target="_blank"
          >
            <Image
              src={EmailIcon}
              alt="Email Icon"
              className="bg-white h-10 w-10 rounded-lg ml-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
