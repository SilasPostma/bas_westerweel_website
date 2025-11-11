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
      className={`w-[clamp(60px,9vh,225px)] h-[clamp(60px,9vh,225px)]
              border-[clamp(2px,1.5vh,8px)]
              bg-white border-[#EA4025]
              rounded-full
              flex items-center justify-center
              text-[#EA4025]
              hover:bg-[#f9d6d0]
              transition-colors duration-200
              ${className}`}
    >
      <ArrowRight
        className="w-[clamp(40px,6vh,48px)] h-[clamp(40px,6vh,48px)]"
        strokeWidth={3}
        // strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </button>
  );
}
