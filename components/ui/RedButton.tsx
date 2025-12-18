"use client";

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
        target="_blank"
        rel="noopener noreferrer"
      >
        {textPassed}
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
