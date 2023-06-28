import React, { useState } from "react";

const AddNew = () => {
	const [titleValue, setTitleValue] = useState("");
	const [descValue, setDescValue] = useState("");
	const [urlValue, setUrlValue] = useState("");

	return (
		// displaying the task in the list
		<div className="add-todo">
			<input
				type="text"
				className="game-input"
				placeholder="Add game"
				value={titleValue}
				onChange={(event) => setTitleValue(event.target.value)}></input>

			<input
				type="text"
				className="desc-input"
				placeholder="Add descriprion"
				value={descValue}
				onChange={(event) => setDescValue(event.target.value)}></input>
			<input
				type="text"
				className="url-input"
				placeholder="Add URL"
				value={urlValue}
				onChange={(event) => setUrlValue(event.target.value)}></input>

			<button onClick={() => addGame()}>Save</button>
		</div>
	);

	async function addGame() {
		const response = await fetch("/items/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: titleValue,
				description: descValue,
				url: urlValue,
			}), // body data type must matc
		});

		return window.location.reload(); // parses response to JSON
	}
};

export default AddNew;
