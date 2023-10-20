import React from "react";
import Paper from "@mui/material/Paper";
import CardHeader from "@mui/material/CardHeader";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Grid from "@mui/material/Grid";

const OverviewTable = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={6}>
				<TableContainer
					component={Paper}
					elevation={0}
				>
					<CardHeader
						title="Monobank"
					/>

					<Table>
						<TableBody>
							<TableRow>
								<TableCell>Black</TableCell>
								<TableCell>UAH</TableCell>
								<TableCell>23,500</TableCell>
							</TableRow>

							<TableRow>
								<TableCell>White</TableCell>
								<TableCell>UAH</TableCell>
								<TableCell>10,000</TableCell>
							</TableRow>

							<TableRow>
								<TableCell>Currency Card</TableCell>
								<TableCell>USD</TableCell>
								<TableCell>24</TableCell>
							</TableRow>

							<TableRow>
								<TableCell>Currency Card</TableCell>
								<TableCell>EUR</TableCell>
								<TableCell>100</TableCell>
							</TableRow>

							<TableRow>
								<TableCell>Wishes Savings</TableCell>
								<TableCell>USD</TableCell>
								<TableCell>800</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>

				<TableContainer
					component={Paper}
					elevation={0}
					sx={{ mt: 2 }}
				>
					<CardHeader
						title="A-Bank"
					/>

					<Table>
						<TableBody>
							<TableRow>
								<TableCell>Green Virtual</TableCell>
								<TableCell>UAH</TableCell>
								<TableCell>0</TableCell>
							</TableRow>

							<TableRow>
								<TableCell>Currency Card</TableCell>
								<TableCell>EUR</TableCell>
								<TableCell>24</TableCell>
							</TableRow>

							<TableRow>
								<TableCell>Currency Card</TableCell>
								<TableCell>USD</TableCell>
								<TableCell>245</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>

			<Grid item xs={6}>
				<TableContainer
					component={Paper}
					elevation={0}
				>
					<CardHeader
						title="Cash"
					/>

					<Table>
						<TableBody>
							<TableRow>
								<TableCell>USD</TableCell>
								<TableCell>8,500</TableCell>
							</TableRow>

							<TableRow>
								<TableCell>EUR</TableCell>
								<TableCell>800</TableCell>
							</TableRow>

							<TableRow>
								<TableCell>LEV</TableCell>
								<TableCell>1,500</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>

				<TableContainer
					component={Paper}
					elevation={0}
					sx={{ mt: 2 }}
				>
					<CardHeader
						title="Crypto"
					/>

					<Table>
						<TableBody>
							<TableRow>
								<TableCell>Binance</TableCell>
								<TableCell>USDT</TableCell>
								<TableCell>550</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</Grid>
	);
};

export default OverviewTable;
