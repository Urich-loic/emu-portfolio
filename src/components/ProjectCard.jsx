import React from "react";
import Background1 from "../../public/images/Background1.png";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Posts from '../datas/posts.json';

export default function ProjectCard() {
  const fourPosts = Posts.slice(0, 4);

  return (
    <>
      {fourPosts.map((post, index) => (
        <div
          key={index}
          className={`projectCard w-[48%] transition-all rounded-2xl  overflow-hidden space-x-10 `}
        >
          <div className={`projectImage w-[100%]`}>
            <img src={post.img} alt="" />
          </div>
          <div className="textContainer">
            <div className={`projectTitle text-left w-[48%] pt-5`}>
              <Badge variant="secondary" className="bg-gray-50/10 text-white">
                {post.category}
              </Badge>
              <h3 className="text-left text-2xl py-3"> {post.title}</h3>
            </div>
            <div
              className={`projectDescription ${
                status ? "w-[100%]" : "w-[100%] block"
              } text-left`}
            >
              <p className=" text-gray-400 text-sm">{post.description}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="viewMore w-[100%] border-t-1 border-t-zinc-500 pt-10 mt-10">
        <Link to={"/projects"} className="text-gray-400">
          View all ({Posts.length})
        </Link>
      </div>
    </>
  );
}
