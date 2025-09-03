import React from "react";
import HeroSection from "../components/Homepage/HeroSection";
import ExpertiseArea from "../components/Homepage/ExpertiseArea";
import Project from "@/components/Homepage/Project";
import Experience from "@/components/Homepage/Experience";
import Blog from "@/components/Blog/Blog";
import BlogList from "@/components/Blog/BlogList";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      {/* <ExpertiseArea /> */}
      <Experience />
      <Project />
      <div className="blogSection experienceWrapper pb-27">
        <h2 className="text-4xl text-white pb-10"> Insights & Expertise</h2>
        <BlogList />
      </div>
    </div>
  );
}
