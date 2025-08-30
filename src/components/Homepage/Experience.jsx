import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Background1 from "../../../public/images/Background1.png";

export default function Experience() {
  return (
    <div className="about experience text-white xl:py-10 lg:py-10 md:py-10 sm:py-10 xs:py-5 px-3">
      <div className="experienceWrapper flex sm:flex-col space-x-3  flex-col">
        <div className="padding_class flex xl:flex-row lg:flex-row md:flex-col sm:flex-col border-b-1 border-b-zinc-700 pb-10 space-x-5">
          <div className="title">
            <span>My Resume</span>
            <h2 className="xl:text-5xl py-7 lg:text-3xl md:text-3xl sm:text-3xl text-3xl">
              All over my Personal details find here
            </h2>
          </div>
          <div className="description pt-10">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              ducimus error. Temporibus maxime veritatis, ab nemo quod provident
              delectus, tempore explicabo ducimus iure commodi, itaque aliquid.
              Nisi voluptatem natus corporis.
            </p>
            <p className="pt-7">
              <Button variant="outline" className="hover:text-black">
                <Link to="#resumePDF" className="text-black">
                  Download my CV
                </Link>
              </Button>
            </p>
          </div>
        </div>
        <div className=" profileDetail flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-10">
          <div className="padding_class xl:pt-18 lg:pt-18 md:pt-18 space-y-10 flex justify-between w-[100%] xl:space-x-27 lg:space-x-27 md:space-x-18 sm:flex-col md:flex-row">
            <div className="xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] text-gray-500  heading grid-cols-2 space-x-1">
              <h2 className="text-2xl">Skills</h2>
              <div className="skillWrapper pt-6 space-y-7">
                <div className="skillCard rounded-2xl transition-all">
                  <h3 className="text-white">Skill title</h3>
                  <p className="skillDescription text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto assumenda dignissimos debitis odit corporis
                    quisquam vero deleniti consectetur numquam ducimus,
                    praesentium autem a et ipsam repellendus commodi non
                    doloribus quas?
                  </p>
                </div>

                <div className="skillCard rounded-2xl transition-all space-y-5">
                  <h3 className="text-white">Skill title</h3>
                  <p className="skillDescription text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto assumenda dignissimos debitis odit corporis
                    quisquam vero deleniti consectetur numquam ducimus,
                    praesentium autem a et ipsam repellendus commodi non
                    doloribus quas?
                  </p>
                </div>

                <div className="skillCard rounded-2xl transition-all">
                  <h3 className="text-white">Skill title</h3>
                  <p className="skillDescription text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto assumenda dignissimos debitis odit corporis
                    quisquam vero deleniti consectetur numquam ducimus,
                    praesentium autem a et ipsam repellendus commodi non
                    doloribus quas?
                  </p>
                </div>

                <div className="skillCard rounded-2xl transition-all">
                  <h3 className="text-white">Skill title</h3>
                  <p className="skillDescription text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto assumenda dignissimos debitis odit corporis
                    quisquam vero deleniti consectetur numquam ducimus,
                    praesentium autem a et ipsam repellendus commodi non
                    doloribus quas?
                  </p>
                </div>
              </div>
            </div>
            <div className="JourneyClass xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%]">
              <div className="journeyWrapper border-1 border-zinc-700 rounded-2xl p-6">
                <h2 className="pb-7 text-2xl text-gray-500 ">My Journey</h2>
                <div className="group relative flex flex-col items-start">
                  <Table className={"text-gray-500"}>
                    <TableBody className={"space-y-4"}>
                      <TableRow className="hover:bg-transparent border-none dark:bg-hover:bg-transparent cursor-pointer space-x-2 flex justify-start items-center">
                        <TableCell className="p-0 h-[50px] w-[50px] flex justify-center items-center">
                          <span className="border-1 border-zinc-700 rounded-full h-[100%] w-[100%] p-2">
                            <img
                              src={Background1}
                              alt=""
                              className="rounded-full object-cover w-[100%] h-[100%]"
                            />
                          </span>
                        </TableCell>
                        <TableCell className={" w-[210px]"}>
                          <p className="text-white">Company name</p>
                          <span>role</span>
                        </TableCell>

                        <TableCell className="text-right">
                          23/03/2025 - present
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-transparent border-none dark:bg-hover:bg-transparent cursor-pointer space-x-2 flex justify-start items-center">
                        <TableCell className="p-0 h-[50px] w-[50px] flex justify-center items-center">
                          <span className="border-1 border-zinc-700 rounded-full h-[100%] w-[100%] p-2">
                            <img
                              src={Background1}
                              alt=""
                              className="rounded-full object-cover w-[100%] h-[100%]"
                            />
                          </span>
                        </TableCell>
                        <TableCell className={" w-[210px]"}>
                          <p className="text-white">Company name</p>
                          <span>role</span>
                        </TableCell>

                        <TableCell className="text-right">
                          23/03/2025 - present
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-transparent border-none dark:bg-hover:bg-transparent cursor-pointer space-x-2 flex justify-start items-center">
                        <TableCell className="p-0 h-[50px] w-[50px] flex justify-center items-center">
                          <span className="border-1 border-zinc-700 rounded-full h-[100%] w-[100%] p-2">
                            <img
                              src={Background1}
                              alt=""
                              className="rounded-full object-cover w-[100%] h-[100%]"
                            />
                          </span>
                        </TableCell>
                        <TableCell className={" w-[210px]"}>
                          <p className="text-white">Company name</p>
                          <span>role</span>
                        </TableCell>

                        <TableCell className="text-right">
                          23/03/2025 - present
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-transparent border-none dark:bg-hover:bg-transparent cursor-pointer space-x-2 flex justify-start items-center">
                        <TableCell className="p-0 h-[50px] w-[50px] flex justify-center items-center">
                          <span className="border-1 border-zinc-700 rounded-full h-[100%] w-[100%] p-2">
                            <img
                              src={Background1}
                              alt=""
                              className="rounded-full object-cover w-[100%] h-[100%]"
                            />
                          </span>
                        </TableCell>
                        <TableCell className={" w-[210px]"}>
                          <p className="text-white">Company name</p>
                          <span>role</span>
                        </TableCell>

                        <TableCell className="text-right">
                          23/03/2025 - present
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-transparent border-none dark:bg-hover:bg-transparent cursor-pointer space-x-2 flex justify-start items-center">
                        <TableCell className="p-0 h-[50px] w-[50px] flex justify-center items-center">
                          <span className="border-1 border-zinc-700 rounded-full h-[100%] w-[100%] p-2">
                            <img
                              src={Background1}
                              alt=""
                              className="rounded-full object-cover w-[100%] h-[100%]"
                            />
                          </span>
                        </TableCell>
                        <TableCell className={" w-[210px]"}>
                          <p className="text-white">Company name</p>
                          <span>role</span>
                        </TableCell>

                        <TableCell className="text-right">
                          23/03/2025 - present
                        </TableCell>
                      </TableRow>

                      <TableRow className="hover:bg-transparent border-none dark:bg-hover:bg-transparent cursor-pointer space-x-2 flex justify-start items-center">
                        <TableCell className="w-[100%]">
                          <Button
                            variant="outline"
                            className="w-[100%] bg-zinc-800 border-none hover:text-black"
                          >
                            <Link
                              to="#resumePDF"
                              className=" text-white hover:text-black"
                            >
                              Download my CV
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
