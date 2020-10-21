import React from "react";
import Square from "./Square";

const Board = () => {
	const style = {
		display: "flex",
		flexWrap: "wrap",
		border: "2px solid darkBlue",
	};
	const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<div
			style={style}
			onClick={(e) => {
				console.log(e.target.value);
			}}>
			{squares.map((square) => (
				<Square value={square}>square</Square>
			))}
		</div>
	);
};

export default Board;
