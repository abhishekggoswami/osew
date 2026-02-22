"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Propellers Card
export const PropellersCard = ({ children, href = "/products/propellers" }: { children: React.ReactNode; href?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>("left");
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const direction = getDirection(event, ref.current);
    setDirection(direction);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getDirection = (ev: React.MouseEvent<HTMLDivElement>, obj: HTMLDivElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return ["top", "right", "bottom", "left"][d] || "left";
  };

  return (
    <div ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative overflow-hidden rounded-2xl bg-muted aspect-square border border-border">
      <Link href={href} className="absolute inset-0 z-20 pointer-events-auto">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-21%20183235-2Yq9PqhQeXP4EF4c6QgdDATOhjqDO8.png" alt="Marine Propellers" className="w-full h-full object-cover propellers-card-image-unique" />
      </Link>
      <div className={cn("absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-start p-6 transition-all duration-500 pointer-events-none",
        isHovering ? "opacity-100" : "opacity-0",
        direction === "top" && (isHovering ? "translate-y-0" : "-translate-y-full"),
        direction === "bottom" && (isHovering ? "translate-y-0" : "translate-y-full"),
        direction === "left" && (isHovering ? "translate-x-0" : "-translate-x-full"),
        direction === "right" && (isHovering ? "translate-x-0" : "translate-x-full")
      )}>{children}</div>
    </div>
  );
};

// Power Blocks Card
export const PowerBlocksCard = ({ children, href = "/products/power-blocks" }: { children: React.ReactNode; href?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>("left");
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const direction = getDirection(event, ref.current);
    setDirection(direction);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getDirection = (ev: React.MouseEvent<HTMLDivElement>, obj: HTMLDivElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return ["top", "right", "bottom", "left"][d] || "left";
  };

  return (
    <div ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative overflow-hidden rounded-2xl bg-muted aspect-square border border-border">
      <Link href={href} className="absolute inset-0 z-20 pointer-events-auto">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_q4ikcaq4ikcaq4ik-4y2MpbJamk3luxS65QvXICn7Wb18x1.png" alt="Hydraulic Power Blocks" className="w-full h-full object-cover power-blocks-card-image-unique" />
      </Link>
      <div className={cn("absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-start p-6 transition-all duration-500 pointer-events-none",
        isHovering ? "opacity-100" : "opacity-0",
        direction === "top" && (isHovering ? "translate-y-0" : "-translate-y-full"),
        direction === "bottom" && (isHovering ? "translate-y-0" : "translate-y-full"),
        direction === "left" && (isHovering ? "translate-x-0" : "-translate-x-full"),
        direction === "right" && (isHovering ? "translate-x-0" : "translate-x-full")
      )}>{children}</div>
    </div>
  );
};

// Power Steering Card
export const PowerSteeringCard = ({ children, href = "/products/power-steering" }: { children: React.ReactNode; href?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>("left");
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const direction = getDirection(event, ref.current);
    setDirection(direction);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getDirection = (ev: React.MouseEvent<HTMLDivElement>, obj: HTMLDivElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return ["top", "right", "bottom", "left"][d] || "left";
  };

  return (
    <div ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative overflow-hidden rounded-2xl bg-muted aspect-square border border-border">
      <Link href={href} className="absolute inset-0 z-20 pointer-events-auto">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_ybuzgoybuzgoybuz-LgOzVt59pAPjBRCIdqEelwiHT2nTd6.png" alt="Power Steering System" className="w-full h-full object-cover power-steering-card-image-unique" />
      </Link>
      <div className={cn("absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-start p-6 transition-all duration-500 pointer-events-none",
        isHovering ? "opacity-100" : "opacity-0",
        direction === "top" && (isHovering ? "translate-y-0" : "-translate-y-full"),
        direction === "bottom" && (isHovering ? "translate-y-0" : "translate-y-full"),
        direction === "left" && (isHovering ? "translate-x-0" : "-translate-x-full"),
        direction === "right" && (isHovering ? "translate-x-0" : "translate-x-full")
      )}>{children}</div>
    </div>
  );
};

// Hydraulic Winches Card
export const HydraulicWinchesCard = ({ children, href = "/products/hydraulic-winches" }: { children: React.ReactNode; href?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>("left");
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const direction = getDirection(event, ref.current);
    setDirection(direction);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getDirection = (ev: React.MouseEvent<HTMLDivElement>, obj: HTMLDivElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return ["top", "right", "bottom", "left"][d] || "left";
  };

  return (
    <div ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative overflow-hidden rounded-2xl bg-muted aspect-square border border-border">
      <Link href={href} className="absolute inset-0 z-20 pointer-events-auto">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_quix2cquix2cquix%20%281%29-fxE6LFRnq3L1l3AIChjHtlDsNMXMya.png" alt="Hydraulic Lifting Winches" className="w-full h-full object-cover hydraulic-winches-card-image-unique" />
      </Link>
      <div className={cn("absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-start p-6 transition-all duration-500 pointer-events-none",
        isHovering ? "opacity-100" : "opacity-0",
        direction === "top" && (isHovering ? "translate-y-0" : "-translate-y-full"),
        direction === "bottom" && (isHovering ? "translate-y-0" : "translate-y-full"),
        direction === "left" && (isHovering ? "translate-x-0" : "-translate-x-full"),
        direction === "right" && (isHovering ? "translate-x-0" : "translate-x-full")
      )}>{children}</div>
    </div>
  );
};

// Hydraulic Steering Card
export const HydraulicSteeringCard = ({ children, href = "/products/hydraulic-steering" }: { children: React.ReactNode; href?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>("left");
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const direction = getDirection(event, ref.current);
    setDirection(direction);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getDirection = (ev: React.MouseEvent<HTMLDivElement>, obj: HTMLDivElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return ["top", "right", "bottom", "left"][d] || "left";
  };

  return (
    <div ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative overflow-hidden rounded-2xl bg-muted aspect-square border border-border">
      <Link href={href} className="absolute inset-0 z-20 pointer-events-auto">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_img30yimg30yimg3-ihS2hNNtk1sqRriSi8wk8tyTKJXBO1.png" alt="Hydraulic Steering System" className="w-full h-full object-cover hydraulic-steering-card-image-unique" />
      </Link>
      <div className={cn("absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-start p-6 transition-all duration-500 pointer-events-none",
        isHovering ? "opacity-100" : "opacity-0",
        direction === "top" && (isHovering ? "translate-y-0" : "-translate-y-full"),
        direction === "bottom" && (isHovering ? "translate-y-0" : "translate-y-full"),
        direction === "left" && (isHovering ? "translate-x-0" : "-translate-x-full"),
        direction === "right" && (isHovering ? "translate-x-0" : "translate-x-full")
      )}>{children}</div>
    </div>
  );
};

// Stern Tube Card
export const SternTubeCard = ({ children, href = "/products/stern-tube" }: { children: React.ReactNode; href?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>("left");
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const direction = getDirection(event, ref.current);
    setDirection(direction);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getDirection = (ev: React.MouseEvent<HTMLDivElement>, obj: HTMLDivElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return ["top", "right", "bottom", "left"][d] || "left";
  };

  return (
    <div ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative overflow-hidden rounded-2xl bg-muted aspect-square border border-border">
      <Link href={href} className="absolute inset-0 z-20 pointer-events-auto">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_dytdz8dytdz8dytd-kRRBP7R8kpBhgCVqJqdj87SXDQAalC.png" alt="Stern Tube Systems" className="w-full h-full object-cover stern-tube-card-image-unique" />
      </Link>
      <div className={cn("absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-start p-6 transition-all duration-500 pointer-events-none",
        isHovering ? "opacity-100" : "opacity-0",
        direction === "top" && (isHovering ? "translate-y-0" : "-translate-y-full"),
        direction === "bottom" && (isHovering ? "translate-y-0" : "translate-y-full"),
        direction === "left" && (isHovering ? "translate-x-0" : "-translate-x-full"),
        direction === "right" && (isHovering ? "translate-x-0" : "translate-x-full")
      )}>{children}</div>
    </div>
  );
};

// Bearings Card
export const BearingsCard = ({ children, href = "/products/bearings" }: { children: React.ReactNode; href?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>("left");

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const direction = getDirection(event, ref.current);
    setDirection(direction);
  };

  const getDirection = (ev: React.MouseEvent<HTMLDivElement>, obj: HTMLDivElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return ["top", "right", "bottom", "left"][d] || "left";
  };

  return (
    <div ref={ref} onMouseEnter={handleMouseEnter} className="relative overflow-hidden rounded-2xl group/card bg-muted aspect-square border border-border">
      <Link href={href} className="absolute inset-0 z-20">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_thgpz6thgpz6thgp-xVBXcSXpLBE8RH12wsks3eTYjEj2MX.png" alt="Water-Lubricated Bearings" className="w-full h-full object-cover bearings-card-image-unique" />
      </Link>
      <div className={cn("absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-start p-6 transition-all duration-500 opacity-0 group-hover/card:opacity-100",
        direction === "top" && "-translate-y-full group-hover/card:translate-y-0",
        direction === "bottom" && "translate-y-full group-hover/card:translate-y-0",
        direction === "left" && "-translate-x-full group-hover/card:translate-x-0",
        direction === "right" && "translate-x-full group-hover/card:translate-x-0")}>{children}</div>
    </div>
  );
};

// Brackets Card
export const BracketsCard = ({ children, href = "/products/brackets" }: { children: React.ReactNode; href?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>("left");

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const direction = getDirection(event, ref.current);
    setDirection(direction);
  };

  const getDirection = (ev: React.MouseEvent<HTMLDivElement>, obj: HTMLDivElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return ["top", "right", "bottom", "left"][d] || "left";
  };

  return (
    <div ref={ref} onMouseEnter={handleMouseEnter} className="relative overflow-hidden rounded-2xl group/card bg-muted aspect-square border border-border">
      <Link href={href} className="absolute inset-0 z-20">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-21%20183316-F2W6YNaWLzOyXE238J4WNrILyKy5Tf.png" alt="Marine Brackets" className="w-full h-full object-cover brackets-card-image-unique" />
      </Link>
      <div className={cn("absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-start p-6 transition-all duration-500 opacity-0 group-hover/card:opacity-100",
        direction === "top" && "-translate-y-full group-hover/card:translate-y-0",
        direction === "bottom" && "translate-y-full group-hover/card:translate-y-0",
        direction === "left" && "-translate-x-full group-hover/card:translate-x-0",
        direction === "right" && "translate-x-full group-hover/card:translate-x-0")}>{children}</div>
    </div>
  );
};

// Shafts Card
export const ShaftsCard = ({ children, href = "/products/shaft" }: { children: React.ReactNode; href?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>("left");

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const direction = getDirection(event, ref.current);
    setDirection(direction);
  };

  const getDirection = (ev: React.MouseEvent<HTMLDivElement>, obj: HTMLDivElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return ["top", "right", "bottom", "left"][d] || "left";
  };

  return (
    <div ref={ref} onMouseEnter={handleMouseEnter} className="relative overflow-hidden rounded-2xl group/card bg-muted aspect-square border border-border">
      <Link href={href} className="absolute inset-0 z-20">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Feb%2019%2C%202026%2C%2007_34_32%20PM-tJtyQlmtPdVR7h5rUaLHBQAE6Ccq49.png" alt="Propeller Shafts" className="w-full h-full object-cover shafts-card-image-unique" />
      </Link>
      <div className={cn("absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-start p-6 transition-all duration-500 opacity-0 group-hover/card:opacity-100",
        direction === "top" && "-translate-y-full group-hover/card:translate-y-0",
        direction === "bottom" && "translate-y-full group-hover/card:translate-y-0",
        direction === "left" && "-translate-x-full group-hover/card:translate-x-0",
        direction === "right" && "translate-x-full group-hover/card:translate-x-0")}>{children}</div>
    </div>
  );
};

// PSS Seal Card
export const PSSSealCard = ({ children, href = "/products/pss-shaft-seal" }: { children: React.ReactNode; href?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>("left");

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const direction = getDirection(event, ref.current);
    setDirection(direction);
  };

  const getDirection = (ev: React.MouseEvent<HTMLDivElement>, obj: HTMLDivElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return ["top", "right", "bottom", "left"][d] || "left";
  };

  return (
    <div ref={ref} onMouseEnter={handleMouseEnter} className="relative overflow-hidden rounded-2xl group/card bg-muted aspect-square border border-border">
      <Link href={href} className="absolute inset-0 z-20">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-21%20183448-7SbeEP4XAIXznEXIumChAPukeVw5Bk.png" alt="PSS Shaft Seal" className="w-full h-full object-cover pss-seal-card-image-unique" />
      </Link>
      <div className={cn("absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-start p-6 transition-all duration-500 opacity-0 group-hover/card:opacity-100",
        direction === "top" && "-translate-y-full group-hover/card:translate-y-0",
        direction === "bottom" && "translate-y-full group-hover/card:translate-y-0",
        direction === "left" && "-translate-x-full group-hover/card:translate-x-0",
        direction === "right" && "translate-x-full group-hover/card:translate-x-0")}>{children}</div>
    </div>
  );
};

// Accessories Card
export const AccessoriesCard = ({ children, href = "/products/accessories" }: { children: React.ReactNode; href?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>("left");

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const direction = getDirection(event, ref.current);
    setDirection(direction);
  };

  const getDirection = (ev: React.MouseEvent<HTMLDivElement>, obj: HTMLDivElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return ["top", "right", "bottom", "left"][d] || "left";
  };

  return (
    <div ref={ref} onMouseEnter={handleMouseEnter} className="relative overflow-hidden rounded-2xl group/card bg-muted aspect-square border border-border">
      <Link href={href} className="absolute inset-0 z-20">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-21%20183732-sPVKg61OPQY6qYYgFyBmwOYopY2gdZ.png" alt="Stern Gear Accessories" className="w-full h-full object-cover accessories-card-image-unique" />
      </Link>
      <div className={cn("absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-start p-6 transition-all duration-500 opacity-0 group-hover/card:opacity-100",
        direction === "top" && "-translate-y-full group-hover/card:translate-y-0",
        direction === "bottom" && "translate-y-full group-hover/card:translate-y-0",
        direction === "left" && "-translate-x-full group-hover/card:translate-x-0",
        direction === "right" && "translate-x-full group-hover/card:translate-x-0")}>{children}</div>
    </div>
  );
};

// Hydraulic Winch Card
export const HydraulicWinchCard = ({ children, href = "/products/hydraulic-winch" }: { children: React.ReactNode; href?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>("left");

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const direction = getDirection(event, ref.current);
    setDirection(direction);
  };

  const getDirection = (ev: React.MouseEvent<HTMLDivElement>, obj: HTMLDivElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return ["top", "right", "bottom", "left"][d] || "left";
  };

  return (
    <div ref={ref} onMouseEnter={handleMouseEnter} className="relative overflow-hidden rounded-2xl group/card bg-muted aspect-square border border-border">
      <Link href={href} className="absolute inset-0 z-20">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_inenpoinenpoinen-YQDlfzWoCsWvmyBTbkQaZZDcad2i1S.png" alt="Hydraulic Winch" className="w-full h-full object-cover hydraulic-winch-card-image-unique" />
      </Link>
      <div className={cn("absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-start p-6 transition-all duration-500 opacity-0 group-hover/card:opacity-100",
        direction === "top" && "-translate-y-full group-hover/card:translate-y-0",
        direction === "bottom" && "translate-y-full group-hover/card:translate-y-0",
        direction === "left" && "-translate-x-full group-hover/card:translate-x-0",
        direction === "right" && "translate-x-full group-hover/card:translate-x-0")}>{children}</div>
    </div>
  );
};

// Rudder Card
export const RudderCard = ({ children, href = "/products/rudder" }: { children: React.ReactNode; href?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>("left");

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const direction = getDirection(event, ref.current);
    setDirection(direction);
  };

  const getDirection = (ev: React.MouseEvent<HTMLDivElement>, obj: HTMLDivElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return ["top", "right", "bottom", "left"][d] || "left";
  };

  return (
    <div ref={ref} onMouseEnter={handleMouseEnter} className="relative overflow-hidden rounded-2xl group/card bg-muted aspect-square border border-border">
      <Link href={href} className="absolute inset-0 z-20">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-21%20183654-3Q7MfLYVUMlbXpyEMwNQymN8WcS3po.png" alt="Rudder Systems" className="w-full h-full object-cover rudder-card-image-unique" />
      </Link>
      <div className={cn("absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-start p-6 transition-all duration-500 opacity-0 group-hover/card:opacity-100",
        direction === "top" && "-translate-y-full group-hover/card:translate-y-0",
        direction === "bottom" && "translate-y-full group-hover/card:translate-y-0",
        direction === "left" && "-translate-x-full group-hover/card:translate-x-0",
        direction === "right" && "translate-x-full group-hover/card:translate-x-0")}>{children}</div>
    </div>
  );
};
