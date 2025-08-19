import React from "react";
import { Badge } from "@/components/ui/badge";
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"
export default function HeroSection() {
  return (
    <div className="bg-image px-3 text-white flex font-medium  h-72 items-center justify-center text-center flex-col xl:pt-37">
        <p className="space-x-2"><Badge variant="secondary">Hi there 👋🏾</Badge><Badge variant="secondary">I'm</Badge><Badge variant="secondary">Emgama Michel</Badge></p>
      <h1 className="xl:text-7xl py-3 lg:text-5xl md:text-4xl sm:text-5xl text-5xl">FullStack Developer</h1>
        <p className="space-x-2">
            <Badge  variant="secondary"
          className="bg-blue-500 text-white dark:bg-blue-600"> <CheckIcon />Laravel</Badge>
        <Badge  variant="secondary"
          className="bg-blue-500 text-white dark:bg-blue-600"> <CheckIcon />React js</Badge>
        <Badge  variant="secondary"
          className="bg-blue-500 text-white dark:bg-blue-600"> <CheckIcon />WordPress</Badge></p>
    </div>
  );
}
