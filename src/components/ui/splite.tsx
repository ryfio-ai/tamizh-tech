'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Bot, RefreshCw } from 'lucide-react';

// Class boundary to catch rendering errors inside client-side components
class SplineErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Spline boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Dynamically import Spline and catch chunk loading rejections (e.g. offline status)
const Spline = dynamic(
  () => import('@splinetool/react-spline')
    .catch((err) => {
      console.warn("Spline library chunk load failed, fallback will be used:", err);
      return { default: () => null };
    }),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-zinc-950/20 text-accent">
        <svg className="animate-spin h-8 w-8 text-accent mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
        </svg>
      </div>
    )
  }
);

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isReachable, setIsReachable] = useState<boolean | null>(null);
  const [hasAsyncError, setHasAsyncError] = useState(false);

  useEffect(() => {
    let active = true;
    const controller = new AbortController();
    
    fetch(scene, { method: 'GET', mode: 'cors', signal: controller.signal })
      .then(() => {
        if (active) setIsReachable(true);
        controller.abort();
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.warn("Spline 3D scene is offline or unreachable; using static fallback.");
          if (active) setIsReachable(false);
        }
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, [scene]);

  // Global error listener to intercept async Three.js / Spline loader failures
  // (like Draco loader CSP blocks or offline WebGL fetch crashes).
  useEffect(() => {
    let active = true;

    const handleError = (event: ErrorEvent) => {
      const msg = event.message || '';
      const stack = event.error?.stack || '';
      if (
        msg.includes('Failed to fetch') ||
        stack.includes('spline') ||
        stack.includes('three') ||
        stack.includes('draco')
      ) {
        if (active) setHasAsyncError(true);
        event.preventDefault(); // Prevent Next.js/Browser Dev Overlay from popping up
      }
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason || {};
      const msg = reason.message || '';
      const stack = reason.stack || '';
      if (
        msg.includes('Failed to fetch') ||
        stack.includes('spline') ||
        stack.includes('three') ||
        stack.includes('draco')
      ) {
        if (active) setHasAsyncError(true);
        event.preventDefault(); // Prevent Next.js/Browser Dev Overlay from popping up
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);

    return () => {
      active = false;
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);

  // Beautiful fallback UI if Spline fails to fetch the 3D model or load the library
  const fallbackUI = (
    <div className={`w-full h-full min-h-[300px] flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-6 text-center ${className}`}>
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-4 animate-pulse">
        <Bot size={24} />
      </div>
      <h3 className="text-sm font-bold text-white mb-1">Interactive 3D Scene</h3>
      <p className="text-xs text-zinc-400 max-w-xs mb-3">
        Failed to load interactive preview.
      </p>
      <button 
        onClick={() => window.location.reload()} 
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold active:scale-95 transition-all cursor-pointer"
      >
        <RefreshCw size={10} />
        Retry
      </button>
    </div>
  );

  if (isReachable === null) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin"></span>
      </div>
    );
  }

  if (!isReachable || hasAsyncError) {
    return fallbackUI;
  }

  return (
    <SplineErrorBoundary fallback={fallbackUI}>
      <Spline
        scene={scene}
        className={className} 
      />
    </SplineErrorBoundary>
  );
}

export default SplineScene;
