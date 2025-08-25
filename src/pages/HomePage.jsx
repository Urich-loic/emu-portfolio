import React from "react";
import HeroSection from "../components/Homepage/HeroSection";
import ExpertiseArea from "../components/Homepage/ExpertiseArea";
import TheyTrustMe from "@/components/Homepage/TheyTrustMe";
import Project from "@/components/Homepage/Project";
import Experience from "@/components/Homepage/Experience";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <TheyTrustMe />
      <ExpertiseArea />
      <Experience />
      <Project />
    </div>
  );
}
