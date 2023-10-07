import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import scrollToTop from "@/components/scrollToTop";

function ContactContent() {
  return (
    <>
      <div className="h-screen sm:p-14 mt-10" id="about">
        <CardHeader>
          <CardTitle className="text-xl lg:text-3xl text-center">
            Let's work together
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="sm:p-10">
          <Card className="w-4/4 mt-5 card1 flex justify-center flex-col items-center">
            <CardHeader className="text-center">
              <CardTitle>
                I would love to collaborate with you on one of your project, i'm
                also looking for an internship
              </CardTitle>
            </CardHeader>
            <div className="text-center">
              <CardContent className="sm:pt-6 ">
                I am based in Paris but i can work in remote
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
    </>
  );
}

export default ContactContent;
