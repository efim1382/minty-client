import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const UnderConstruction = () => {
	return (
		<Box
			sx={{
				flexGrow: "1",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "100vh",
				margin: "auto 0",
				padding: "24px",
			}}
		>
			<Box
				sx={{
					position: "relative",
					maxWidth: "720px",

					"& > img": {
						width: "100%",
						objectFit: "cover",
					},

					"& > img:nth-of-type(n+2)": {
						position: "absolute",
						left: 0,
						top: 0,
						width: "100%",
					},
				}}
			>
				<img src="https://www.berrydashboard.io/static/media/img-bg-grid.90678d02b50aaa051032547277b57e93.svg" />
				<img src="https://www.berrydashboard.io/static/media/img-bg-parts.b38567e01dcabd738bcabd3af1c0593b.svg" />
				<img src="https://www.berrydashboard.io/static/media/img-build.48884e64b3131d80cdc695bd54b37762.svg" />
			</Box>

			<Typography variant="h1" mt={3}>Under Construction</Typography>

			<Typography
				variant="body2"
				mt={3}
				align="center"
			>
				This site is on under construction!! Please check after
				<br />
				some time
			</Typography>

			<Button
				variant="contained"
				startIcon={(
					<HomeOutlinedIcon />
				)}
				component={NavLink}
				to="/"
				sx={{ mt: 3 }}
			>
				Home
			</Button>
		</Box>
	);
};

export default UnderConstruction;
