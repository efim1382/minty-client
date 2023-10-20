import React from "react";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Chart from "react-apexcharts";
import chartConfig from "./chart.config";

const categories = [
	{
		name: "Cash",
		balance: "$12,434.00",
		color: "#6366f1",
	},

	{
		name: "Banking",
		balance: "$2,123.44",
		color: "#06aed4",
	},

	{
		name: "Crypto",
		balance: "$5,123.66",
		color: "#f79009",
	},
];

const CategoriesChart = () => {
	return (
		<Card sx={{ height: "100%" }}>
			<CardHeader
				title="Current Balance"
				subheader="Balance across all your accounts"
			/>

			<CardContent>
				<Stack
					direction="row"
					spacing={3}
					alignItems="center"
				>
					<Chart
						options={chartConfig.options}
						series={[10000, 20000, 5000]}
						type="donut"
						width="200px"
						height="200px"
					/>

					<Box sx={{ flexGrow: 1 }}>
						<Typography variant="overline">Total Balance</Typography>

						<Typography
							variant="h2"
							component="h4"
							sx={{
								fontSize: "1.875rem",
							}}
						>
							$45,000.81
						</Typography>

						<Typography
							variant="overline"
							mt={2}
							component="p"
						>
							Available Categories
						</Typography>

						<Stack spacing={1} mt={1}>
							{categories.map((item) => (
								<Stack
									key={item.name}
									direction="row"
									justifyContent="space-between"
									spacing={2}
								>
									<Stack
										direction="row"
										alignItems="center"
										spacing={1.5}
									>
										<Box
											sx={{
												width: 16,
												height: 16,
												borderRadius: "4px",
												bgcolor: item.color,
											}}
										/>

										<Typography sx={{ fontWeight: 500 }}>{item.name}</Typography>
									</Stack>

									<Typography>{item.balance}</Typography>
								</Stack>
							))}
						</Stack>
					</Box>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default CategoriesChart;
