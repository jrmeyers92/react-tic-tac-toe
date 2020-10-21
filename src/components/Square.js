import React from "react";

const Square = (props) => {
	const style = {
		background: "lightBlue",
		fontSize: "30px",
		border: "3px solid Darkblue",
		cursor: "pointer",
	};

	return (
		<div>
			<button style={style}>{props.number}</button>
		</div>
	);
};

export default Square;
