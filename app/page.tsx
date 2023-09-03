"use client";

import anchor from "@/public/anchor.svg";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [top, setTop] = useState(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", () => {
    setTop(scrollY.get());
  });

  const variants = {
    initial: {
      opacity: 0,
    },
    spin: {
      opacity: 1,
    },
  };

  return (
    <main>
      <div className="w-full min-h-screen flex justify-center items-center bg-black">
        <motion.div
          style={{ top: top }}
          className={`absolute`}
          layoutId="anchor"
        >
          <Image width={350} height={350} src={anchor} alt=""></Image>
        </motion.div>
      </div>
      <div className="h-[500px]"></div>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="spin"
        viewport={{ amount: "all" }}
        className=" text-white py-20"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet unde
        pariatur ipsa quia, doloribus distinctio quod aliquid vitae cumque
        praesentium! Modi facere autem repellendus tempora voluptas enim
        quisquam quos similique. Modi nisi ipsa dolore asperiores illo suscipit
        quidem labore, optio, maxime repellendus fuga earum hic autem,
        laudantium iusto itaque dolorum.
      </motion.div>
      <div className="w-full bg-black text-white px-20 flex-col flex gap-20"></div>
      <div className="w-full bg-stone-950 text-white py-20">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet unde
        pariatur ipsa quia, doloribus distinctio quod aliquid vitae cumque
        praesentium! Modi facere autem repellendus tempora voluptas enim
        quisquam quos similique. Modi nisi ipsa dolore asperiores illo suscipit
        quidem labore, optio, maxime repellendus fuga earum hic autem,
        laudantium iusto itaque dolorum.
      </div>
    </main>
  );
}
