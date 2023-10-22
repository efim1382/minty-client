import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function generateRandomAmount() {
	const amount = Math.random() * 100000;
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
}

const Planner = () => {
	return (
		<TableContainer component={Paper} elevation={0}>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell
							align="center"
							rowSpan={2}

							// sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
						>
							Date
						</TableCell>

						<TableCell sx={{ border: 0 }}
							align="center"
							colSpan={1}
						>
							Income
						</TableCell>

						<TableCell sx={{ border: 0 }}
							align="center"
							colSpan={1}
						>
							Expenses
						</TableCell>

						<TableCell sx={{ border: 0 }}
							align="center"
							colSpan={1}
						>
							Free Funds
						</TableCell>

						<TableCell sx={{ border: 0 }}
							align="center"
							colSpan={2}
						>
							Emergency Fund
						</TableCell>

						<TableCell sx={{ border: 0 }}
							align="center"
							colSpan={2}
						>
							Investment Capital
						</TableCell>

						<TableCell sx={{ border: 0 }}
							align="center"
							colSpan={1}
						>
							Capital
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell align="center">monthly</TableCell>
						<TableCell align="center">monthly</TableCell>
						<TableCell align="center">monthly</TableCell>
						<TableCell align="center">current</TableCell>
						<TableCell align="center">growth</TableCell>
						<TableCell align="center">current</TableCell>
						<TableCell align="center">growth</TableCell>
						<TableCell align="center">total</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{[...Array(22)].map(() => (
						<TableRow
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell>01/2023</TableCell>
							<TableCell align="right">{generateRandomAmount()}</TableCell>
							<TableCell align="right">{generateRandomAmount()}</TableCell>
							<TableCell align="right">{generateRandomAmount()}</TableCell>
							<TableCell align="right">{generateRandomAmount()}</TableCell>
							<TableCell align="right">{generateRandomAmount()}</TableCell>
							<TableCell align="right">{generateRandomAmount()}</TableCell>
							<TableCell align="right">{generateRandomAmount()}</TableCell>
							<TableCell align="right">{generateRandomAmount()}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default Planner;
