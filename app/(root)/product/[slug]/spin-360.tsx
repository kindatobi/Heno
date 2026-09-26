"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Spin360PairProps = {
  left?: string[] | null;
  right?: string[] | null;
  name: string;
  sizes: string;
  className: string;
};

// All frames are rendered stacked and only the current one is visible, so a tick
// never changes an image src (which would refetch and flash the background).
export default function Spin360Pair({
  left,
  right,
  name,
  sizes,
  className,
}: Spin360PairProps) {
  const [index, setIndex] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);

  const frameCount = left?.length ?? right?.length ?? 0;
  const totalFrames = (left?.length ?? 0) + (right?.length ?? 0);
  // Frames in a hidden layout never load, so its spin never starts
  const ready = totalFrames > 0 && loadedCount >= totalFrames;

  useEffect(() => {
    if (!ready) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % frameCount);
    }, 1000);
    return () => clearInterval(interval);
  }, [ready, frameCount]);

  const onFrameLoad = () => setLoadedCount((prev) => prev + 1);

  return (
    <div className={className}>
      {left && (
        <Spin360
          frames={left}
          alt={`${name} - left view`}
          sizes={sizes}
          index={index}
          onFrameLoad={onFrameLoad}
        />
      )}
      {right && (
        <Spin360
          frames={right}
          alt={`${name} - right view`}
          sizes={sizes}
          index={index}
          onFrameLoad={onFrameLoad}
        />
      )}
    </div>
  );
}

function Spin360({
  frames,
  alt,
  sizes,
  index,
  onFrameLoad,
}: {
  frames: string[];
  alt: string;
  sizes: string;
  index: number;
  onFrameLoad: () => void;
}) {
  return (
    <div className="relative w-1/2 aspect-[93/200]">
      {frames.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`${alt} ${i + 1}`}
          fill
          sizes={sizes}
          // opacity, not display:none, so hidden frames still load and decode
          className={`object-cover ${i === index ? "opacity-100" : "opacity-0"}`}
          // Only the first frame is urgent; the rest stay lazy so a CSS-hidden layout skips them
          priority={i === 0}
          onLoad={onFrameLoad}
          // Count failures too, so one broken frame can't stop the spin from starting
          onError={onFrameLoad}
        />
      ))}
    </div>
  );
}
