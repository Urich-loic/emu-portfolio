import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Background1 from "../../../public/images/Background1.png";
import { Badge } from "@/components/ui/badge";

export default function Project() {
  return (
    <div className="experience bg-background text-white xl:py-27 lg:py-27 md:py-27 sm:py-18 px-3">
      <div className="experienceWrapper flex sm:flex-xol space-x-3  flex-col">
        <div className="flex flex-col text-center border-b-2 border-b-zinc-700 pb-10 ">
          <div className="title pt-7">
             <Badge variant="secondary" className="bg-gray-50/10 text-white">
                    Achievement
                  </Badge>
            <h2 className="xl:text-5xl lg:text-3xl md:text-3xl sm:text-3xl text-3xl">
              All over my Personal details find here
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
          <div className="blog_display_type">
            <span className="Icons_list"></span>
            <span className="Icons_grid"></span>
          </div>
          <div className="projectWrapper xl:py-27 lg:py-27 md:py-27 sm:py-18 padding_class">
            <div className="projectInnerWrapper flex space-x-5 space-y-5">
              <div className="projectCard rounded-2xl overflow-hidden">
                <div className="projectImage">
                  <img src={Background1} alt="" />
                </div>
                <div className="projectTitle text-left pt-5">
                  <Badge variant="secondary" className="bg-gray-50/10 text-white">
                    Category
                  </Badge>
                  <h3 className="text-left text-2xl py-3">Project one</h3>
                </div>
                <div className="projectDescription text-left">
                  <p className=" text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odit adipisci voluptates tempore fugit sunt velit expedita
                    quia voluptatum eaque commodi delectus perspiciatis
                    excepturi, harum reprehenderit doloremque pariatur explicabo
                    distinctio corporis.
                  </p>
                </div>
              </div>
              <div className="projectCard rounded-2xl overflow-hidden">
                <div className="projectImage">
                  <img src={Background1} alt="" />
                </div>
                <div className="projectTitle text-left pt-5">
                  <Badge variant="secondary" className="bg-gray-50/10 text-white">Category</Badge>
                  <h3 className="text-left text-2xl py-3">Project one</h3>
                </div>
                <div className="projectDescription ">
                  <p className=" text-gray-400 text-left">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odit adipisci voluptates tempore fugit sunt velit expedita
                    quia voluptatum eaque commodi delectus perspiciatis
                    excepturi, harum reprehenderit doloremque pariatur explicabo
                    distinctio corporis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
