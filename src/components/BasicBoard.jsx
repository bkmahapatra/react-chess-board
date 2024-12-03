import React from "react";

const Piece = ({}) => {
  return <div className="w-[40px] h-[40px] bg-red-600 rounded-lg"></div>;
};

const SquareBox = ({ row, col, children }) => {
  const isDark = (row + col) % 2 === 1;

  return (
    <div
      className={`flex items-center justify-center border border-black h-[60px]  ${isDark ? "bg-black" : "bg-white"}`}
    >
      {children}
    </div>
  );
};

const BasicBoard = () => {
  const boardSize = 8;
  const board = Array(boardSize)
    .fill(null)
    .map((_, row) =>
      Array(boardSize)
        .fill(null)
        .map((_, col) => ({ row: row, col: col, piece: null }))
    );

  board[0][0].piece = { type: "king", color: "white" };
  board[7][7].piece = { type: "king", color: "black" };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="grid grid-cols-8 gap-1 w-[480px] p-1 border border-black ">
        {board.flat().map(({ row, col, piece }) => {
          return (
            <SquareBox key={`${row}-${col}`} row={row} col={col}>
              {piece && <Piece />}
            </SquareBox>
          );
        })}
      </div>
    </div>
  );
};

export default BasicBoard;
