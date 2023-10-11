import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";

const SummaryCard = (props) => {
	const {
		title,
		price,
		icon,
	} = props;

	const { Element, color } = icon;

	return (
		<Paper
			elevation={0}
		>
			<CardContent>
				<Stack
					direction="row"
					spacing={1}
					alignItems="center"
					justifyContent="space-between"
				>
					<Box>
						<Typography variant="h3">{price}</Typography>
						<Typography mt={1}>{title}</Typography>
					</Box>

					<Avatar
						variant="rounded"
						color={color}
						sx={{
							width: "50px",
							height: "50px",

							"& .MuiSvgIcon-root": {
								fontSize: "30px",
							},
						}}
					>
						<Element />
					</Avatar>
				</Stack>
			</CardContent>
		</Paper>
	);
};

export default SummaryCard;
