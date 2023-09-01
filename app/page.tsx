"use client";

import anchor from "@/public/anchor.svg";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <main>
      <div className="w-full min-h-screen flex justify-center items-center bg-black">
        <motion.div
          style={{ top: scrollYProgress }}
          className={`absolute`}>
          <Image
            width={350}
            height={350}
            src={anchor}
            alt=""></Image>
        </motion.div>
      </div>
      <div className="h-[500px] bg-black"></div>
      <div className="bg-black">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet unde
        pariatur ipsa quia, doloribus distinctio quod aliquid vitae cumque
        praesentium! Modi facere autem repellendus tempora voluptas enim
        quisquam quos similique. Modi nisi ipsa dolore asperiores illo suscipit
        quidem labore, optio, maxime repellendus fuga earum hic autem,
        laudantium iusto itaque dolorum.
      </div>
      <div className="w-full bg-black text-white px-20 flex-col flex gap-20"></div>
      <div className="max-w-[50%]">
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
