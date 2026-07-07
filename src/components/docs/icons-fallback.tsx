"use client";

import React from "react";

export const IconsFallback: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4 animate-pulse">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm"
        >
          <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-xl" />
          <div className="w-16 h-4 mt-3 bg-zinc-100 dark:bg-zinc-800 rounded" />
          <div className="w-24 h-3 mt-2 bg-zinc-100 dark:bg-zinc-800 rounded" />
        </div>
      ))}
    </div>
  );
};

export default IconsFallback;
