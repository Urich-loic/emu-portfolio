import React from "react";
import { Badge } from "@/components/ui/badge";
export default function HeroSection() {
  return (
    <div className="bg-image text-white flex font-medium  h-72 items-center justify-center text-center flex-col xl:pt-37">
        <p><Badge variant="secondary">Emgama Michel</Badge></p>
      <h1 className="xl:text-5xl lg:text-5xl md:text-4xl sm:text-7xl sx:text-7xl">FullStack Developer</h1>
        <p className="space-x-2">
            <Badge variant="secondary">Laravel</Badge>
        <Badge variant="secondary">React js</Badge>
        <Badge variant="secondary">WordPress</Badge></p>
    </div>
  );
}
