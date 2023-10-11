import React from "react";
import MuiBox from '@mui/material/Box';
import { headerHeight } from "components/Header";
import styled from "styled-components";

const Box = styled(MuiBox)`
	flex-grow: 1;
	min-height: calc(100vh - ${headerHeight}px);
	margin-right: 20px;
	margin-top: ${headerHeight}px;
	padding: 20px;
	border-radius: 8px;
	background-color: rgb(238, 242, 246);
`;

const Faq = () => {
	return (
		<Box component="main">
			Faq
		</Box>
	);
};

export default Faq;
