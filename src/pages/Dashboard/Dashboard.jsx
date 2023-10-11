import React from "react";
import Grid from '@mui/material/Grid';

import AssetOverview from "./AssetOverview";
import AssetsTable from "./AssetsTable";
import PopularStocks from "./PopularStocks";

const Dashboard = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<AssetOverview />
			</Grid>

			<Grid item xs={12}>
				<Grid container spacing={2}>
					<Grid item xs={8}>
						<AssetsTable />
					</Grid>

					<Grid item xs={4}>
						<PopularStocks />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Dashboard;
