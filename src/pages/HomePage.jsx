import React from "react";
import HeroSection from "../components/Homepage/HeroSection";
import ExpertiseArea from "../components/Homepage/ExpertiseArea";
import Project from "@/components/Homepage/Project";
import Experience from "@/components/Homepage/Experience";
import Blog from "@/components/Blog/Blog";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      {/* <ExpertiseArea /> */}
      <Experience />
      <Project />
      <Blog/>
    </div>
  );
}
