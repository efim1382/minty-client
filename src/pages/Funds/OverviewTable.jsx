import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import FundsList from "./FundsList";

const monobankRows = [
	{
		icon: "₴",
		cardType: "Black Card",
		amount: "32,233.55",
	},

	{
		icon: "₴",
		cardType: "White Card",
		amount: "10,211.22",
	},

	{
		icon: "$",
		cardType: "Currency Card",
		amount: "259.55",
	},

	{
		icon: "€",
		cardType: "Currency Card",
		amount: "944.00",
	},

	{
		icon: "$",
		cardType: "Vacation Jar",
		amount: "944.00",
	},
];

const abankRows = [
	{
		icon: "₴",
		cardType: "Green Card",
		amount: "32,233.55",
	},

	{
		icon: "$",
		cardType: "Currency Card",
		amount: "259.55",
	},

	{
		icon: "€",
		cardType: "Currency Card",
		amount: "944.00",
	},
];

const cashRows = [
	{
		icon: "₴",
		cardType: "UAH",
		amount: "32,233.55",
	},

	{
		icon: "$",
		cardType: "USD",
		amount: "259.55",
	},

	{
		icon: "€",
		cardType: "UUR",
		amount: "944.00",
	},
];

const tetherRows = [
	{
		icon: "$",
		cardType: "Binance",
		amount: "542.55",
	},
];

const OverviewTable = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={6}>
				<Stack spacing={2}>
					<FundsList
						title="Monobank"
						rows={monobankRows}
						total="$12,333.44"
					/>

					<FundsList
						title="A-Bank"
						rows={abankRows}
						total="$1,333.44"
					/>
				</Stack>
			</Grid>

			<Grid item xs={6}>
				<Stack spacing={2}>
					<FundsList
						title="Cash"
						rows={cashRows}
						total="$2,333.44"
					/>

					<FundsList
						title="Tether"
						rows={tetherRows}
						total="$533.44"
					/>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default OverviewTable;
