import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SummaryCard from "./SummaryCard";
import summaryItems from "./summary";
import Paper from "@mui/material/Paper";

const items = [
	{
		asset: {
			name: "Apple Stock",
		},
		quantity: 10,
		averagePrice: 140,
		currentPrice: 150,
		currentValue: 1500,
		currentProfit: 100,
		totalProfit: 120,
		roi: 7.14,
		portfolioShare: 30,
	},
	{
		asset: {
			name: "Tesla Stock",
		},
		quantity: 5,
		averagePrice: 800,
		currentPrice: 820,
		currentValue: 4100,
		currentProfit: 100,
		totalProfit: 150,
		roi: 2.5,
		portfolioShare: 40,
	},
	{
		asset: {
			name: "Amazon Stock",
		},
		quantity: 2,
		averagePrice: 3200,
		currentPrice: 3400,
		currentValue: 6800,
		currentProfit: 400,
		totalProfit: 500,
		roi: 12.5,
		portfolioShare: 20,
	},
	{
		asset: {
			name: "Microsoft Stock",
		},
		quantity: 8,
		averagePrice: 220,
		currentPrice: 230,
		currentValue: 1840,
		currentProfit: 80,
		totalProfit: 100,
		roi: 4.55,
		portfolioShare: 10,
	},
];

const Details = () => {
	return (
		<Stack spacing={2}>
			<Stack
				direction="row"
				spacing={2}
				alignItems="center"
				justifyContent="space-between"
			>
				<Typography variant="h3">Freedom Finance Portfolio</Typography>

				<Stack
					direction="row"
					spacing={2}
				>
					<Button
						variant="contained"
						startIcon={(
							<AddOutlinedIcon />
						)}
					>
						New Asset
					</Button>

					<Button
						variant="outlined"
						startIcon={(
							<EditOutlinedIcon />
						)}
					>
						Edit
					</Button>
				</Stack>
			</Stack>

			<Box>
				<Grid
					container
					spacing={2}
				>
					{summaryItems.map((item) => (
						<Grid
							item
							key={item.title}
							xs={12}
							sm={6}
							lg={3}
						>
							<SummaryCard
								title={item.title}
								price={item.price}
								icon={item.icon}
							/>
						</Grid>
					))}
				</Grid>
			</Box>

			<TableContainer
				component={Paper}
				elevation={0}
			>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Asset</TableCell>
							<TableCell>Quantity</TableCell>
							<TableCell>Avg. Price</TableCell>
							<TableCell>Curr. Price</TableCell>
							<TableCell>Curr. Value</TableCell>
							<TableCell>Curr. Profit</TableCell>
							<TableCell>Total Profit</TableCell>
							<TableCell>ROI</TableCell>
							<TableCell>Portfolio Share</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{items.map((row) => (
							<TableRow key={row.asset.name}>
								<TableCell>{row.asset.name}</TableCell>
								<TableCell>{row.quantity}</TableCell>
								<TableCell>{row.averagePrice}</TableCell>
								<TableCell>{row.currentPrice}</TableCell>
								<TableCell>{row.currentValue}</TableCell>
								<TableCell>{row.currentProfit}</TableCell>
								<TableCell>{row.totalProfit}</TableCell>
								<TableCell>{row.roi}</TableCell>
								<TableCell>{row.portfolioShare}</TableCell>
							</TableRow>

						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Stack>
	);
};

export default Details;
