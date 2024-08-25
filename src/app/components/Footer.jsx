import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="z-10 text-white bg-[#121212] bg-opacity-100 ">
      <div className="container px-12 py-2 sm:py-4 flex justify-between items-center">
        <Link href={"#home"}>
          <Image src="/logo1.png" alt="logo" width={40} height={40} />
        </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
