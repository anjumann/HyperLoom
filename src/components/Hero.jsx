import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

const Hero = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto mt-4 h-[70vh]  flex items-center">
      <div className="flex flex-col md:flex-row items-center ">
        <div className=" w-11/12 md:w-1/2  space-y-10 text-center md:text-left lg:text-center ">
          <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold leading-9  ">
            <Balancer>Lorem ipsum dolor sit.</Balancer>
          </h1>
          <h4 className="">
            <Balancer>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              blanditiis aspernatur voluptate recusandae inventore? Quisquam,
              voluptatum. Quisquam, voluptatum.
            </Balancer>
          </h4>
          <div className=" flex gap-3 justify-center md:justify-start lg:justify-center">
            <Button > Option 1 </Button>
            <Button variant="outline" >
              {" "}
              Option 2
            </Button>
          </div>
        </div>
        <div className="w-11/12 md:w-1/2  hidden md:flex items-center justify-center ">
          <Image src="/heroImage.svg" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
