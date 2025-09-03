import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";


export default function Header() {
  return (
    <div className="fixed left-[50%] transform  translate-x-[-50%] t-10 xl:w-6xl lg:w-6xl md:w-3xl sm:w-2xl z-50 mx-auto">
      <NavigationMenu className="flex items-center justify-between p-4 bg-dark text-white">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <NavLink to={"/"}>
              <div className="w-[60px] h-[60px] border-2 bg-gray-300 border-gray-300 rounded-full">
                <img src="favicon.png" alt="" />
              </div>
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className="flex items-center space-x-12 bg-gray-50/10 text-white px-7 py-3 rounded-2xl">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <NavLink to={"/"}>Home</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <ScrollLink
            className="cursor-pointer"
            to={"about"}
            smooth={"true"}
            duration={1000}
            offset={-70}
          >
            About
          </ScrollLink>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="projects" smooth={"true"} duration={500}>
                Projects
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="blogs" smooth={"true"} duration={500}>
                Blog
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="target-section" smooth={"true"} duration={500}>
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
