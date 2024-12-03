import { useDroppable } from "@dnd-kit/core";

const SquareBox = ({ row, col, children }) => {
  const isDark = (row + col) % 2 === 1;

  const { isOver, setNodeRef } = useDroppable({
    id: `${row}-${col}`,
  });

  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center justify-center border border-black h-[60px]  ${isDark ? "bg-black" : "bg-white"}`}
    >
      {children}
    </div>
  );
};

export default SquareBox;
