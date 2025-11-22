interface RedButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function RedButton({
  text,
  onClick,
  className = "",
}: RedButtonProps) {
  return (
    <button
      onClick={onClick}
      // Replaced text-[clamp(...)] with fluid-title
      className={`bg-[#EA4025] text-white w-40 h-8 rounded-full relative left-3 -bottom-4 hover:bg-[#c53020] transition-colors duration-200 font-bold fluid-title ${className}`}
    >
      {text}
    </button>
  );
}
