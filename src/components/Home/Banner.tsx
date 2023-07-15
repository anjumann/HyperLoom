import React from "react";
import { Button } from "../ui/button";
import { GithubIcon } from "lucide-react";

const Banner = () => {
  return (
    <div className="screen-width p-20 bg-gray-100 dark:bg-transparent ">
      <h3 className="eyebrow text-center ">Open Source</h3>
      <h3 className="heading-1 text-center w-full mx-auto mt-2">Explore project</h3>
      <div className=" flex gap-3 pt-10 justify-center">
        <Button variant="outline"  > <GithubIcon size={24} className="mr-2" /> Github</Button>
      </div>
    </div>
  );
};

export default Banner;
