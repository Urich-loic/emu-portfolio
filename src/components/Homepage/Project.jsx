import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Background1 from "../../../public/images/Background1.png";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import ProjectCard from "../ProjectCard";
import ProjectList from "../ProjectList";

export default function Project() {
  const [status, setStatus] = useState(false);
  return (
    <div id="project" className="padding_class experience bg-background text-white xl:py-27 lg:py-27 md:py-27 sm:py-18 px-3">
      <div className="experienceWrapper flex sm:flex-xol space-x-3  flex-col">
        <div className="flex flex-col text-center pb-10 ">
          <div className="title pt-7">
            <Badge variant="secondary" className="bg-gray-50/10 text-white">
              Achievement
            </Badge>
            <h2 className="xl:text-5xl lg:text-3xl md:text-3xl sm:text-3xl text-3xl">
              Accomplished projects
            </h2>
          </div>
          <div className="description pt-5">
            <p className="w-3/4 mx-auto text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              ducimus error. Temporibus maxime veritatis, ab nemo quod provident
              delectus, tempore explicabo ducimus iure commodi, itaque aliquid.
              Nisi voluptatem natus corporis.
            </p>
          </div>
          <div className="blog_display_type flex justify-center xl:pt-27 lg:pt-27 md:pt-27 sm:pt-18">
            <div className="flex items-center space-x-5">
              <Switch
                id="airplane-mode"               checked={status}
                onCheckedChange={() => setStatus(!status)}
              />
              <label htmlFor="airplane-mode">Display Mode</label>
            </div>
          </div>
          <div className="projectWrapper xl:py-27 lg:py-27 md:py-27 sm:py-18 padding_class">
            <div className="projectInnerWrapper xl:flex xl:flex-wrap lg:flex-wrap md:flex-wrap lg:flex md:flex sm:block space-x-5 space-y-5">
            {status? <ProjectCard/>:<ProjectList/>
             }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
