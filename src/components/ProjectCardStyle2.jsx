import React from "react";
import Background1 from "../../public/images/Background1.png";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function ProjectCardStyle2() {
  const posts = [
    {
      title: "achivemt title",
      category: "achievement categorie",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit adipisci voluptates tempore fugit sunt velit expedita quia voluptatum eaque commodi delectus perspiciatis excepturi, harum reprehenderit doloremque pariatur explicabo distinctio corporis.",
    },
    {
      title: "achivemt title",
      category: "achievement categorie",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit adipisci voluptates tempore fugit sunt velit expedita quia voluptatum eaque commodi delectus perspiciatis excepturi, harum reprehenderit doloremque pariatur explicabo distinctio corporis.",
    },
    {
      title: "achivemt title",
      category: "achievement categorie",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit adipisci voluptates tempore fugit sunt velit expedita quia voluptatum eaque commodi delectus perspiciatis excepturi, harum reprehenderit doloremque pariatur explicabo distinctio corporis.",
    },
    {
      title: "achivemt title",
      category: "achievement categorie",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit adipisci voluptates tempore fugit sunt velit expedita quia voluptatum eaque commodi delectus perspiciatis excepturi, harum reprehenderit doloremque pariatur explicabo distinctio corporis.",
    },
  ];
  return (
    <>
      <div className="projectCradStyle2 flex  gap-7 flex-wrap justify-between">
        {posts.map((post, index) => (
          <div
            key={index}
            className={`projectCard2 xl:w-[30%] lg:w-[30%] md:w-[100%] sm:w-[100%] transition-all rounded-2xl  overflow-hidden gap-5 bg-white/3 rounded-2xl p-5`}
          >
            <div className={`w-[50px] h-[50px]`}>
              <img
                src={Background1}
                alt=""
                className="w-[100%] object-cover rounded-full h-[100%]"
              />
            </div>
            <div className="textContainer">
              <div className={`projectTitle text-left w-[100%] pt-5`}>
                <Badge variant="secondary" className="bg-gray-50/10 text-white">
                  {post.category}
                </Badge>
                <h3 className="text-left text-2xl py-3 w-[100%]"> {post.title}</h3>
              </div>
              <div
                className={`projectDescription ${
                  status ? "w-[100%]" : "w-[100%] block"
                } text-left`}
              >
                <p className=" text-gray-400">{post.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="viewMore w-[100%] border-t-1 border-t-zinc-500 pt-10 mt-10">
        <Link to={"/projects"} className="text-gray-400">
          View all (5)
        </Link>
      </div>
    </>
  );
}
