import React from "react";
import Button from "./Button";

const App = () => {
	const handleClick = () => {
		console.log("Clicked Out");
	};
	return (
		<>
			<Button label="click" click={handleClick}></Button>
		</>
	);
};

export default App;
