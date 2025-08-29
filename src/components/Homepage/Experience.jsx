import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Experience() {
  return (
    <div className="about experience bg-[#191e29] text-white xl:py-27 lg:py-27 md:py-27 sm:py-18 xs:py-18 px-3">
      <div className="experienceWrapper flex sm:flex-xol space-x-3  flex-col">
        <div className="padding_class flex xl:flex-row lg:flex-row md:flex-row sm:flex-col border-b-2 border-b-zinc-700 pb-10 space-x-5">
          <div className="title">
            <span>My Resume</span>
            <h2 className="xl:text-5xl py-7 lg:text-3xl md:text-3xl sm:text-3xl text-3xl">
              All over my Personal details find here
            </h2>
          </div>
          <div className="description pt-10">
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
        <div className="padding_class profileDetail flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col gap-10 pt-18">
          <div className="tabs flex xl:flex-col lg:flex-col md:flex-col sm:flex-col xl:w-[15%] lg:w-[15%] md:w-[15%] xs:w-[100%] space-y-2">
            <Button variant="outline" className="px-3 text-black ">
              Skills
            </Button>

            <Button variant="outline" className="px-3 text-black">
              Experience
            </Button>

            <Button variant="outline" className="px-3 text-black">
              Edication
            </Button>
          </div>
          <div className="tabs col-span-2 xl:w-[75%] lg:w-[75%] md:w-[75%] sm:w-[100%] space-y-3">
            <div className="heading grid-cols-2 space-x-1 xl:w-[100%]">
              Skills
            </div>

            <div className="skillContainer xl:w-[100%] grid xl:grid-cols-2 sm:grid-cols-1 gap-5 pt-3">
              <div className="skillItem border-1 border-zinc-700 p-5 rounded-lg">
                <h3 className="text-2xl">Web Development</h3>
                <p className="pt-3 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, ducimus error. Temporibus maxime veritatis, ab nemo
                  quod provident delectus, tempore explicabo ducimus iure
                  commodi, itaque aliquid. Nisi voluptatem natus corporis.
                </p>
              </div>

              <div className="skillItem border-1 border-zinc-700 p-5 rounded-lg">
                <h3 className="text-2xl">Web Development</h3>
                <p className="pt-3 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, ducimus error. Temporibus maxime veritatis, ab nemo
                  quod provident delectus, tempore explicabo ducimus iure
                  commodi, itaque aliquid. Nisi voluptatem natus corporis.
                </p>
              </div>

              <div className="skillItem border-1 border-zinc-700 p-5 rounded-lg">
                <h3 className="text-2xl">Web Development</h3>
                <p className="pt-3 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, ducimus error. Temporibus maxime veritatis, ab nemo
                  quod provident delectus, tempore explicabo ducimus iure
                  commodi, itaque aliquid. Nisi voluptatem natus corporis.
                </p>
              </div>

              <div className="skillItem border-1 border-zinc-700 p-5 rounded-lg">
                <h3 className="text-2xl">Web Development</h3>
                <p className="pt-3 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, ducimus error. Temporibus maxime veritatis, ab nemo
                  quod provident delectus, tempore explicabo ducimus iure
                  commodi, itaque aliquid. Nisi voluptatem natus corporis.
                </p>
              </div>

              <div className="skillItem border-1 border-zinc-700 p-5 rounded-lg">
                <h3 className="text-2xl">Web Development</h3>
                <p className="pt-3 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, ducimus error. Temporibus maxime veritatis, ab nemo
                  quod provident delectus, tempore explicabo ducimus iure
                  commodi, itaque aliquid. Nisi voluptatem natus corporis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
