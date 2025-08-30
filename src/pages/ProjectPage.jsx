import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, NavLink, Outlet } from "react-router-dom";
import Background1 from "../../public/images/Background1.png";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import ProjectList from "@/components/ProjectList";
import ProjectCardStyle2 from "@/components/ProjectCardStyle2";

export default function ProjectPage() {
  return (
    <div className="projectsPge padding_class text-white xl:py-27 px-3">
      <div className="experienceWrapper flex sm:flex-xol space-x-3  flex-col">
        <div className="padding_class lg:py-27 md:py-27 sm:py-18 xs:py-18 flex xl:flex-row lg:flex-row md:flex-col sm:flex-col border-b-1 border-b-zinc-700 pb-10 space-x-5">
          <div className="title">
            <Badge variant="secondary" className="bg-gray-50/10 text-white">
              Engama Michel
            </Badge>
            <h2 className="xl:text-5xl py-7 lg:text-3xl md:text-3xl sm:text-3xl text-3xl">
              All Of My Carrier Journey Achievement
            </h2>
          </div>
          <div className="description xl:pt-12 lg:pt-12 md:pt-7 sm:pt-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              ducimus error. Temporibus maxime veritatis, ab nemo quod provident
              delectus, tempore explicabo ducimus iure commodi, itaque aliquid.
              Nisi voluptatem natus corporis.
            </p>
            <p className="pt-7">
              <Button variant="outline" className="">
                <Link to="#resumePDF" className="text-black">
                  Download my CV
                </Link>
              </Button>
            </p>
          </div>
        </div>
        <div className="navLinks flex gap-2 w-[100%] pt-5 text-gray-400">
          <Link to="/projects/side-project" className="text-gray-400">
            Side project
          </Link>{" "}
          |
          <NavLink to="/projects" className="text-gray-400">
            Carrier project
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
