import React from "react";
import Paper from "@mui/material/Paper";
import CardHeader from "@mui/material/CardHeader";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

const AssetsTable = () => {
	return (
		<TableContainer
			component={Paper}
			elevation={0}
		>
			<CardHeader
				title="Asset Portfolio Overview"
				subheader="A summary of your various assets, their values, annual profitability, and more."
				sx={{
					pt: 3,
					pb: 3,
				}}
			/>

			<Table sx={{ minWidth: 560 }}>
				<TableHead>
					<TableRow>
						<TableCell>Type</TableCell>
						<TableCell>Value</TableCell>
						<TableCell>Annual Profit</TableCell>
						<TableCell>Last Year</TableCell>
						<TableCell>Purchase Date</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					<TableRow
						hover
						sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
					>
						<TableCell>Real Estate</TableCell>
						<TableCell>$500,000</TableCell>
						<TableCell>- $20,705</TableCell>
						<TableCell>- $3,340</TableCell>
						<TableCell>Jan 15, 2020</TableCell>
					</TableRow>

					<TableRow
						hover
						sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
					>
						<TableCell>Cryptocurrency</TableCell>
						<TableCell>$50,000</TableCell>
						<TableCell>+ $12,300</TableCell>
						<TableCell>+ $2,357</TableCell>
						<TableCell>Jul 22, 2018</TableCell>
					</TableRow>

					<TableRow
						hover
						sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
					>
						<TableCell>Stocks</TableCell>
						<TableCell>$100,000</TableCell>
						<TableCell>+ $24,034</TableCell>
						<TableCell>+ $4,250</TableCell>
						<TableCell>Mar 10, 2019</TableCell>
					</TableRow>

					<TableRow
						hover
						sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
					>
						<TableCell>Gold</TableCell>
						<TableCell>$30,000</TableCell>
						<TableCell>+ $1,540</TableCell>
						<TableCell>+ $350</TableCell>
						<TableCell>May 3, 2021</TableCell>
					</TableRow>

					<TableRow
						hover
						sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
					>
						<TableCell>Bonds</TableCell>
						<TableCell>$20,000</TableCell>
						<TableCell>- $1,056</TableCell>
						<TableCell>+ $340</TableCell>
						<TableCell>Nov 28, 2020</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default AssetsTable;
