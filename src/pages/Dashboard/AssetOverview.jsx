import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const AssetOverview = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={6}>
				<Paper
					elevation={0}

					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-end",
						height: "184px",
						p: "18px",
						bgcolor: "secondary.dark",
					}}
				>
					<Typography
						color="#fff"
						fontSize="2.125rem"
						fontWeight="500"
					>
						$173 331
					</Typography>

					<Typography
						mt="4px"
						fontSize="1rem"
						fontWeight={500}
						color="secondary.midLight"
					>
						Total Asset Value
					</Typography>
				</Paper>
			</Grid>

			<Grid item xs={6}>
				<Paper
					elevation={0}

					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-end",
						height: "184px",
						p: "18px",
						bgcolor: "primary.dark",
					}}
				>
					<Typography
						color="#fff"
						fontSize="2.125rem"
						fontWeight="500"
					>
						$1 230
					</Typography>

					<Typography
						mt="4px"
						fontSize="1rem"
						fontWeight={500}
						color="primary.midLight"
					>
						Total Income
					</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default AssetOverview;
