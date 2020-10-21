import React from "react";
import Board from "./components/Board";
import Square from "./components/Square";

const App = () => {
	const style = {
		width: "100vw",
	};

	return (
		<div style={style}>
			<Board />
		</div>
	);
};

export default App;
