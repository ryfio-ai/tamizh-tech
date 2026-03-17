"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScrollSecond = ({
  images,
  className,
}: {
  images: any[]; // Using any[] to support local require() objects
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  
  // Note: Grid scroll is disabled if container is not fixed height. 
  // We'll use the window scroll for a better full-page experience.
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -10]);

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("w-full py-20 px-4", className)}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-8 sm:gap-10"
      >
        <div className="grid gap-8 sm:gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYFirst,
                x: translateXFirst,
                rotateZ: rotateXFirst,
              }}
              key={"grid-1" + idx}
              className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 shadow-2xl"
            >
              <Image
                src={el}
                className="h-full w-full object-cover"
                fill
                alt="Tamizh Robotics Gallery"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-8 sm:gap-10">
          {secondPart.map((el, idx) => (
            <motion.div 
              key={"grid-2" + idx}
              className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={el}
                className="h-full w-full object-cover"
                fill
                alt="Tamizh Robotics Gallery"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-8 sm:gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYThird,
                x: translateXThird,
                rotateZ: rotateXThird,
              }}
              key={"grid-3" + idx}
              className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 shadow-2xl"
            >
              <Image
                src={el}
                className="h-full w-full object-cover"
                fill
                alt="Tamizh Robotics Gallery"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
