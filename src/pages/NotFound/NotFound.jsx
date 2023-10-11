import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const NotFound = () => {
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
				<img
					src="https://www.berrydashboard.io/static/media/img-error-bg.a65a157ae9a7129c3b1a0d8f964e5f16.svg"
				/>

				<img
					src="https://www.berrydashboard.io/static/media/img-error-text.331a1f9141d6e334ca87c95f581469b5.svg"
				/>

				<img
					src="https://www.berrydashboard.io/static/media/img-error-blue.3c2bbf949abfd265f70a083d2aca47d3.svg"
				/>

				<img
					src="https://www.berrydashboard.io/static/media/img-error-purple.4f6e0ced18d9fbce280c4273912d2f0c.svg"
				/>
			</Box>

			<Typography variant="h1" mt={3}>Something is wrong</Typography>

			<Typography
				variant="body2"
				mt={3}
				align="center"
			>
				The page you are looking was moved, removed,
				<br />
				renamed, or might never exist!
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

export default NotFound;
