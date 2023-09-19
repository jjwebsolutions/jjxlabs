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

export default function TrailAnimation2() {
  const [open, set] = useState(false);
  useEffect(() => {
    set(true);
  }, []);
  return (
    <div className={styles.container}>
      <Trail open={open}>
        <span className="sm:text-8xl text-6xl ">Fullstack</span>
        <span className="sm:text-8xl text-6xl">Web developer</span>
      </Trail>
    </div>
  );
}
