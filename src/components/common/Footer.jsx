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
      <div className="flex sm:block sm:text-center justify-between align-middle w-6xl z-50 mx-auto border-t-1 border-t-zinc-700">
        <div className="menuItems flex sm:text-center sm:block justify-between align-middle py-5">
          <NavigationMenu className="flex sm:text-center sm:block items-center justify-between bg-dark ">
            <NavigationMenuList className="flex items-center space-x-12 text-gray-400 rounded-2xl">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink to={"/"}>Home</NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <ScrollLink
                className="cursor-pointer"
                to={"about"}
                smooth={true}
                duration={1000}
                offset={-70}
              >
                About
              </ScrollLink>

              <ScrollLink
                className="cursor-pointer"
                to={"project"}
                smooth={true}
                duration={1000}
                offset={-70}
              >
                Projects
              </ScrollLink>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="target-section" smooth={true} duration={500}>
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="target-section" smooth={true} duration={500}>
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="copyRight">
          <p className="flex items-center sm:text-center justify-between p-4 text-gray-400">
            © 2025 Engama Michel. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
