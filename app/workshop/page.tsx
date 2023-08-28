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
              Using any authentification provider and complex interactions with
              a database.
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
              Beautiful website accepting payments.
            </CardDescription>
          </CardHeader>
        </Card>
      </CardContent>
      <Separator className="mt-10 mb-10" />
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
    </main>
  );
}
