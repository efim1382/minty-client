export default {
	options: {
		chart: {
			id: "basic-bar",
			toolbar: {
				show: false
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
			enabled: false
		},
		stroke: {
			show: true,
			colors: ['#fff'],
			width: 3,
		},
		fill: {
			type: "solid",
			color: "transparent",
			opacity: 0,
		},
		xaxis: {
			show: false,
			categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
		},
		yaxis: {
			show: false,
		},
		grid: {
			show: false,
			xaxis: {
				lines: {
					show: false
				}
			},
			yaxis: {
				lines: {
					show: false
				}
			},
		},
		legend: {
			show: false
		},
		tooltip: {
			enabled: false
		},
	},
	series: [
		{
			name: "series-1",
			data: [35, 44, 9, 54, 45, 66, 41, 69]
		}
	]
};
