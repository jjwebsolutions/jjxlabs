"use client";

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
  return (
    <main className="flex min-h-screen flex-col items-center   justify-between  ">
      <div className="h-screen ">
        <div className=" flex flex-col xl:flex-row text-center xl:text-left sm:space-x-8">
          <div className=" p-3  ">
            <TrailAnimation />
          </div>
          <div className="sm:mt-40 p-3 ">
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
      <CardHeader>
        <CardTitle className="cardContent2 text-xl lg:text-3xl">
          Projects
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="cardContent2">
        <Card className="w-4/4 mt-5">
          <CardHeader>
            <CardTitle>Tennis reservation app</CardTitle>
            <CardDescription>
              This app use credential authentification and allow you to check if
              a session is available the day you want to reserve a court. I used
              NextJS, TypeScript, Tailwind, tRPC and Prisma to build this app
              and a SQL database.
            </CardDescription>
          </CardHeader>
          <div className="flex justify-center">
            <CardContent className="pt-6 ">
              <img
                className="max-w-3xl hidden lg:block"
                src="https://i.goopics.net/v9bqb3.png"
                alt="screenshot of a beautiful website use for reservation"
              />
              <Link
                className="flex justify-center pt-5"
                href="https://nextcourt.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Try it
              </Link>
            </CardContent>
          </div>
        </Card>
        <Card className="w-4/4 mt-5">
          <CardHeader>
            <CardTitle>Reddit clone</CardTitle>
            <CardDescription>
              This app use google authentification and allow you to create a
              community so you and others user can create post and interact with
              them. I used NextJS, TypeScript, Tailwind and Prisma to build this
              app and a SQL database.
            </CardDescription>
          </CardHeader>
          <div className="flex justify-center">
            <CardContent className="pt-6">
              <img
                className="max-w-3xl hidden lg:block"
                src="https://i.goopics.net/7bf8q7.png"
                alt="screenshot of a beautiful website similar to reddit"
              />
              <Link
                className="flex justify-center pt-5"
                href="https://reddint.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Try it
              </Link>
            </CardContent>
          </div>
        </Card>
        <Card className="w-4/4 mt-5">
          <CardHeader>
            <CardTitle>E-commerce market</CardTitle>
            <CardDescription>
              This app allow you to showcase and sell the products that you
              manage in the dashboard bellow. It accepts payments via Stripe.
              You can use the public API provide by the dashboard to link the
              e-commerce and the dashboard.
            </CardDescription>
          </CardHeader>
          <div className="flex justify-center">
            <CardContent className="pt-6 ">
              <img
                className="max-w-3xl hidden lg:block"
                src="https://i.goopics.net/y5thji.png"
                alt="screenshot of a beautiful e-commerce website"
              />
              <Link
                className="flex justify-center pt-5"
                href="https://jjxstore-client.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Try it
              </Link>
            </CardContent>
          </div>
        </Card>
        <Card className="w-4/4 mt-5">
          <CardHeader>
            <CardTitle>E-commerce dashboard</CardTitle>
            <CardDescription>
              A dashboard that allows you to manage multiple stores and their
              products. Demo account linked to the store:
              demojjxlabs@gmail.com:3iBPM7ActvEk7RJ
            </CardDescription>
          </CardHeader>
          <div className="flex justify-center">
            <CardContent className="pt-6 ">
              <img
                className="max-w-3xl hidden lg:block"
                src="https://i.goopics.net/kkw25z.png"
                alt="screenshot of a beautiful dashboard used to manage a store"
              />
              <Link
                className="flex justify-center pt-5"
                href="https://jjxstore-admin.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Try it
              </Link>
            </CardContent>
          </div>
        </Card>

        <Card className="w-4/4 mt-5">
          <CardHeader id="payment">
            <CardTitle>AI SaaS platform</CardTitle>
            <CardDescription>Coming very soon.</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </CardContent>
      <Separator />
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
        <div className="mt-32 flex justify-end">
          <Button onClick={scrollToTop}>TOP</Button>
        </div>
      </div>
    </main>
  );
}
