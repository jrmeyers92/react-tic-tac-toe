import React from "react";

const Square = () => {
	const style = {
		background: "lightBlue",
		height: "50px",
		width: "50px",
		border: "3px solid Darkblue",
		cursor: "pointer",
	};

	return (
		<div>
			<button style={style}></button>
		</div>
	);
};

export default Square;
