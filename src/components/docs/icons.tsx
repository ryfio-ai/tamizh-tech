"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Home,
  Settings,
  Bell,
  Heart,
  Search,
  Mail,
  Trash2,
  Share2,
  Download,
  Upload,
  Play,
  Camera,
  LucideProps
} from "lucide-react";

// Types
interface AnimatedIconProps extends LucideProps {
  className?: string;
  size?: number;
}

// 1. Animated Home (bounces up and down)
export const AnimatedHome: React.FC<AnimatedIconProps> = ({ size = 24, className, ...props }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="inline-flex items-center justify-center cursor-pointer"
    >
      <Home size={size} className={className} {...props} />
    </motion.div>
  );
};

// 2. Animated Settings (rotates on hover)
export const AnimatedSettings: React.FC<AnimatedIconProps> = ({ size = 24, className, ...props }) => {
  return (
    <motion.div
      whileHover={{ rotate: 180 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="inline-flex items-center justify-center cursor-pointer"
    >
      <Settings size={size} className={className} {...props} />
    </motion.div>
  );
};

// 3. Animated Bell (rings / tilts left and right)
export const AnimatedBell: React.FC<AnimatedIconProps> = ({ size = 24, className, ...props }) => {
  return (
    <motion.div
      whileHover={{
        rotate: [0, -15, 12, -10, 8, -4, 0],
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="inline-flex items-center justify-center cursor-pointer"
      style={{ originX: 0.5, originY: 0 }}
    >
      <Bell size={size} className={className} {...props} />
    </motion.div>
  );
};

// 4. Animated Heart (heartbeat pulse)
export const AnimatedHeart: React.FC<AnimatedIconProps> = ({ size = 24, className, ...props }) => {
  return (
    <motion.div
      whileHover={{
        scale: [1, 1.25, 1.1, 1.25, 1],
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        times: [0, 0.25, 0.45, 0.7, 1],
      }}
      className="inline-flex items-center justify-center cursor-pointer"
    >
      <Heart size={size} className={className} {...props} />
    </motion.div>
  );
};

// 5. Animated Search (shifts scale and position)
export const AnimatedSearch: React.FC<AnimatedIconProps> = ({ size = 24, className, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.15, x: 2, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className="inline-flex items-center justify-center cursor-pointer"
    >
      <Search size={size} className={className} {...props} />
    </motion.div>
  );
};

// 6. Animated Mail (flaps / tilts)
export const AnimatedMail: React.FC<AnimatedIconProps> = ({ size = 24, className, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 12 }}
      className="inline-flex items-center justify-center cursor-pointer"
    >
      <Mail size={size} className={className} {...props} />
    </motion.div>
  );
};

// 7. Animated Trash (shakes / vibrates)
export const AnimatedTrash: React.FC<AnimatedIconProps> = ({ size = 24, className, ...props }) => {
  return (
    <motion.div
      whileHover={{
        x: [0, -2, 2, -2, 2, 0],
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="inline-flex items-center justify-center cursor-pointer"
    >
      <Trash2 size={size} className={className} {...props} />
    </motion.div>
  );
};

// 8. Animated Share (pulses and scales up)
export const AnimatedShare: React.FC<AnimatedIconProps> = ({ size = 24, className, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 400, damping: 8 }}
      className="inline-flex items-center justify-center cursor-pointer"
    >
      <Share2 size={size} className={className} {...props} />
    </motion.div>
  );
};

// 9. Animated Download (arrow slides down)
export const AnimatedDownload: React.FC<AnimatedIconProps> = ({ size = 24, className, ...props }) => {
  const controls = useAnimation();
  const handleHoverStart = () => {
    controls.start({
      y: [0, 4, -4, 0],
      transition: { duration: 0.5, ease: "easeInOut" }
    });
  };

  return (
    <motion.div
      onHoverStart={handleHoverStart}
      animate={controls}
      className="inline-flex items-center justify-center cursor-pointer"
    >
      <Download size={size} className={className} {...props} />
    </motion.div>
  );
};

// 10. Animated Upload (arrow slides up)
export const AnimatedUpload: React.FC<AnimatedIconProps> = ({ size = 24, className, ...props }) => {
  const controls = useAnimation();
  const handleHoverStart = () => {
    controls.start({
      y: [0, -4, 4, 0],
      transition: { duration: 0.5, ease: "easeInOut" }
    });
  };

  return (
    <motion.div
      onHoverStart={handleHoverStart}
      animate={controls}
      className="inline-flex items-center justify-center cursor-pointer"
    >
      <Upload size={size} className={className} {...props} />
    </motion.div>
  );
};

// 11. Animated Play (scales up and glows)
export const AnimatedPlay: React.FC<AnimatedIconProps> = ({ size = 24, className, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className="inline-flex items-center justify-center cursor-pointer"
    >
      <Play size={size} className={className} {...props} />
    </motion.div>
  );
};

// 12. Animated Camera (shutter click effect)
export const AnimatedCamera: React.FC<AnimatedIconProps> = ({ size = 24, className, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="inline-flex items-center justify-center cursor-pointer"
    >
      <Camera size={size} className={className} {...props} />
    </motion.div>
  );
};

// Catalog configuration
const iconList = [
  { name: "Home", Component: AnimatedHome, desc: "Bounce motion on hover" },
  { name: "Settings", Component: AnimatedSettings, desc: "Rotation motion on hover" },
  { name: "Bell", Component: AnimatedBell, desc: "Ringing motion on hover" },
  { name: "Heart", Component: AnimatedHeart, desc: "Pulse heartbeat motion on hover" },
  { name: "Search", Component: AnimatedSearch, desc: "Corner shift motion on hover" },
  { name: "Mail", Component: AnimatedMail, desc: "Tilt slide motion on hover" },
  { name: "Trash", Component: AnimatedTrash, desc: "Shake motion on hover" },
  { name: "Share", Component: AnimatedShare, desc: "Scale pulse motion on hover" },
  { name: "Download", Component: AnimatedDownload, desc: "Arrow downward cycle on hover" },
  { name: "Upload", Component: AnimatedUpload, desc: "Arrow upward cycle on hover" },
  { name: "Play", Component: AnimatedPlay, desc: "Scale rotate motion on hover" },
  { name: "Camera", Component: AnimatedCamera, desc: "Click pulse motion on hover" },
];

export const Icons: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
      {iconList.map(({ name, Component, desc }) => (
        <div
          key={name}
          className="flex flex-col items-center justify-center p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-md transition-all group"
        >
          <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl group-hover:bg-violet-50 dark:group-hover:bg-violet-950/30 transition-all duration-300 text-zinc-700 dark:text-zinc-300 group-hover:text-violet-600 dark:group-hover:text-violet-400">
            <Component size={32} />
          </div>
          <span className="mt-3 font-semibold text-zinc-900 dark:text-zinc-100 text-sm">{name}</span>
          <span className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 text-center">{desc}</span>
        </div>
      ))}
    </div>
  );
};

export default Icons;
