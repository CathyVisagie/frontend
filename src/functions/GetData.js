const GetData = async (setData, setIsLoaded) => {
	fetch("/api")
		.then((res) => res.json())
		.then(
			(result) => {
				setData(result);

				setIsLoaded(true);
				console.log(`Data from backend is:`);
				console.log(result);
			},
			(error) => {
				console.log("Error loading data:");
				console.log(error);
			}
		);
};

export default GetData;
