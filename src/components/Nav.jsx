import React from "react";
import ThemeToggle from "./elements/ThemeToggle";
import { ImageIcon } from "lucide-react";
import CenterMenu from "./elements/CenterMenu";
import NavDropDown from "./elements/NavDropDown";

const Nav = () => {
  return (
    <div className="screen-width px-10 py-4 dark:bg-transparent ">
      <div className="flex justify-between items-center w-full ">
        <div className="logo">
          <ImageIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black dark:text-white" />
        </div>
        <div className="centermenu hidden md:block">
          <CenterMenu />
        </div>
        <div className="flex gap-2">
          <div className="">
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <NavDropDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
