"use client";

import React, { Suspense } from "react";
import { Icons } from "@/components/docs/icons";
import { IconsFallback } from "@/components/docs/icons-fallback";

export default function IconsDocsPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
            Icons
          </h1>
          <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
            Beautiful Lucide Icons animated dynamically with Framer Motion. Hover over them to see animations.
          </p>
        </header>

        <section className="bg-white dark:bg-zinc-900/50 rounded-3xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800/80 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-zinc-100 px-4">
            Interactive Icon Showcase
          </h2>
          <Suspense fallback={<IconsFallback />}>
            <Icons />
          </Suspense>
        </section>

        <footer className="mt-16 text-center text-sm text-zinc-400 dark:text-zinc-500">
          <p>Import these icons from <code>@/components/docs/icons</code> to add micro-interactions anywhere.</p>
        </footer>
      </div>
    </main>
  );
}
