export default {
	options: {
		chart: {
			id: "funds-type-chart",
			type: "donut",

			animations: {
				enabled: false,
			},
		},

		legend: {
			show: false,
		},

		dataLabels: {
			enabled: false,
		},

		labels: ["Cash", "Banking", "Crypto"],

		states: {
			hover: {
				filter: {
					type: "none",
					value: 0,
				},
			},
		},

		grid: {
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
			},
		},
	},
};
