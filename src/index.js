import React from "react";
import ReactDOM from "react-dom/client";

const div = <div>Hello World</div>;
const GreetComponent = () => {
	return div;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<GreetComponent />);
