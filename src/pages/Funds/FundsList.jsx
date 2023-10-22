import React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Card from "@mui/material/Card";

const FundsList = ({ title, rows, total }) => {
	return (
		<Card>
			<CardHeader
				title={title}
				action={(
					<Typography sx={{ fontWeight: 500 }}>{total}</Typography>
				)}
				sx={{
					"& .MuiCardHeader-action": {
						margin: 0,
					},
				}}
			/>

			<CardContent sx={{ pt: 0 }}>
				<TableContainer>
					<Table size="small">
						<TableBody>
							{rows.map((row, index) => (
								<TableRow key={index}>
									<TableCell
										sx={{
											display: "flex",
											alignItems: "center",
											border: "none",
											pl: 0,
										}}
									>
										<Avatar
											variant="rounded"
											sx={{
												fontSize: "1rem",
												mr: 2,
											}}
										>
											{row.icon}
										</Avatar>

										<Typography>{row.cardType}</Typography>
									</TableCell>

									<TableCell
										align="right"
										sx={{
											border: "none",
											pr: 0,
										}}
									>
										{row.amount}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</CardContent>
		</Card>
	);
};

export default FundsList;
