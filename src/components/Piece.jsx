import React from "react";
import { useDraggable } from "@dnd-kit/core";

const Piece = ({ type, color }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${type}-${color}`,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="w-[40px] h-[40px] bg-red-600 rounded-lg"
    ></div>
  );
};

export default Piece;
