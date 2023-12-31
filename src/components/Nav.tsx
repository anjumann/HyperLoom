import React from "react";
import ThemeToggle from "./elements/ThemeToggle";
import CenterMenu from "./elements/CenterMenu";
import NavDropDown from "./elements/NavDropDown";
import Link from "next/link";
import LoginBtn from './elements/LoginBtn';


const Nav = () => {
    return (
      <div className="screen-width  py-4 dark:bg-transparent ">
        <div className="flex justify-between items-center w-full ">
          <div className="">
            <Link href='/'  className="h-[1.2rem] w-[1.2rem] cursor-pointer transition-all  text-black dark:text-white font-semibold " >
              Hyper<span className="font-bold" >LOOM</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <CenterMenu />
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2">
              <ThemeToggle />
              <LoginBtn />
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
  