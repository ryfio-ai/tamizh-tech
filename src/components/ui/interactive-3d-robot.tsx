'use client';

import React from 'react';

interface InteractiveRobotSplineProps {
  scene?: string; // Kept for prop signature backward compatibility
  className?: string;
}

export function InteractiveRobotSpline({ className }: InteractiveRobotSplineProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center min-h-[350px] ${className}`}>
      <iframe
        src="https://lottie.host/embed/bccfc6d5-3672-4da5-b16b-e8141f3651cb/IIrRMB7LBL.lottie"
        className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] border-none pointer-events-none"
        title="Lottie Robot Animation"
        allow="autoplay"
      />
    </div>
  );
}

export default InteractiveRobotSpline;
