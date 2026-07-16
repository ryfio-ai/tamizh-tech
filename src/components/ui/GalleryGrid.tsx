"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GalleryGridProps {
  images: string[];
  className?: string;
}

function getDescriptiveAlt(src: string): string {
  const filename = src.split("/").pop() || "";
  const nameWithoutExt = filename.split(".")[0].toLowerCase();
  
  const mappings: Record<string, string> = {
    "1": "TamizhTech students demonstrating autonomous robot control",
    "3": "Engineering team working on combat robot chassis prototyping",
    "6": "Robotics champions holding official competition winning trophy",
    "7": "STEM lab installation at Coimbatore school with robotics kits",
    "8": "Hands-on microcontrollers coding workshop with students",
    "9": "Autonomous mobile robot (AMR) driving test inside testing lab",
    "10": "RC Robo Race metal gear chassis and motor setup demonstration",
    "11": "RC Robo Soccer team active kicker mechanism adjustment",
    "12": "AI Computer Vision camera system tracking objects on conveyor belt",
    "13": "Custom UAV drone frame with brushless motors assembly",
    "14": "FPV racing quadcopter drone kit testing flight operations",
    "16": "IoT smart environment sensor node prototype validation",
    "17": "Embedded systems programming session with STM32 microcontrollers",
    "18": "Industrial conveyor belt automation PLC panel wiring checks",
    "19": "School students training with STEM Tinkering Lab kits in Tamil Nadu",
    "20": "College students learning robotic arm programming in Coimbatore",
    "21": "Research team discussing industrial AGV system blueprints",
    "22": "Corporate training workshop for automotive plant engineers",
    "23": "Strategic technology consulting session for robotics startups",
    "24": "Team posing with winning certificate at national hackathon event",
    "25": "Demonstration of 3D printer manufacturing custom bot gears",
    "26": "Close-up of rare-earth magnets drive base of RC Robo Sumo bot",
    "27": "Water-cooled brushless motor setup of RC Speedboat",
    "29": "Air cushion skirt calibration of custom Hovercraft model",
    "30": "PID-tuned microcontroller speedster line follower calibration",
    "32": "Micromouse maze solving robot using flood-fill algorithm",
    "33": "Dual-propeller air cushion hovercraft friction-free test run",
    "34": "Precision CNC milling machine fabricating custom aluminum mounts",
    "35": "Advanced industrial robotic manipulator arm operation",
    "36": "IoT gateway node transmitting real-time sensor telemetries",
    "37": "Tamil Nadu school science exhibition robotics project showcase",
    "39": "Brushless motor esc connections of custom drone controller",
    "40": "3D printed prototyping components for robotics gripper test",
    "41": "High-torque planetary gearbox assembly for heavy sumo bot",
    "42": "Pneumatic cylinder kicker assembly of RC Robo Soccer bot",
    "43": "Lipo battery charging safety station inside R&D lab",
    "44": "Carbon fiber chassis plates for RC Robo Race platform",
    "46": "PID parameters calibration interface for line solver speedster",
    "47": "Micromouse micromotors and optical encoders soldering",
    "48": "PCB layout print check under digital microscope",
    "49": "Students testing hovercraft steering servos operation",
    "50": "RC transmitter and receiver module pairing check",
    "51": "Coimbatore engineering team group photo at research lab",
    "53": "National level Robo Soccer championship arena layout",
    "54": "Robo War heavy steel armored spinner bot validation",
    "55": "Active flipper combat robot testing lifter mechanism",
    "56": "Precision laser cutter fabricating acrylic bot chassis",
    "58": "IoT dashboard display checking temperature sensor data logs",
    "59": "Robotics workshop students learning motor driver shield wiring",
    "60": "Custom automated guided vehicle (AGV) platform frame",
    "62": "Team posing with championship banner at Coimbatore college fest",
    "63": "Robo Soccer pneumatic accumulator testing at laboratory",
    "64": "Drift-tuned tires of RC Robo Race robot platform",
    "65": "Ultrasonic sensor array of autonomous maze solver micromouse",
    "66": "SMD components reflow soldering process on custom motherboard",
    "67": "Mentors guiding students during 24-hour robotics hackathon",
    "j14": "Students presenting custom robotics kit at tech fest championship",
    "j15": "Robo Soccer competition matches in progress on stadium course",
    "j16": "Active robotic sumo bot test fight in circular arena ring",
    "j17": "STEM lab setup student training session in Coimbatore school",
    "j18": "Interactive workshop session on Arduino microcontroller coding",
    "j19": "Coimbatore team receiving first prize award at national robotics fest",
    "j20": "Close-up of customized RC transmitter controller handles"
  };

  return mappings[nameWithoutExt] || `TamizhTech Robotics laboratory project snapshot - ${filename}`;
}

export function GalleryGrid({ images, className }: GalleryGridProps) {
  const [index, setIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (index === null) return;
    setIndex((index - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (index === null) return;
    setIndex((index + 1) % images.length);
  };

  return (
    <>
      <div className={cn("grid grid-cols-2 md:grid-cols-3 gap-6", className)}>
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer border border-border/40 shadow-sm"
            onClick={() => setIndex(idx)}
          >
            <Image
              src={src}
              alt={getDescriptiveAlt(src)}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm">
                View Image
              </span>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
            onClick={() => setIndex(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={() => setIndex(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative max-w-[85vw] max-h-[85vh] aspect-[4/3] w-full md:w-[70vw]">
              <Image
                src={images[index]}
                alt={getDescriptiveAlt(images[index])}
                fill
                className="object-contain"
                priority
              />
            </div>

            <button
              className="absolute right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={handleNext}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
