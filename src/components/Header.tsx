"use client";

import React from "react";
import Link from "next/link";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <Link
        href="#"
        className="flex items-center justify-center"
        onClick={() => scrollToSection("home")}
      >
        <span className="text-xl font-medium">jjx</span>
        <span className="sr-only">jjx</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#services"
          className="text-sm font-medium hover:underline underline-offset-4"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("services");
          }}
        >
          Services
        </Link>
        <Link
          href="#contact"
          className="text-sm font-medium hover:underline underline-offset-4"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
