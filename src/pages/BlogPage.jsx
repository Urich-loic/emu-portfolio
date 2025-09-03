import Blog from "@/components/Blog/Blog";
import React from "react";
import { Button } from "@/components/ui/button";
import { Link, NavLink, Outlet } from "react-router-dom";
import Background1 from "../../public/images/Background1.png";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export default function BlogPage() {
  return (
    <div className="projectsPge padding_class text-white xl:py-27 px-3">
      <div className="experienceWrapper flex sm:flex-xol space-x-3  flex-col">
        <div className="padding_class lg:py-27 md:py-27 sm:py-18 xs:py-18 flex xl:flex-row lg:flex-row md:flex-col sm:flex-col border-b-1 border-b-zinc-700 pb-10 space-x-5">
          <div className="title xl:w-[30%] sm:w-[100%]">
            <Badge variant="secondary" className="bg-gray-50/10 text-white">
              Engama Michel
            </Badge>
            <h2 className="xl:text-5xl py-7 lg:text-3xl md:text-3xl sm:text-3xl text-3xl">
             Insights & Expertise
            </h2>
          </div>
          <div className="description xl:pt-12 lg:pt-12 md:pt-7 sm:pt-5 xl:w-[70%] sm:w-[100%]">
            <p>
              Through my blog, I share practical insights, tutorials, and reflections on web development, WordPress, React, and Laravel. Each article is designed to help entrepreneurs, businesses, and fellow developers better understand the digital landscape and leverage technology to achieve measurable results.
            </p>
          
          </div>
        </div>
      </div>
      <div className="experienceWrapper xl:py-27 lg:py-27 md:py-27 sm:py-18 padding_class flex">
        <div className="sideBar projectWrapper xl:w-[20%] sm:w-[100%]">

        </div>
            <div className="projectInnerWrapper xl:flex xl:flex-wrap lg:flex-wrap md:flex-wrap lg:flex md:flex sm:block space-x-5 space-y-5 xl:w-[80%] sm:w-[100%]">
              <Outlet/>
            </div>
            </div>
    </div>
  );
}
