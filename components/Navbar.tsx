"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import { MotionValue } from "framer-motion";

// when the user scrolls down, we need to hide the navbar
// when the user scrolls up, we need to reveal the nav
//
// to detect this change in scroll direction, we need to calculate the diff between the current scroll position and the previous one
const Navbar = () => {
  const { scrollY } = useScroll();
  const [folded, setFolded] = useState(false);

  function updateNavFoldState() {
    if (scrollY.get() < scrollY.getPrevious()) {
      setFolded(false);
      console.log("should be visible");
    } else if (
      scrollY.get() > scrollY.getPrevious() &&
      scrollY.get() - scrollY.getPrevious() > 10
    ) {
      setFolded(true);
      console.log("should be hidden");
    }
  }

  useMotionValueEvent(scrollY, "change", () => {
    updateNavFoldState();
    console.table({
      prev: scrollY.getPrevious(),
      current: scrollY.get(),
    });
  });

  return (
    <motion.nav
      className={`flex justify-between w-[calc(100%-5rem)] md:w-[80%] fixed top-0 left-0 right-0 z-20 text-white bg-blur h-10 items-center backdrop-blur-md ${
        folded ? "opacity-0" : "h-10"
      } transition-all mx-auto`}
    >
      <h1>Wow nav</h1>
      <span>
        <ul className="flex gap-6">
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
        </ul>
      </span>
    </motion.nav>
  );
};
export default Navbar;
