import React from "react";
import ThemeToggle from "./elements/ThemeToggle";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="screen-width px-10 py-4  bg-gray-50 dark:bg-transparent ">
      <div className="flex justify-between items-center w-full ">
        <Link
          href="/"
          className="h-[1.2rem] w-[1.2rem] cursor-pointer transition-all  text-black dark:text-white font-semibold "
        >
          Hyper<span className="font-bold">LOOM</span>
        </Link>
        <div className=" text-gray-400 dark:text-gray-300 text-sm  ">
          Just a simple Footer @{new Date().getFullYear()}
        </div>
        <div className="flex gap-2">
          <div className="">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
