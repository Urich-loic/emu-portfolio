import React from "react";
import Background1 from "../../public/images/Background1.png";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";

export default function ProjectList() {
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
    }
  ];

  console.log(posts);
  return (
    <>
      {posts.map((post, index) => (
        <div
          key={index}
          className={`projectCard w-[100%] flex border-b-1 transition-all border-b-zinc-700 pb-10 overflow-hidden space-x-10`}
        >
          <div
            className={`projectImage w-[55%] transition-all rounded-2xl overflow-hidden`}
          >
            <img src={Background1} alt=""  className="object-cover w-[100%]"/>
          </div>
          <div className="textContainer">
            <div
              className={`projectTitle text-left w-[100%] transition-all block pt-5`}
            >
              <Badge variant="secondary" className="bg-gray-50/10 text-white">
                {post.category}
              </Badge>
              <h3 className="text-left text-2xl py-3">{post.title}</h3>
            </div>
            <div className={`projectDescription w-[100%] block text-left`}>
              <p className=" text-gray-400 text-sm font-400">
                {post.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="viewMore w-[100%] pt-10 mt-10">
        <Link to={"/projects"} className="text-gray-400">
          View all (5)
        </Link>
      </div>
    </>
  );
}
