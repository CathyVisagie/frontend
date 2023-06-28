import React from "react";
import { useState, useEffect, setState } from "react";
import GetData from "./GetData";
import DeleteData from "./DeleteData";

function ShowData({ itemProp, handleChange, delTodo }) {
	const [editing, setEditing] = useState(false);
	// Hooks
	const [data, setData] = useState("");
	const [isLoaded, setIsLoaded] = useState(false);
	const [titleValue, setTitleValue] = useState("");
	const [descValue, setDescValue] = useState("");
	const [urlValue, setUrlValue] = useState("");

	let sections = document.getElementsByClassName("input");

	for (let section of sections) {
		if (editing) {
			section.style.display = "block";
		} else {
			section.style.display = "none";
		}
	}
	const handleEditing = (props) => {
		setEditing(true);
	};
	useEffect(() => {
		GetData(setData, setIsLoaded);
	}, []);
	async function EditData() {
		setEditing(false);
		const response = await fetch("/items/", {
			method: "PUT",
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

	if (data.length !== 0) {
		return (
			<div>
				{data.map((item, index) => (
					<div key={index}>
						<div>Title: {item.title}</div>
						<input
							type="text"
							className="game-input input"
							placeholder="Add game"
							value={titleValue}
							onChange={(event) => setTitleValue(event.target.value)}></input>
						<div className="desc">Description: {item.description}</div>
						<input
							type="text"
							className="desc-input input"
							placeholder="Add descriprion"
							value={descValue}
							onChange={(event) => setDescValue(event.target.value)}></input>
						<div className="url">URL: {item.url}</div>
						<input
							type="text"
							className="url-input input"
							placeholder="Add URL"
							value={urlValue}
							onChange={(event) => setUrlValue(event.target.value)}></input>
						<button onClick={() => DeleteData(item.id)}>Delete</button>
						<button className="edit" onClick={handleEditing}>
							Edit
						</button>
						<button onClick={() => EditData(item.id)}>Save</button>
					</div>
				))}
			</div>
		);
	}
}
export default ShowData;
