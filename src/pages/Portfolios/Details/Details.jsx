import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SummaryCard from "./SummaryCard";
import summaryItems from "./summary";

const Details = () => {
	return (
		<>
			<Stack
				direction="row"
				spacing={2}
				alignItems="center"
				justifyContent="space-between"
			>
				<Typography variant="h3">Freedom Finance Portfolio</Typography>

				<Stack
					direction="row"
					spacing={2}
				>
					<Button
						variant="contained"
						startIcon={(
							<AddOutlinedIcon />
						)}
					>
						New Asset
					</Button>

					<Button
						variant="outlined"
						startIcon={(
							<EditOutlinedIcon />
						)}
					>
						Edit
					</Button>
				</Stack>
			</Stack>

			<Box mt="20px">
				<Grid
					container
					spacing={2}
				>
					{summaryItems.map((item) => (
						<Grid
							item
							key={item.title}
							xs={12}
							sm={6}
							lg={3}
						>
							<SummaryCard
								title={item.title}
								price={item.price}
								icon={item.icon}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
};

export default Details;
