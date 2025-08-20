import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="fixed left-[50%] transform  translate-x-[-50%] t-10 w-6xl z-50 mx-auto">
      <NavigationMenu className="flex items-center justify-between p-4 bg-dark text-white">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <NavLink to={"/"}>Engama</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className="flex items-center space-x-12 bg-gray-50/10 text-white px-7 py-3 rounded-2xl">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <NavLink to={"/"}>Home</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <NavLink to={"/about"}>About</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <NavLink to={"/projects"}>Projects</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <NavLink to={"/Blog"}>Blog</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <NavLink to={"/contact"}>Contact</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
