import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

const Hero = () => {
  return (
    <div className="screen-width p-12 h-[70vh] flex items-center bg-gray-50 dark:bg-transparent">
      <div className="flex flex-col md:flex-row w-full mx-auto justify-between gap-x-20 items-center ">
        <div className=" w-11/12 md:w-1/2   space-y-10 text-center md:text-left lg:text-center ">
          <h1 className=" heading-1">
            <Balancer>Lorem ipsum dolor sit.</Balancer>
          </h1>
          <h4 className="subheadig-1">
            <Balancer>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            </Balancer>
          </h4>
          <div className=" flex gap-3 justify-center md:justify-start lg:justify-center w-full">
            <Button className='w-full' > Option 1 </Button>
            <Button className='w-full' variant="outline" >
              {" "}
              Option 2
            </Button>
          </div>
        </div>
        <div className="w-11/12 md:w-1/2  hidden md:flex items-center justify-center ">
          <Image src="/heroImage.svg" width={300} height={300} alt='Hero Image' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
