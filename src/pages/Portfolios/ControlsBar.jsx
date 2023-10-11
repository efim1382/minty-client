import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Typography from "@mui/material/Typography";
import AddPortfolio from "./AddPortfolio";

const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "right",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "right",
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .MuiPaper-root": {
		marginTop: theme.spacing(1),
		minWidth: 150,
		boxShadow: "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",

		"& .MuiMenu-list": {
			padding: "4px 0",
		},

		"& .MuiMenuItem-root": {
			"& .MuiSvgIcon-root": {
				fontSize: 18,
				marginRight: theme.spacing(1.5),
			},
		},
	},
}));

const ControlsBar = () => {
	const [isAddPortfolioModalShown, setIsAddPortfolioModalShown] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const openAddPortfolioModal = () => setIsAddPortfolioModalShown(true);
	const closeAddPortfolioModal = () => setIsAddPortfolioModalShown(false);

	return (
		<Grid container alignItems="center">
			<Grid item xs={6}>
				<TextField
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchOutlinedIcon />
							</InputAdornment>
						),
					}}
					placeholder="Search portfolio"
					variant="outlined"
					name="searchPortfolio"
					size="small"
					sx={{
						"& .MuiOutlinedInput-root": {
							borderRadius: "8px",
						},
					}}
				/>
			</Grid>

			<Grid
				item
				xs={6}
				alignItems="center"
				align="right"
			>
				<Button
					endIcon={(
						<KeyboardArrowDownOutlinedIcon />
					)}
					sx={{
						color: "initial",
						fontWeight: 400,
					}}
					onClick={handleClick}
				>
					Sort By:&nbsp;
					<Typography component="span" sx={{ fontWeight: 500 }}>Latest</Typography>
				</Button>

				<StyledMenu
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
				>
					<MenuItem onClick={() => {}}>
						Value (Highest)
					</MenuItem>

					<MenuItem disableRipple onClick={() => {}}>
						Value (Lowest)
					</MenuItem>

					<MenuItem disableRipple onClick={() => {}}>
						Name (A-Z)
					</MenuItem>

					<MenuItem disableRipple onClick={() => {}}>
						Name (Z-A)
					</MenuItem>
				</StyledMenu>

				<Button
					variant="contained"
					startIcon={(
						<AddOutlinedIcon />
					)}
					sx={{ ml: 2 }}
					onClick={openAddPortfolioModal}
				>
					New Portfolio
				</Button>

				<AddPortfolio
					isShown={isAddPortfolioModalShown}
					onClose={closeAddPortfolioModal}
				/>
			</Grid>
		</Grid>
	);
};

export default ControlsBar;
