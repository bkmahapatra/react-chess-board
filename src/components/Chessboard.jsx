import { useState } from "react";
import Piece from "./Piece";
import SquareBox from "./SquareBox";
import { DndContext } from "@dnd-kit/core";

const Chessboard = () => {
  const boardSize = 8;
  const board = Array(boardSize)
    .fill(null)
    .map((_, row) =>
      Array(boardSize)
        .fill(null)
        .map((_, col) => ({ row: row, col: col, piece: null }))
    );

  const [pieces, setPieces] = useState([
    { type: "king", color: "white", position: [0, 0] },
    { type: "king", color: "black", position: [7, 7] },
  ]);

  console.log({ pieces });

  const renderSquare = (row, col) => {
    const piece = pieces.find(
      (p) => p.position[0] === row && p.position[1] === col
    );

    return (
      <SquareBox key={`${row}-${col}`} row={row} col={col}>
        {piece && <Piece type={piece.type} color={piece.color} />}
      </SquareBox>
    );
  };

  const handleDragEnd = (event) => {
    const { over, active } = event;
    // activatorEvent, collisions, delta

    if (over) {
      const index = pieces.findIndex(
        (p) => active.id === `${p.type}-${p.color}`
      );

      const [row, col] = over.id.split("-");

      setPieces((prevPieces) => {
        const newPieces = [...prevPieces];
        newPieces[index].position = [parseInt(row), parseInt(col)];

        return newPieces;
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-8 gap-1 w-[480px] p-1 border border-black ">
        {board.flat().map(({ row, col }) => renderSquare(row, col))}
      </div>
    </DndContext>
  );
};

export default Chessboard;
