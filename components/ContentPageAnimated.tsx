"use client";
import React from "react";

import { useInView, animated, useSpring } from "@react-spring/web";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { Separator } from "@/components/ui/separator";
import TrailAnimation from "@/components/trailAnimation";
import TrailAnimation2 from "@/components/trailAnimation2";
import HomeAnimation from "@/components/HomeAnimation";
import { Button } from "@/components/ui/button";
import scrollToTop from "@/components/scrollToTop";
import TypewriterEffect from "./TypewritterEffect";

function ContentPageAnimated() {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "0% 0%",
    }
  );
  const [ref2, springs2] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "0% 0%",
    }
  );
  const [ref3, springs3] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "0% 0%",
    }
  );
  const [ref4, springs4] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
        once: true,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "0% 0%",
    }
  );
  const [ref5, springs5] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 100,
      },
      to: {
        opacity: 1,
        x: 0,
        delay: 500,
      },
    }),
    {
      rootMargin: "0% 0%",
      once: true,
    }
  );

  const [ref6, springs6] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -100,
      },
      to: {
        opacity: 1,
        x: 0,
        delay: 500,
      },
    }),

    {
      rootMargin: "0% 0%",
      once: true,
    }
  );
  const [ref7, springs7] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: -100,
      },
      to: {
        opacity: 1,
        y: 0,
        delay: 200,
      },
    }),

    {
      rootMargin: "0% 0%",
    }
  );
  const [ref8, springs8] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "0% 0%",
    }
  );
  const [ref9, springs9] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "0% 0%",
    }
  );
  return (
    <>
      <div className=" flex flex-col items-center h-screen  ">
        <animated.div className="" ref={ref7} style={springs7}>
          <CardHeader className="w-full items-center">
            <CardTitle className=" text-xl lg:text-3xl md:my-16 ">
              Technologies I utilize for coding
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
        </animated.div>
        <div className="flex w-full">
          <animated.div className="w-1/2 " ref={ref6} style={springs6}>
            <CardContent className="Card-Content w-full hidden lg:block">
              <Card className="mt-5 pb-3 pt-1 card1">
                <CardHeader className="text-center">
                  <CardTitle className="flex justify-center">
                    <TypewriterEffect text="JavaScript" />
                  </CardTitle>
                  <CardDescription className="text-center  h-16 sm:h-5">
                    One of the best web programming languages
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="mt-5 pb-3 pt-1 card1">
                <CardHeader className="text-center">
                  <CardTitle className="flex justify-center">
                    <TypewriterEffect text="React / Node.js" />
                  </CardTitle>
                  <CardDescription className="text-center h-16 sm:h-5">
                    Fast apps with a Node.js API and React components
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className=" mt-5 pb-3 pt-1 card3">
                <CardHeader className="text-center">
                  <CardTitle className="flex justify-center">
                    <TypewriterEffect text="Tailwind / Radix / Shadcn " />
                  </CardTitle>
                  <CardDescription className="text-center h-16 sm:h-5">
                    Making my apps simple but elegant
                  </CardDescription>
                </CardHeader>
              </Card>
            </CardContent>
          </animated.div>
          <CardContent className="Card-Content w-full lg:hidden ">
            <Card className="mt-5 pb-3 pt-1 card1">
              <CardHeader className="text-center">
                <CardTitle>JavaScript</CardTitle>
                <CardDescription className="text-center  h-16 sm:h-5">
                  One of the best web programming languages
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="mt-5 pb-3 pt-1 card1">
              <CardHeader className="text-center">
                <CardTitle className="">React / Node.js</CardTitle>
                <CardDescription className="text-center h-16 sm:h-5">
                  Fast apps with a Node.js API and React components
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className=" mt-5 pb-3 pt-1 card3">
              <CardHeader className="text-center">
                <CardTitle>Tailwind / Radix / Shadcn</CardTitle>
                <CardDescription className="text-center h-16 sm:h-5">
                  Making my apps simple but elegant
                </CardDescription>
              </CardHeader>
            </Card>
          </CardContent>
          <animated.div className="w-1/2 " ref={ref5} style={springs5}>
            <CardContent className="Card-Content  hidden lg:block w-full">
              <Card className=" mt-5 pb-3 pt-1 card1">
                <CardHeader className="text-center">
                  <CardTitle className="flex justify-center">
                    <TypewriterEffect text="TypeScript" />
                  </CardTitle>
                  <CardDescription className="text-center h-16 sm:h-5">
                    Secure apps with type safety
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className=" mt-5 pb-3 pt-1 card1">
                <CardHeader className="text-center">
                  <CardTitle className="flex justify-center">
                    <TypewriterEffect text="Next.js" />
                  </CardTitle>
                  <CardDescription className="text-center h-16 sm:h-5">
                    Power of react with server components
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="mt-5 pb-3 pt-1 card3">
                <CardHeader className="text-center">
                  <CardTitle className="flex justify-center">
                    <TypewriterEffect text="Prisma / Drizzle" />
                  </CardTitle>
                  <CardDescription className="text-center h-16 sm:h-5">
                    ORM for database operations
                  </CardDescription>
                </CardHeader>
              </Card>
            </CardContent>
          </animated.div>
          <CardContent className="Card-Content  lg:hidden  w-full">
            <Card className=" mt-5 pb-3 pt-1 card1">
              <CardHeader className="text-center">
                <CardTitle className="flex justify-center">
                  TypeScript
                </CardTitle>
                <CardDescription className="text-center h-16 sm:h-5">
                  Secure apps with type safety
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className=" mt-5 pb-3 pt-1 card1 ">
              <CardHeader className="items-center">
                <CardTitle className="flex justify-center">Next.js</CardTitle>
                <CardDescription className="text-center h-16 sm:h-5">
                  Power of react with server components
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="mt-5 pb-3 pt-1 card3">
              <CardHeader className="text-center">
                <CardTitle>Prisma / Drizzle</CardTitle>
                <CardDescription className="text-center h-16 sm:h-5">
                  ORM for database operations
                </CardDescription>
              </CardHeader>
            </Card>
          </CardContent>
        </div>
        <div className=" w-full hidden sm:flex text-center justify-center mt-16  p-10">
          <LinkScroll
            className="text-center"
            activeClass="active"
            href="projects"
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Button className="buttonFadeIn">
              <TypewriterEffect text="View some of my projects" />
            </Button>
          </LinkScroll>
        </div>
      </div>
      <Separator className="mt-10 mb-10" id="projects" />
      <animated.div ref={ref} style={springs}>
        <CardHeader>
          <CardTitle className="cardContent2 text-xl lg:text-3xl">
            Projects
          </CardTitle>
        </CardHeader>
      </animated.div>

      <CardContent className="cardContent2 p-0 space-y-10">
        <animated.div ref={ref8} style={springs8}>
          <Card className="w-4/4 mt-5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Always building..</CardTitle>
              <CardDescription className=""></CardDescription>
            </CardHeader>
          </Card>
        </animated.div>
      </CardContent>
    </>
  );
}

export default ContentPageAnimated;
