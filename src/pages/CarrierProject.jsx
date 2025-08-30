import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

import Background1 from "../../public/images/Background1.png";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import ProjectList from "@/components/ProjectList";
import ProjectCardStyle2 from "@/components/ProjectCardStyle2";
export default function CarrierProject() {
  const [status, setStatus] = useState(false);

  return (
    <div>
      <div className="padding_class profileDetail flex xl:flex-col lg:flex-col md:flex-col sm:flex-col xs:flex-col gap-10 pt-18">
        <div className="display_type flex justify-start">
          <div className="flex items-center space-x-5">
            <Switch
              id="airplane-mode"
              checked={status}
              onCheckedChange={() => setStatus(!status)}
            />
            <label htmlFor="airplane-mode">Display Mode</label>
          </div>
        </div>
        <div className=" flex justify-start">
          <div className="flex items-center space-x-5">
            <h3 className="text-3xl text-gray-400">Carrier projects</h3>
          </div>
        </div>
        <div className="projectWrapper xl:pb-27 lg:pb-27 md:pb-27 sm:pb-18 padding_class">
          <div className="projectInnerWrapper xl:flex xl:flex-wrap lg:flex-wrap md:flex-wrap lg:flex md:flex sm:block space-x-5 space-y-5">
            {status ? <ProjectCardStyle2 /> : <ProjectList />}
          </div>
        </div>
      </div>
    </div>
  );
}
