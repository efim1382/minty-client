import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Layout = () => {
	return (
		<Box
			sx={{
				flexGrow: 1,
				display: "flex",
				minHeight: "100vh",
				bgcolor: "#eef2f6",
			}}
		>
			<Paper
				elevation={0}
				sx={{
					maxWidth: 400,
					margin: "auto",
					p: 3,
				}}
			>
				<Outlet />
			</Paper>
		</Box>
	);
};

export default Layout;
