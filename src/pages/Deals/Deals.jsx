import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { headerHeight } from "components/Header/Header";

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import MuiBox from '@mui/material/Box';
import MuiCardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Box = styled(MuiBox)`
	flex-grow: 1;
	min-height: calc(100vh - ${headerHeight}px);
	margin-right: 20px;
	margin-top: ${headerHeight}px;
	padding: 20px;
	border-radius: 8px;
	background-color: rgb(238, 242, 246);
`;

const CardHeader = styled(MuiCardHeader)`
	.MuiCardHeader-title {
		font-size: 20px;
	}
`;

const Deals = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch("https://peoplegeneratorapi.live/api/person/10")
			.then((response) => response.json())

			.then((data) => {
				if (data.error) {
					throw data;
				}

				return data;
			})

			.then((data) => {
				setData(data);
			})

			.catch((error) => {
				console.log(error);
			})

			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return (
		<Box component="main">
			<TableContainer
				component={Paper}
				elevation={0}
				sx={{ borderRadius: "8px" }}
			>
				<CardHeader
					title="Employees"

					sx={{
						pt: "24px",
						pb: "24px"
					}}
				/>

				<Divider />

				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Email</TableCell>
							<TableCell>Position</TableCell>
							<TableCell>Age</TableCell>
							<TableCell>Salary</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{data.map((item) => (
							<TableRow
								hover
								key={item.email}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell>{item.name}</TableCell>
								<TableCell>{item.email}</TableCell>
								<TableCell>{item.job}</TableCell>
								<TableCell>{item.age}</TableCell>
								<TableCell>{item.incomeUSD || "~"}</TableCell>
							</TableRow>
						))}

						{isLoading && [...Array(10).keys()].map((index) => (
							<TableRow
								hover
								key={index}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell>
									<Skeleton />
								</TableCell>

								<TableCell>
									<Skeleton />
								</TableCell>

								<TableCell>
									<Skeleton />
								</TableCell>

								<TableCell>
									<Skeleton />
								</TableCell>

								<TableCell>
									<Skeleton />
								</TableCell>
							</TableRow>
						))}

					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default Deals;
