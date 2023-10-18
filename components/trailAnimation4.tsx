"use client";

import TypewriterEffect from "./TypewritterEffect";

import React, { useState, useEffect } from "react";
import { useTrail, a } from "@react-spring/web";

import styles from "./style.module.css";

const Trail: React.FC<{ open: boolean; children: any }> = ({
  open,
  children,
}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    delay: 500,
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function TrailAnimation4() {
  const [open, set] = useState(false);
  useEffect(() => {
    set(true);
  }, []);
  return (
    <div className={styles.container}>
      <Trail open={open}>
        <div className="flex space-x-36 w-full">
          <div className="w-96 transition-height duration-500 ease-in-out hover:h-110">
            <span className="sm:text-8xl text-6xl w-full ">
              <TypewriterEffect text="Fullstack" />
            </span>
            <span className="sm:text-8xl text-6xl w-full ">
              <TypewriterEffect text="Web" />
            </span>
            <span className="sm:text-8xl text-6xl  ">
              <TypewriterEffect text="developer" />
            </span>
          </div>
        </div>
      </Trail>
    </div>
  );
}
