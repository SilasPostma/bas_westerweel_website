interface SquareButtonProps {
  rows: { text: string; indent?: string }[];
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
  while (filledRows.length < 3) filledRows.push({ text: "", indent: "0em" });

  return (
    <button
      onClick={onClick}
      className={`w-[clamp(80px,13vh,300px)] h-[clamp(80px,13vh,300px)]
                  border-[clamp(2px,1.5vh,8px)] bg-white border-[#EA4025]
                  flex flex-col items-start justify-start
                  box-border hover:bg-[#f9d6d0] transition-colors duration-200
                  text-[#EA4025] font-extrabold text-[clamp(24px,3vh,40px)]
                  ${className}`}
    >
      {filledRows.map((row, i) => (
        <div
          key={i}
          className={`flex-1 w-full ${row.indent ? `pl-[${row.indent}]` : ""}`}
        >
          {row.text}
        </div>
      ))}
    </button>
  );
}
