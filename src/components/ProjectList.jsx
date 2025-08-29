import React from "react";
import Background1 from "../../public/images/Background1.png";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";


export default function ProjectList() {
  return (
    <div
      className={`projectCard w-[100%] flex border-b-1 transition-all border-b-zinc-700 pb-10 overflow-hidden space-x-10`}
    >
      <div
        className={`projectImage w-[55%] transition-all rounded-2xl overflow-hidden`}
      >
        <img src={Background1} alt="" />
      </div>
      <div className="textContainer">
        <div
          className={`projectTitle text-left w-[100%] transition-all block pt-5`}
        >
          <Badge variant="secondary" className="bg-gray-50/10 text-white">
            Category
          </Badge>
          <h3 className="text-left text-2xl py-3">Project one</h3>
        </div>
        <div
          className={`projectDescription w-[100%] block text-left`}
        >
          <p className=" text-gray-400 text-sm font-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            adipisci voluptates tempore fugit sunt velit expedita quia
            voluptatum eaque commodi delectus perspiciatis excepturi, harum
            reprehenderit doloremque pariatur explicabo distinctio corporis.
          </p>
        </div>
      </div>
    </div>
  );
}
