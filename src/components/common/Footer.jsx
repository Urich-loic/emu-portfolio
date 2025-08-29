import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  return (
    <div className="">
      <div className="xl:flex lg:flex md:block sm:block sm:text-center justify-between align-middle xl:w-6xl lg:w-6xl md:w-[100%] z-50 mx-auto border-t-1 border-t-zinc-700">
        <div className="menuItems xl:flex sm:text-center sm:block justify-between align-middle py-5">
          <NavigationMenu className="flex space-x-2 sm:text-center sm:block items-center justify-between bg-dark ">
            <ScrollLink className="text-gray-400">Home</ScrollLink>

            <ScrollLink
              className="cursor-pointer text-gray-400"
              to={"about"}
              smooth={true}
              duration={1000}
              offset={-70}
            >
              About
            </ScrollLink>

            <ScrollLink
              className="cursor-pointer text-gray-400"
              to={"project"}
              smooth={true}
              duration={1000}
              offset={-70}
            >
              Projects
            </ScrollLink>

            <ScrollLink className="text-gray-400">Blog</ScrollLink>

            <ScrollLink className="text-gray-400">Contact</ScrollLink>
          </NavigationMenu>
        </div>
        <div className="copyRight xl:text-right lg:text-right md:text-center sm:text-center w-[100%]">
          <p className="text-gray-400 py-5">
            © 2025 Engama Michel. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
