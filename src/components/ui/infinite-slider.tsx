'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
  showControls?: boolean;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
  showControls = true,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [isPaused, setIsPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  // Replace react-use-measure with native ResizeObserver
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setSize({ width: entry.contentRect.width, height: entry.contentRect.height });
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused) return;

    let controls: ReturnType<typeof animate> | undefined;
    const measuredSize = direction === 'horizontal' ? size.width : size.height;
    const contentSize = measuredSize + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration: currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: currentDuration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => { translation.set(from); },
      });
    }

    return controls?.stop;
  }, [key, translation, currentDuration, size.width, size.height, gap, isTransitioning, direction, reverse, isPaused]);

  const hoverProps = durationOnHover && !isPaused
    ? {
        onHoverStart: () => { setIsTransitioning(true); setCurrentDuration(durationOnHover); },
        onHoverEnd: () => { setIsTransitioning(true); setCurrentDuration(duration); },
      }
    : {};

  return (
    <div className={cn('overflow-hidden relative group/slider-container', className)}>
      <motion.div
        className='flex w-max'
        style={{
          ...(direction === 'horizontal' ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>

      {showControls && (
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="absolute bottom-2 right-2 px-2.5 py-1 rounded-full bg-white/90 hover:bg-white border border-border shadow-xs text-text-secondary hover:text-accent z-30 transition-all text-[10px] font-bold flex items-center gap-1 cursor-pointer"
          aria-label={isPaused ? "Play animation" : "Pause animation"}
        >
          {isPaused ? (
            <>
              <span className="text-[8px]">▶</span> Play
            </>
          ) : (
            <>
              <span className="text-[8px]">❚❚</span> Pause
            </>
          )}
        </button>
      )}
    </div>
  );
}
