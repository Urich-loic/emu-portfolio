import React from "react";
import { Badge } from "@/components/ui/badge";
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react";
export default function HeroSection() {
  return (
    <div className="bg-image px-3 text-white flex font-medium  h-screen items-center justify-center text-center flex-col h-[100vh]">
      <p className="space-x-2">
        <Badge variant="secondary">Hi there 👋🏾</Badge>
        <Badge variant="secondary">I'm</Badge>
        <Badge variant="secondary">Emgama Michel</Badge>
      </p>
      <h1 className="xl:text-7xl py-7 lg:text-5xl md:text-4xl sm:text-5xl text-5xl text-zinc-200">
        FullStack Developer
      </h1>
      <p className="space-x-2">
        <Badge
          variant="secondary"
          className="bg-blue-500 text-white dark:bg-blue-600"
        >
          <CheckIcon />
          Laravel
        </Badge>
        <Badge
          variant="secondary"
          className="bg-blue-500 text-white dark:bg-blue-600"
        >
          <CheckIcon />
          React js
        </Badge>
        <Badge
          variant="secondary"
          className="bg-blue-500 text-white dark:bg-blue-600"
        >
          <CheckIcon />
          WordPress
        </Badge>
        <Badge
          variant="secondary"
          className="bg-blue-500 text-white dark:bg-blue-600"
        >
          <CheckIcon />
          Flutter
        </Badge>
      </p>
      <p className="pt-7 text-zinc-400 weight-100">
        I turn ideas into clean, functional, and elegant web experiences.😁
      </p>
    </div>
  );
}
