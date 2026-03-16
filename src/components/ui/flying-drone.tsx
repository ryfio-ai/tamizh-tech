"use client";
import React from "react";
import Image from "next/image";

export function FlyingDrone() {
  return (
    <>
      <style jsx global>{`
        @keyframes droneLeftToRight {
          0% {
            left: -140px;
          }
          100% {
            left: 105vw;
          }
        }

        @keyframes droneUpDown {
          0%, 100% {
            top: 30vh;
          }
          25% {
            top: 10vh;
          }
          50% {
            top: 50vh;
          }
          75% {
            top: 15vh;
          }
        }

        @keyframes droneBob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .drone-move {
          animation: droneLeftToRight 20s linear infinite, droneUpDown 20s ease-in-out infinite;
        }
        .drone-bob {
          animation: droneBob 1.5s ease-in-out infinite;
        }
      `}</style>

      <div className="drone-move fixed z-[60] pointer-events-none">
        <div className="drone-bob">
          {/* eslint-disable-next-line @typescript-eslint/no-require-imports */}
          <Image
            src={require("@/public/pic/drone.png")}
            alt="Flying Drone"
            width={110}
            height={110}
            className="object-contain drop-shadow-[0_0_20px_rgba(0,243,255,0.4)]"
          />
        </div>
      </div>
    </>
  );
}
