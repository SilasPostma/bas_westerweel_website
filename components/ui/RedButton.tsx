"use client";

import React, { useState } from "react";

interface RedButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function RedButton({
  text,
  onClick,
  className = "",
  href,
}: RedButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleMailClick = async (e: React.MouseEvent) => {
    const email = "info@baswesterweel.com";
    if (href === `mailto:${email}`) {
      try {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Kon het email adres niet kopiëren:", err);
      }
    }
    if (onClick) onClick();
  };

  const textPassed = text == null ? "NO TEXT PASSED" : text;

  const baseStyle = {
    fontSize: "var(--text-medium)",
    height: "auto",
    paddingTop: "0.2rem",
    paddingBottom: "0.2rem",
  };

  const baseClasses = `
    absolute z-10
    bg-[#EA4025] 
    text-white 
    rounded-full 
    hover:bg-[#c53020] 
    transition-colors 
    duration-200 
    font-bold 
    px-3 
    inline-block
    w-fit
    flex 
    items-center 
    justify-center
    ${className}
  `;

  const positionStyle = {
    left: "var(--border-width-main)",
    bottom: "var(--border-width-main)",
  };

  if (href) {
    return (
      <a
        href={href}
        style={{ ...baseStyle, ...positionStyle }}
        className={baseClasses}
        onClick={handleMailClick}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noopener noreferrer"
      >
        {copied ? "EMAIL GEKOPIEËRD!" : textPassed}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      style={{ ...baseStyle, ...positionStyle }}
      className={baseClasses}
    >
      {textPassed}
    </button>
  );
}
