import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header"; // Import the new Header component
import { submitContact } from "@/actions/contact";

export function Main() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section
          id="home"
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 pt-20 min-h-[100dvh]  flex items-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Web Development Solutions for Your Business
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  From static websites to complex web applications, I deliver
                  tailored solutions to help your business thrive online.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#contact">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#services">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 min-h-[80dvh] flex items-center"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Services
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Static Websites</CardTitle>
                  <CardDescription>
                    Fast, responsive, and SEO-friendly websites
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Perfect for small businesses, portfolios, and landing pages.
                  Built with modern technologies for optimal performance.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Web Applications</CardTitle>
                  <CardDescription>
                    Dynamic and interactive web solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Custom web applications tailored to your business needs. From
                  e-commerce platforms to content management systems.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Full-Stack Development</CardTitle>
                  <CardDescription>
                    End-to-end web development services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Comprehensive solutions covering both front-end and back-end
                  development, database design, and API integrations.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32  min-h-[80dvh] flex items-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Why Choose Me?
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <LaptopIcon className="h-10 w-10" />
                <h3 className="text-xl font-bold">
                  Expert in Modern Tech Stack
                </h3>
                <p>
                  Proficient in React, Next.js, TypeScript, and other
                  cutting-edge technologies.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <RocketIcon className="h-10 w-10" />
                <h3 className="text-xl font-bold">Performance-Driven</h3>
                <p>
                  Focus on creating fast, efficient, and scalable web solutions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <BrainCircuitIcon className="h-10 w-10" />
                <h3 className="text-xl font-bold">AI Integration Experience</h3>
                <p>
                  Background in AI startups, offering insights into potential AI
                  integrations for your web projects.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 border-t bg-gray-100 dark:bg-gray-800"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Elevate Your Web Presence?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let&apos;s discuss your project and create a web solution that
                drives your business forward.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form action={submitContact} className="space-y-4">
                <Input
                  className="w-full"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  required
                />
                <textarea
                  className="w-full"
                  placeholder="Your message (optional)"
                  name="message"
                  rows={4}
                />
                <Button type="submit" className="w-full">
                  Contact Me
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 jjx. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
function BrainCircuitIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
      <path d="M16 8V5c0-1.1.9-2 2-2" />
      <path d="M12 13h4" />
      <path d="M12 18h6a2 2 0 0 1 2 2v1" />
      <path d="M12 8h8" />
      <path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
      <path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
      <path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
      <path d="M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
    </svg>
  );
}

function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function LaptopIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}

function RocketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

export default Main;
