import React from "react";

import TrailAnimation from "@/components/trailAnimation";
import TrailAnimation2 from "@/components/trailAnimation2";

import { Link as LinkScroll } from "react-scroll";

import { Button } from "@/components/ui/button";

function HomeAnimation() {
  return (
    <>
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
            href="intro"
            to="intro"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            View my work
          </LinkScroll>
        </Button>
      </div>
    </>
  );
}

export default HomeAnimation;
