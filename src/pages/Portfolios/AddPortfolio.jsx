import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

const AddPortfolio = ({ isShown, onClose }) => {
	return (
		<Dialog
			open={isShown}
			sx={{
				"& .MuiDialog-paper": {
					width: "500px",
					maxHeight: 435,
				},
			}}
			onClose={onClose}
		>
			<DialogTitle variant="h2" sx={{ pt: 3 }}>New Portfolio</DialogTitle>

			<DialogContent sx={{ pb: 1 }}>
				<Typography variant="body1">
					Understanding your finances begins with proper organization.
					Create a new portfolio and gain clarity on your investments.
				</Typography>

				<Grid
					container
					spacing={2}
					mt={2}
				>
					<Grid
						item
						xs={12}
						sm={7}
					>
						<TextField
							fullWidth
							name="name"
							label="Name"
						/>
					</Grid>

					<Grid
						item
						xs={12}
						sm={5}
						align="right"
					>
						<FormControl
							fullWidth
							sx={{
								minWidth: 140,
							}}
							align="left"
						>
							<InputLabel id="type-portfolio-label">Type</InputLabel>

							<Select
								labelId="type-portfolio-label"
								label="Type"
								onChange={() => {}}
							>
								<MenuItem value="stock">Stock</MenuItem>
								<MenuItem value="cryptocurrency">Cryptocurrency</MenuItem>
								<MenuItem value="real-estate">Real Estate</MenuItem>
								<MenuItem value="deposit">Deposit</MenuItem>
								<MenuItem value="mixed">Mixed</MenuItem>
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={12}>
						<TextField
							fullWidth
							multiline
							rows={3}
							name="description"
							label="Description"
						/>
					</Grid>
				</Grid>

				<FormControlLabel
					sx={{ mt: 1 }}
					control={<Switch />}
					label="Make as Public"
				/>
			</DialogContent>

			<DialogActions
				sx={{
					pl: 3,
					pr: 3,
					pb: 3,
				}}
			>
				<Button size="large" onClick={onClose}>Cancel</Button>

				<Button
					variant="contained"
					size="large"
					onClick={onClose}
				>
					Create
				</Button>
			</DialogActions>
		</Dialog>
	);
};

AddPortfolio.defaultProps = {
	isShown: false,
};

export default AddPortfolio;
