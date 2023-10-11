import React from "react";
import { Outlet } from "react-router-dom";
import Header, { headerHeight } from "components/Header";
import Sidebar from "components/Sidebar";
import styled from "styled-components";
import MuiBox from "@mui/material/Box";

const Box = styled(MuiBox)`
	flex-grow: 1;
	min-height: calc(100vh - ${headerHeight}px);
	margin-right: 20px;
	margin-top: ${headerHeight}px;
	padding: 20px;
	border-radius: 8px;
	background-color: #eef2f6;
`;

const Layout = () => {
	return (
		<>
			<Header />
			<Sidebar />

			<Box>
				<Outlet />
			</Box>
		</>
	);
};

export default Layout;
