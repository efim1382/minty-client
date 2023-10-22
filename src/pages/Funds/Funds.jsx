import React from "react";
import OverviewTable from "./OverviewTable";
import CategoriesChart from "./CategoriesChart";
import Transfer from "./Transfer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Distribution from "./Distribution";
import { Card } from "@mui/material";

const Funds = () => {
	return (
		<>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				mb={2}
			>
				<Typography variant="h2">My Funds</Typography>

				<Button
					variant="contained"
					startIcon={(
						<AddOutlinedIcon />
					)}
					sx={{ ml: 2 }}
					onClick={() => {}}
				>
					New Source
				</Button>
			</Stack>

			<Grid container spacing={2}>
				<Grid item xs={8}>
					<CategoriesChart />
				</Grid>

				<Grid item xs={4}>
					<Transfer />
				</Grid>

				<Grid item xs={8}>
					<OverviewTable />
				</Grid>

				<Grid item xs={4}>
					<Distribution />
				</Grid>
			</Grid>
		</>
	);
};

export default Funds;
