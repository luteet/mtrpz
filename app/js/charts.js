export default function charts() {
	const mainChart = document.querySelector(".main-chart__container"),
	addCharts = document.querySelector(".add-charts");

	const options = {
		indexAxis: 'y',
		layout: {
			padding: 20
		},
		elements: {
			bar: {
				borderWidth: 2,
			}
		},
		scales: {
			x: {
				grid: {
					color: "#5B5B5B",
					tickColor: "#5B5B5B",
				},
			},
			y: {
				grid: {
					tickColor: "rgba(0,0,0,0)",
					color: "#5B5B5B",
				},
				ticks: {
					display: false,
				}
			}
		},
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
		}
	}

	if(mainChart && addCharts) {
		
		fetch(chartData, {
			method: "GET",
			headers:{"content-type": "application/json"}
		})
		
		.then( (response) => {
			if(response.status !== 200) return Promise.reject();
			return response.json()
		})
		.then(result => {
			const canvas = document.createElement("canvas");
			canvas.width = mainChart.offsetWidth;
			canvas.height = mainChart.offsetHeight;
			mainChart.append(canvas);

			const context = canvas.getContext("2d");
			let mainDatasets = [];
			result.groups.map(group => {
				const item = document.createElement("div");
				item.classList.add("add-charts__item");
				item.innerHTML = `
				<div class="add-charts__item-inner">
					<div class="add-charts__item-container">
						<canvas></canvas>
					</div>
				</div>`;

				addCharts.append(item);

				new SimpleBar(item, {
					autoHide: false,
				});

				const canvas = item.querySelector("canvas");
				canvas.width = mainChart.offsetWidth;
				canvas.height = mainChart.offsetHeight;
				
				let chartData = [];
				group.data.map(data => {
					chartData.push({
						label: data.name,
						data: [data.value],
						backgroundColor: data.color,
					})
				})

				const context = canvas.getContext("2d");
				const config = {
					type: 'bar',
					data: {
						labels: [result.label],
						datasets: chartData,
					},
					options
				};

				const chart = new Chart(context, config);

				group.data.map(data => {
					mainDatasets.push({
						label: data.name,
						data: [data.value],
						backgroundColor: data.color,
					})
				})
			})

			const mainData = {
				labels: [result.label],
				datasets: mainDatasets,
			};
	
			const config = {
				type: 'bar',
				data: mainData,
				options
			};
	
			const chart = new Chart(context, config);

		})
		.catch((error) => console.log(error));

	}

} 