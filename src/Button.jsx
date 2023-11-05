import React from "react";

const Button = ({ click, label }) => {
	const handleClick = () => {
		click?.();
	};
	return <button onClick={handleClick}>{label}</button>;
};

export default Button;
