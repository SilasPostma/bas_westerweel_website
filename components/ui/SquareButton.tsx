interface SquareButtonProps {
  rows: { text: string; align?: "left" | "right" }[];
  onClick?: () => void;
  className?: string;
  // Added props used by callers in `app/page.tsx`
  sceneId?: string;
  onSceneChange?: (id: string) => void;
  isActive?: boolean;
}

export default function SquareButton({
  rows,
  sceneId,
  onClick,
  onSceneChange,
  isActive,
  className = "",
}: SquareButtonProps) {
  const handleClick = () => {
    if (typeof sceneId !== "undefined" && onSceneChange) {
      onSceneChange(sceneId);
    }
  };
  // Ensure exactly 3 rows by filling missing ones with empty strings
  const filledRows = [...rows];
  while (filledRows.length < 3) filledRows.push({ text: "", align: "left" });

  const baseColor = isActive
    ? "bg-[#EA4025] text-white"
    : "bg-white text-[#EA4025]";

  return (
    <button
      onClick={handleClick}
      className={`w-square-size h-square-size
                  border-square ${baseColor} border-[#EA4025]
                  flex flex-col
                  box-border hover:bg-[#EA4025] hover:text-white transition-colors duration-200
                   font-extrabold text-square overflow-hidden
                  ${className}`}
    >
      {filledRows.map((row, i) => {
        const isEmpty = typeof row.text === "string" && row.text.trim() === "";
        const alignClass =
          row.align === "right" ? "justify-end" : "justify-start";
        return (
          <div
            key={i}
            className={`flex-1 w-full flex items-center ${alignClass} leading-none overflow-hidden px-0.5`}
          >
            <span className="whitespace-pre-wrap wrap-break-word">
              {isEmpty ? "\u00A0" : row.text}
            </span>
          </div>
        );
      })}
    </button>
  );
}
