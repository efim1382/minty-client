import React from "react";
import OverviewTable from "./OverviewTable";
import CategoriesChart from "./CategoriesChart";
import Transfer from "./Transfer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Funds = () => {
	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<CategoriesChart />
				</Grid>

				<Grid item xs={4}>
					<Transfer />
				</Grid>
			</Grid>

			<Box sx={{ mt: 2 }}>
				<OverviewTable />
			</Box>
		</>
	);
};

export default Funds;
