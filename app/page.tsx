"use client";

import { Separator } from "@/components/ui/separator";

import HomeAnimation from "@/components/HomeAnimation";
import ContentPageAnimated from "@/components/ContentPageAnimated";
import ContactContent from "@/components/ContactContent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center m-auto w-auto   justify-between  ">
      <div className="h-screen ">
        <HomeAnimation />
      </div>
      <Separator className="mt-10 mb-10" id="intro" />
      <ContentPageAnimated />
      <Separator className="mt-20 mb-10" />
      <ContactContent />
    </main>
  );
}
