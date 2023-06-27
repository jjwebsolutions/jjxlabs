"use client";

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
        <CardTitle>What can i build for you?</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Card className="w-4/4 mt-5">
          <CardHeader>
            <CardTitle>Fullstack app</CardTitle>
            <CardDescription>
              Using authentification and interactions with a database
            </CardDescription>
          </CardHeader>
          <div className="flex justify-between">
            <CardContent className="pt-6"></CardContent>
            <a href="#tennis" className="btn btn-primary p-5">
              Example
            </a>
          </div>
        </Card>
        <Card className="w-4/4 mt-5">
          <CardHeader>
            <CardTitle>Simple app</CardTitle>
            <CardDescription>
              Beautiful website with animations to showcase your project or your
              product with best SEO.
            </CardDescription>
          </CardHeader>
          <div className="flex justify-between">
            <CardContent className="pt-6"></CardContent>
            <a href="#landing" className="btn btn-primary p-5">
              Example
            </a>
          </div>
        </Card>

        <Card className="w-4/4 mt-5">
          <CardHeader>
            <CardTitle>Wordpress/Shopify website</CardTitle>
            <CardDescription>
              Beautiful website accepting payments
            </CardDescription>
          </CardHeader>
          <div className="flex justify-between">
            <CardContent></CardContent>
            <a href="#payment" className="btn btn-primary p-5">
              Example
            </a>
          </div>
        </Card>
      </CardContent>
      <Separator className="mt-10 mb-10" />
      <CardHeader>
        <CardTitle id="tennis">Proof of work</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Card className="w-4/4 mt-5">
          <CardHeader>
            <CardTitle>Tennis reservation app</CardTitle>
            <CardDescription>
              This app use credential authentification and allow you to check if
              a session is available the day you want to reserve a court. I used
              NextJS, TypeScript, Tailwind and Prisma to build this app and a
              SQL database
            </CardDescription>
          </CardHeader>
          <div className="flex justify-center">
            <CardContent className="pt-6 ">
              <img
                className="max-w-3xl hidden lg:block"
                src="https://i.goopics.net/v9bqb3.png"
                alt="logo"
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
                src="https://i.goopics.net/2oi26s.png"
                alt="logo"
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
