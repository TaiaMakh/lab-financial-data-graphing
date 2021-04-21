window.onload = () => {
	const apiHandler = new ApiHandler("http://api.coindesk.com/v1/bpi/historical/close.json");

	const getBitcoinData = () => {
		return apiHandler.getData();
	};

	const printChart = (labels, data) => {
		const ctx = document.querySelector("canvas").getContext("2d");

		new Chart(ctx, {
			type: "line",
			data: {
				labels,
				datasets: [
					{
						label: "Bitcoin price index",
						backgroundColor: "blue",
						data,
					},
				],
			},
		});
	};

	getBitcoinData().then((res) => {
		const priceData = [];
		const labelData = [];
		for (let key in res.data.bpi) {
			priceData.push(res.data.bpi[key]);
            labelData.push(key);
		}
        printChart(labelData, priceData);
	});
};
