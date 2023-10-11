import React, { Fragment } from "react";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MuiBox from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chart from "react-apexcharts";
import chartConfig from "pages/Dashboard/chart.config";
import Stack from "@mui/material/Stack";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Divider from "@mui/material/Divider";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import {CardActions} from "@mui/material";
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import stocksList from "./stocks";

const PopularStocks = () => {
	return (
		<Paper elevation={0}>
			<CardContent>
				<Typography variant="h4">Popular Stocks</Typography>

				<Paper
					elevation={0}
					sx={{
						bgcolor: "secondary.light",
						overflow: "hidden",
						mt: 2,
						mb: 3,
					}}
				>
					<MuiBox sx={{
						p: 2,
						pb: 0
					}}>
						<Grid
							container
							justifyContent="space-between"
							alignItems="center"
						>
							<Grid item xs={6}>
								<Typography
									variant="subtitle1"
									component="h6"
									color="secondary.dark"
								>
									Bajaj Finery
								</Typography>
							</Grid>

							<Grid item xs={6}>
								<Typography align="right" variant="h4">$1839.00</Typography>
							</Grid>
						</Grid>

						<Typography variant="subtitle2">10% Profit</Typography>
					</MuiBox>

					<Chart
						options={chartConfig.options}
						series={chartConfig.series}
						type="area"
						width="100%"
						height="95px"
					/>
				</Paper>

				{stocksList.map((item, index) => {
					const isLastItem = index === stocksList.length - 1;

					return (
						<Fragment key={item.name}>
							<MuiBox
								sx={{
									"&:not(:last-of-type)": {
										mt: 2
									}
								}}
							>
								<Grid
									container
									justifyContent="space-between"
								>
									<Grid item xs={6}>
										<Typography variant="subtitle1">{item.name}</Typography>
									</Grid>

									<Grid item xs={6}>
										<Stack
											direction="row"
											spacing={1}
											width="100%"
											alignItems="center"
											justifyContent="flex-end"
										>
											<Typography
												align="right"
												variant="subtitle1"
											>
												{item.price}
											</Typography>

											{item.profit && (
												<TrendingUpIcon sx={{color: "success.dark"}}/>
											)}

											{item.loss && (
												<TrendingDownIcon sx={{color: "orange.dark"}}/>
											)}
										</Stack>
									</Grid>
								</Grid>

								{item.profit && (
									<Typography variant="subtitle2" color="success.dark">{item.profit}</Typography>
								)}

								{item.loss && (
									<Typography variant="subtitle2" color="orange.dark">{item.loss}</Typography>
								)}
							</MuiBox>

							{!isLastItem && (
								<Divider sx={{
									mt: 2,
									mb: 2
								}}/>
							)}
						</Fragment>
					);
				})}
			</CardContent>

			<CardActions sx={{ justifyContent: "center" }}>
				<Button
					component={NavLink}
					to="/"
					sx={{ textTransform: "none" }}
				>
					View All

					<ArrowForwardIosOutlinedIcon
						sx={{
							fontSize: "14px",
							ml: "4px"
						}}
					/>
				</Button>
			</CardActions>
		</Paper>
	);
};

export default PopularStocks;
