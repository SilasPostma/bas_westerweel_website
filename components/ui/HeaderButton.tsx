interface HeaderButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    sceneId?: string;
    onSceneChange?: (id: string) => void;
    isActive?: boolean;
}

export default function HeaderButton({
  text,
  sceneId,
  onClick,
  onSceneChange,
  isActive,
  className = "",
}: HeaderButtonProps) {
  const handleClick = () => {
    if (typeof sceneId !== "undefined" && onSceneChange) {
      onSceneChange(sceneId);
    }
  };
  const baseColor = isActive
    ? "bg-[#EA4025] text-white"
    : "bg-white text-[#EA4025]";

  return (
    <button
      onClick={handleClick}
      className={`${baseColor}
                hover:bg-[#EA4025] hover:text-white transition-colors duration-200
                text-medium font-bold px-1
                ${className}`}>{text}</button>
  );
}