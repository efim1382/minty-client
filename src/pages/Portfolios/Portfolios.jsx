import React from "react";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import ControlsBar from "./ControlsBar";
import PortfolioCard from "./PortfolioCard";

const Portfolios = () => {
	return (
		<Paper elevation={0}>
			<CardHeader title="Portfolio List" />
			<Divider />

			<CardContent>
				<ControlsBar />

				<Grid
					container
					spacing={2}
					mt={2}
				>
					<Grid
						item
						xs={12}
						sm={12}
						md={6}
						lg={4}
						xl={3}
					>
						<PortfolioCard type="stock" />
					</Grid>

					<Grid
						item
						xs={12}
						sm={12}
						md={6}
						lg={4}
						xl={3}
					>
						<PortfolioCard type="cryptocurrency" />
					</Grid>

					<Grid
						item
						xs={12}
						sm={12}
						md={6}
						lg={4}
						xl={3}
					>
						<PortfolioCard type="realestate" />
					</Grid>

					<Grid
						item
						xs={12}
						sm={12}
						md={6}
						lg={4}
						xl={3}
					>
						<PortfolioCard type="deposit" />
					</Grid>

					<Grid
						item
						xs={12}
						sm={12}
						md={6}
						lg={4}
						xl={3}
					>
						<PortfolioCard type="mixed" />
					</Grid>
				</Grid>
			</CardContent>
		</Paper>
	);
};

export default Portfolios;
