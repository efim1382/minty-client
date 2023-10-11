import React, { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header, { headerHeight } from "components/Header";
import Sidebar from "components/Sidebar";
import GlobalStyle from "styles/global";
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

const GlobalLayout = () => {
	const { pathname, search } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname, search]);

	return (
		<MuiBox sx={{ display: "flex" }}>
			<GlobalStyle />
			<Outlet />
		</MuiBox>
	);
};

export default GlobalLayout;
