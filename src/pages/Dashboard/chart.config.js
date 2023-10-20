export default {
	options: {
		chart: {
			id: "basic-bar",

			toolbar: {
				show: false,
			},

			animations: {
				enabled: false,
			},

			dropShadow: {
				enabled: false,
			},

			sparkline: {
				enabled: true,
			},
		},

		dataLabels: {
			enabled: false,
		},

		stroke: {
			show: true,
			colors: ["#4527a0"],
			width: 1,
		},

		fill: {
			type: "gradient",

			gradient: {
				type: "vertical",
				shadeIntensity: 1,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100],

				colorStops: [
					{
						offset: 0,
						color: "#a897d3",
						opacity: 1,
					},

					{
						offset: 100,
						color: "#dad1ec",
						opacity: 1,
					},
				],
			},
		},

		xaxis: {
			categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],

			labels: {
				show: false,
			},
		},

		yaxis: {
			labels: {
				show: false,
			},
		},

		grid: {
			xaxis: {
				lines: {
					show: false,
				},
			},

			yaxis: {
				lines: {
					show: false,
				},
			},
		},
	},

	series: [
		{
			name: "series-1",
			data: [30, 40, 45, 50, 49, 60, 70, 91],
		},
	],
};
