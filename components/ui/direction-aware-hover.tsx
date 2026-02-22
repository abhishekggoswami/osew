"use client";
import { useRef, useState } from "react";
import React from "react"

import { cn } from "@/lib/utils";

interface DirectionAwareHoverProps {
  imageUrl: string;
  children: React.ReactNode;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
  id?: string;
}

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
  id,
}: DirectionAwareHoverProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>("left");

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    setDirection(direction);
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement>,
    obj: HTMLDivElement
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

    return ["top", "right", "bottom", "left"][d] || "left";
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      data-card-id={id}
      className={cn(
        "relative overflow-hidden rounded-2xl group/card bg-muted",
        className
      )}
    >
      <img
        key={imageUrl}
        src={imageUrl}
        alt="Background"
        className={cn(
          "w-full h-full object-cover",
          imageClassName
        )}
      />

      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-start p-6 transition-all duration-500 opacity-0 group-hover/card:opacity-100",
          direction === "top" && "-translate-y-full group-hover/card:translate-y-0",
          direction === "bottom" && "translate-y-full group-hover/card:translate-y-0",
          direction === "left" && "-translate-x-full group-hover/card:translate-x-0",
          direction === "right" && "translate-x-full group-hover/card:translate-x-0",
          childrenClassName
        )}
      >
        {children}
      </div>
    </div>
  );
};
