"use client";

import "../glitch.css";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Portfolio() {
  return (
    <main className="flex  flex-col items-center mt-10  p-3  sm:pr-52 sm:pl-52">
      <CardHeader>
        <CardTitle className=" text-xl lg:text-3xl  ">
          What can i build for you?
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="Card-Content">
        <Card className="w-4/4 mt-5 pb-3 pt-1 card1">
          <CardHeader className="items-center">
            <CardTitle>Fullstack app</CardTitle>
            <CardDescription className="text-center">
              Using any authentification provider and interactions with a
              database
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-4/4 mt-5 pb-3 pt-1 card1">
          <CardHeader className="items-center">
            <CardTitle className="">Landing page</CardTitle>
            <CardDescription className="text-center">
              Simple and beautiful website with animations to showcase your
              project or your product with best SEO.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="w-4/4 mt-5 pb-3 pt-1 card3">
          <CardHeader className="items-center">
            <CardTitle>Wordpress/Shopify website</CardTitle>
            <CardDescription>
              Beautiful website accepting payments
            </CardDescription>
          </CardHeader>
        </Card>
      </CardContent>
      <Separator className="mt-10 mb-10" />
      <CardHeader>
        <CardTitle className="cardContent2 text-xl lg:text-3xl">
          Proof of work
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
              and a SQL database
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
              app and a SQL database
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
          <CardHeader id="landing">
            <CardTitle>Landing page</CardTitle>
            <CardDescription>Coming very soon</CardDescription>
          </CardHeader>
          <div className="flex justify-between">
            <CardContent className="pt-6"></CardContent>
          </div>
        </Card>

        <Card className="w-4/4 mt-5">
          <CardHeader id="payment">
            <CardTitle>Wordpress/Shopify website</CardTitle>
            <CardDescription>Coming very soon</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </CardContent>
    </main>
  );
}
