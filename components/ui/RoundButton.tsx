"use client";

import { ArrowRight } from "lucide-react";

interface RoundButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function RoundButton({
  onClick,
  className = "",
}: RoundButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-white border-[#EA4025] rounded-full flex items-center justify-center text-[#EA4025] hover:bg-[#f9d6d0] transition-colors duration-200 ${className}`}
      style={{
        width: "var(--width-square-size)",
        height: "var(--height-square-size)",
        borderWidth: "var(--border-width-square)",
      }}
    >
      <ArrowRight
        className="text-[#EA4025]"
        strokeWidth={3}
        strokeLinejoin="miter"
        style={{ width: "50%", height: "50%" }}
      />
    </button>
  );
}
