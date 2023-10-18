"use client";

import * as React from "react";
import TypewriterEffect from "./TypewritterEffect";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "./ui/button";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <>
      <div className="container flex  items-center mx-auto mt-5">
        <NavigationMenu className="ml-5 md:justify-end md:mr-10">
          <NavigationMenuList className="space-x-2 md:space-x-8 ">
            <NavigationMenuItem>
              <LinkScroll
                activeClass="active"
                href="projects"
                to="projects"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                <Button className="buttonFadeIn">
                  <TypewriterEffect text="Projects" />
                </Button>
              </LinkScroll>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <LinkScroll
                activeClass="active"
                href="about"
                to="about"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                <Button className="buttonFadeIn">
                  {" "}
                  <TypewriterEffect text="Contact" />
                </Button>
              </LinkScroll>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a target="_blank" href="https://github.com/julienata">
                <Button className="buttonFadeIn">
                  <TypewriterEffect text="Github" />
                </Button>
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="buttonFadeIn">
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
