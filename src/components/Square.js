import React from "react";

const Square = () => {
	const style = {
		background: "lightBlue",
		fontSize: "30px",
		border: "3px solid Darkblue",
		cursor: "pointer",
		height: "70px",
		width: "30vw",
		height: "30vh",
		border: "2px solid darkBlue",
	};

	return (
		<div>
			<button style={style}></button>
		</div>
	);
};

export default Square;
