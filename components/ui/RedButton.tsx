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
  
  const baseClasses = `
    absolute bottom-4 left-2 z-10 transform translate-y-1/2
    text-medium
    bg-[#EA4025] 
    text-white 
    h-4 
    rounded-full 
    hover:bg-[#c53020] 
    transition-colors 
    duration-200 
    font-bold 
    fluid-title 
    px-2.5 
    inline-block
    w-fit
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
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
      className={baseClasses}
    >
      {textPassed}
    </button>
  );
}