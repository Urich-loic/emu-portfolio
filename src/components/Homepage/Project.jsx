import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Project() {
  return (
    <div className="experience bg-background text-white py-10 px-3">
      <div className="experienceWrapper flex sm:flex-xol space-x-3  flex-col">
        <div className="flex flex-col text-center border-b-2 border-b-zinc-700 pb-10 ">
          <div className="title pt-7">
            <span>Achievement</span>
            <h2 className="xl:text-5xl lg:text-3xl md:text-3xl sm:text-3xl text-3xl">
              All over my Personal details find here
            </h2>
          </div>
          <div className="description pt-10">
            <p className="w-3/4 mx-auto text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              ducimus error. Temporibus maxime veritatis, ab nemo quod provident
              delectus, tempore explicabo ducimus iure commodi, itaque aliquid.
              Nisi voluptatem natus corporis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
