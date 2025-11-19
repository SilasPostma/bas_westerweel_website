interface SquareButtonProps {
  rows: { text: string; align?: "left" | "right" }[];
  onClick?: () => void;
  className?: string;
}

export default function SquareButton({
  rows,
  onClick,
  className = "",
}: SquareButtonProps) {
  // Ensure exactly 3 rows by filling missing ones with empty strings
  const filledRows = [...rows];
  while (filledRows.length < 3) filledRows.push({ text: "", align: "left" });

  return (
    <button
      onClick={onClick}
      className={`w-[clamp(80px,13vh,300px)] h-[clamp(80px,13vh,300px)]
                  border-[clamp(2px,1.5vh,8px)] bg-white border-[#EA4025]
                  flex flex-col
                  box-border hover:bg-[#f9d6d0] transition-colors duration-200
                  text-[#EA4025] font-extrabold text-[clamp(22px,2.5vh,30px)] overflow-hidden
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
