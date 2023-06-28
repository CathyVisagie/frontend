import { useState, useEffect } from "react";

async function DeleteData(id) {
	fetch(`items/?id=${id}`, {
		method: "DELETE",
	})
		.then((data) => {
			console.log(data);
			window.location.reload();
		})
		.catch((error) => console.error(error));
}

export default DeleteData;
