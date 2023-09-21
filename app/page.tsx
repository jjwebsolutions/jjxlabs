"use client";

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
import { Button } from "@/components/ui/button";
import scrollToTop from "@/components/scrollToTop";

import "../app/globals.css";

export default function Home() {
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
    <main className="flex min-h-screen flex-col items-center   justify-between  ">
      <div className="h-screen ">
        <div className=" flex flex-col xl:flex-row text-center sm:mt-5 md:mt-20 xl:text-left align-middle sm:space-x-8">
          <div className=" p-3  ">
            <TrailAnimation />
          </div>
          <div className="xl:mt-40 mt-5 p-3 ">
            <TrailAnimation2 />
          </div>
        </div>
        <div className="flex absolute bottom-0 left-0 right-0 text-center justify-center   p-10">
          <Button className="buttonFadeIn">
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
              View my work
            </LinkScroll>
          </Button>
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
        <animated.div ref={ref} style={springs}>
          <Card className="w-4/4 mt-5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                Tennis court reservation app
              </CardTitle>
              <CardDescription className="lg:hidden">
                This app use credential authentification and allow you to check
                if a session is available the day you want to reserve a court. I
                used NextJS, TypeScript, Tailwind, tRPC and Prisma to build this
                app and a SQL database.
              </CardDescription>
            </CardHeader>
            <div className="flex">
              <div className="text-xl p-10 space-y-5 lg:w-1/4 w-1/2 text-center lg:block hidden">
                <p>Next.js</p>
                <p>TypeScript</p>
                <p>tRPC</p>
                <p>Prisma</p>
                <p>Tailwind</p>
                <p>NextAuth</p>
              </div>

              <CardContent className="pt-5 hidden lg:block  w-2/4">
                <Image
                  className=" "
                  width={700}
                  height={500}
                  src="https://i.goopics.net/v9bqb3.png"
                  alt="screenshot of a beautiful website use for reservation"
                />
              </CardContent>
              <div className="text-xl p-10 space-y-5 text-center sm:w-1/4 w-1/2 lg:block hidden  ">
                <p>Credential authentification</p>
                <p>Check sessions available for the day clicked</p>
                <p>Reserve your session easily</p>
                <p>Admin dashboard</p>
              </div>
            </div>
            <div className="flex justify-center p-5">
              <Button className="">
                <Link
                  className="flex justify-center p-5"
                  href="https://nextcourt.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Try it
                </Link>
              </Button>
            </div>
          </Card>
        </animated.div>

        <animated.div ref={ref3} style={springs3}>
          <Card className="w-4/4 mt-5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">E-commerce market</CardTitle>

              <CardDescription className="lg:hidden">
                This app allow you to showcase and sell the products that you
                manage in the dashboard bellow. It accepts payments via Stripe.
                You can use the public API provide by the dashboard to link the
                e-commerce and the dashboard.
              </CardDescription>
            </CardHeader>
            <div className="flex    ">
              <div className="text-xl p-10 space-y-5 lg:w-1/4 w-1/2 text-center  lg:block hidden ">
                <p>Next.js</p>
                <p>TypeScript</p>
                <p>Prisma</p>
                <p>Tailwind</p>
                <p>Shadcn</p>
                <p>Clerk</p>
              </div>

              <CardContent className="pt-5 hidden lg:block  w-2/4">
                <Image
                  className=" "
                  width={700}
                  height={500}
                  src="https://i.goopics.net/y5thji.png"
                  alt="screenshot of a beautiful e-commerce website"
                />
              </CardContent>
              <div className="text-xl p-10 space-y-5 text-center sm:w-1/4 w-1/2  lg:block hidden  ">
                <p>Simple marketplace</p>
                <p>People can buy the products added from your dashboard</p>
                <p>Stripe payment</p>
                <p>Filter products</p>
              </div>
            </div>
            <div className="flex justify-center p-5">
              <Button className="">
                <Link
                  className="flex justify-center p-5"
                  href="https://jjxstore-client.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Try it
                </Link>
              </Button>
            </div>
          </Card>
        </animated.div>
        <animated.div ref={ref4} style={springs4}>
          <Card className="w-4/4 mt-5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">E-commerce dashboard</CardTitle>
              <CardDescription className="lg:hidden">
                A dashboard that allows you to manage multiple stores and their
                products. Demo account linked to the store:
                demojjxlabs@gmail.com:3iBPM7ActvEk7RJ
              </CardDescription>
              <CardDescription>
                Demo account linked to the store:
                demojjxlabs@gmail.com:3iBPM7ActvEk7RJ
              </CardDescription>
            </CardHeader>
            <div className="flex    ">
              <div className="text-xl p-10 space-y-5 lg:w-1/4 w-1/2 text-center  lg:block hidden ">
                <p>Next.js</p>
                <p>TypeScript</p>
                <p>Prisma</p>
                <p>Tailwind</p>
                <p>Shadcn</p>
                <p>Clerk</p>
              </div>

              <CardContent className="pt-5 hidden lg:block  w-2/4">
                <Image
                  className=" "
                  width={700}
                  height={500}
                  src="https://i.goopics.net/kkw25z.png"
                  alt="screenshot of a beautiful dashboard used to manage a store"
                />
              </CardContent>
              <div className="text-xl p-10 space-y-5 text-center sm:w-1/4 w-1/2   lg:block hidden ">
                <p>Google authentification</p>
                <p>Manage multiple stores</p>
                <p>Add products to the stores</p>
                <p>Manage the orders from your stores</p>
              </div>
            </div>
            <div className="flex justify-center p-5">
              <Button className="">
                <Link
                  className="flex justify-center p-5"
                  href="https://jjxstore-admin.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Try it
                </Link>
              </Button>
            </div>
          </Card>
        </animated.div>
        <animated.div ref={ref2} style={springs2}>
          <Card className="w-4/4 mt-5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Reddit clone</CardTitle>
              <CardDescription className="lg:hidden">
                This app use google authentification and allow you to create a
                community so you and others user can create post and interact
                with them. I used NextJS, TypeScript, Tailwind and Prisma to
                build this app and a SQL database.
              </CardDescription>
            </CardHeader>
            <div className="flex    ">
              <div className="text-xl p-10 space-y-5 lg:w-1/4 w-1/2 text-center  lg:block hidden">
                <p>Next.js</p>
                <p>TypeScript</p>
                <p>Prisma</p>
                <p>Tailwind</p>
                <p>Shadcn</p>
                <p>ClerkAuth</p>
              </div>

              <CardContent className="pt-5 hidden lg:block  w-2/4">
                <Image
                  className=" "
                  width={700}
                  height={500}
                  src="https://i.goopics.net/7bf8q7.png"
                  alt="screenshot of a beautiful website similar to reddit"
                />
              </CardContent>
              <div className="text-xl p-10 space-y-5 text-center sm:w-1/4 w-1/2  lg:block hidden ">
                <p>Google authentification</p>
                <p>Create a community so people can join it</p>
                <p>Add posts to the community so users can interact with it</p>
              </div>
            </div>
            <div className="flex justify-center p-5">
              <Button className="">
                <Link
                  className="flex justify-center p-5"
                  href="https://reddint.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Try it
                </Link>
              </Button>
            </div>
          </Card>
        </animated.div>
        <Card className="w-4/4 mt-5">
          <CardHeader id="payment">
            <CardTitle>AI SaaS platform</CardTitle>
            <CardDescription>Coming very soon.</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </CardContent>
      <Separator className="mt-20 mb-10" />
      <div className="h-screen sm:p-14 mt-10" id="about">
        <CardHeader>
          <CardTitle className="text-xl lg:text-3xl text-center">
            Based in Paris
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="sm:p-10">
          <Card className="w-4/4 mt-5 card1">
            <CardHeader>
              <CardTitle>
                I mainly use NextJS, TypeScript, Tailwind and SQL database for
                my work
              </CardTitle>
            </CardHeader>
            <div className="flex justify-between">
              <CardContent className="sm:pt-6">
                <p>
                  I always pursue the latest innovations in web development. My
                  work is to create beautiful, fast, and highly secure
                  applications. Whether it is a simple website or a complex app,
                  I am thrilled to bring your vision to life.
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="w-4/4 mt-5 card2">
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <div className="flex justify-between">
              <CardContent className="pt-6">
                <p>Julien Atanassov</p>
                <p>atanassov.julien@gmail.com</p>
              </CardContent>
            </div>
          </Card>
        </CardContent>
        <div className="xl:mt-32 p-4 flex justify-end">
          <Button onClick={scrollToTop}>TOP</Button>
        </div>
      </div>
    </main>
  );
}
