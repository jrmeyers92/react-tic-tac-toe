import React from "react";

const Square = ({ square }) => {
	const style = {
		background: "lightBlue",
		fontSize: "30px",
		border: "3px solid Darkblue",
		cursor: "pointer",
		width: "30vw",
		height: "30vh",
	};

	return (
		<div>
			<button style={style}>{square}</button>
		</div>
	);
};

export default Square;
