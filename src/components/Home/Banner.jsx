import React from "react";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="screen-width p-20 bg-gray-100 dark:bg-transparent ">
      <h3 className="eyebrow text-center ">Open Source</h3>
      <h3 className="heading-1 w-fit mx-auto mt-2">Explore project</h3>
      <div className=" flex gap-3 justify-between pt-10 md:justify-start lg:justify-center">
        <Button> Option 1 </Button>
        <Button variant="outline"> Option 2</Button>
      </div>
    </div>
  );
};

export default Banner;
