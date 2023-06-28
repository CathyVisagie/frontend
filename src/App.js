import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import ShowData from "./functions/ShowData";
import AddNew from "./functions/AddNew";
function App() {
	// Hooks

	return (
		<React.Fragment>
			<AddNew />
			<ShowData />
		</React.Fragment>
	);
}

export default App;
