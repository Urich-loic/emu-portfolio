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
    <div>
      <NavigationMenu className="flex items-center justify-between bg-background p-4">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <NavLink to={"/"}>EMU-Portfolio</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className="flex items-center space-x-4">
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
