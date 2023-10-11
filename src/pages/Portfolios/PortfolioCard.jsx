import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import MenuItem from "@mui/material/MenuItem";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CopyAllOutlinedIcon from "@mui/icons-material/CopyAllOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Typography from "@mui/material/Typography";
import Chart from "react-apexcharts";
import chartConfig from "pages/Portfolios/chart.config";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import ShuffleOutlinedIcon from "@mui/icons-material/ShuffleOutlined";
import Avatar from "@mui/material/Avatar";

const cardConfigByType = {
	stock: {
		bgcolor: "primary.dark",
		textColor: "primary.midLight",
		avatarBgcolor: "primary.main",
		Icon: BusinessCenterOutlinedIcon,
	},

	cryptocurrency: {
		bgcolor: "secondary.main",
		textColor: "secondary.midLight",
		avatarBgcolor: "secondary.dark",
		Icon: CurrencyBitcoinOutlinedIcon,
	},

	realestate: {
		bgcolor: "error.dark",
		textColor: "error.light",
		avatarBgcolor: "error.main",
		Icon: CottageOutlinedIcon,
	},

	deposit: {
		bgcolor: "warning.dark",
		textColor: "warning.light",
		avatarBgcolor: "warning.main",
		Icon: AttachMoneyOutlinedIcon,
	},

	mixed: {
		bgcolor: "success.dark",
		textColor: "success.light",
		avatarBgcolor: "success.main",
		Icon: ShuffleOutlinedIcon,
	},
};

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

const PortfolioCard = ({ type }) => {
	const navigate = useNavigate();
	const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);
	const isDropdownShown = Boolean(dropdownAnchorEl);

	const cardConfig = cardConfigByType[type];

	const openDropdown = (event) => {
		event.stopPropagation();
		setDropdownAnchorEl(event.currentTarget);
	};

	const closeDropdown = () => {
		setDropdownAnchorEl(null);
	};

	const onCardClick = (event) => {
		if (event.target.classList.contains("MuiBackdrop-root")) {
			return;
		}

		navigate("/portfolios/1/");
	};

	return (
		<Paper
			elevation={0}
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-end",
				p: "18px",
				bgcolor: cardConfig.bgcolor,
				textDecoration: "none",

				"&:hover": {
					cursor: "pointer",
					boxShadow: "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
				},
			}}
			onClick={onCardClick}
		>
			<Grid container spacing={1}>
				<Grid item xs={6}>
					<Avatar
						variant="rounded"
						sx={{
							width: 44,
							height: 44,
							bgcolor: cardConfig.avatarBgcolor,
						}}
					>
						<cardConfig.Icon
							sx={{
								color: "#fff",
								fontSize: "28px",
							}}
						/>
					</Avatar>
				</Grid>

				<Grid item xs={6}>
					<Button
						sx={{
							display: "flex",
							minWidth: 34,
							height: 34,
							ml: "auto",
							p: 1,
							mt: -1,
							mr: -1,
							borderRadius: "8px",
							color: "#fff",

							"&:hover": {
								bgcolor: "transparent",
							},
						}}
						onClick={openDropdown}
					>
						<MoreHorizOutlinedIcon />
					</Button>

					<StyledMenu
						anchorEl={dropdownAnchorEl}
						open={isDropdownShown}
						onClose={closeDropdown}
					>
						<MenuItem onClick={() => {}}>
							<EditOutlinedIcon />
							Edit
						</MenuItem>

						<MenuItem disableRipple onClick={() => {}}>
							<CopyAllOutlinedIcon />
							Duplicate
						</MenuItem>

						<MenuItem
							disableRipple
							sx={{ color: (theme) => theme.palette.orange.dark }}
							onClick={() => {}}
						>
							<DeleteOutlineOutlinedIcon />
							Delete
						</MenuItem>
					</StyledMenu>
				</Grid>
			</Grid>

			<Grid
				container
				spacing={1}
				mt={1}
			>
				<Grid item xs={7}>
					<Typography
						color="#fff"
						fontSize="1.7rem"
						fontWeight="500"
					>
						$173,331
					</Typography>

					<Typography
						mt="4px"
						fontSize="1rem"
						fontWeight={500}
						color={cardConfig.textColor}
						sx={{
							whiteSpace: "nowrap",
							overflow: "hidden",
							textOverflow: "ellipsis",
						}}
					>
						Freedom Finance Portfolio
					</Typography>
				</Grid>

				<Grid item xs={5}>
					<Chart
						options={chartConfig.options}
						series={chartConfig.series}
						type="area"
						width="100%"
						height="80px"
					/>
				</Grid>
			</Grid>
		</Paper>
	);
};

PortfolioCard.defaultProps = {
	type: "stock",
};

export default PortfolioCard;
