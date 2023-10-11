import React from "react";
import { NavLink } from "react-router-dom";
import ProfilePopup from "./ProfilePopup";

import Typography from "@mui/material/Typography";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import MuiChip from "@mui/material/Chip";
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { styled } from '@mui/material/styles';
import sc from "styled-components";

export const headerHeight = 82;

const Link = sc(NavLink)`
	text-decoration: none;
`;

const AppBar = styled(MuiAppBar)({
	justifyContent: "center",
	height: `${headerHeight}px`,
	backgroundColor: "#fff",
	boxShadow: "none",
});

const Chip = styled(MuiChip)(({ theme }) => ({
	height: "48px",
	borderRadius: "24px",
	backgroundColor: theme.palette.primary.light,
	color: theme.palette.primary.dark,

	"&[aria-describedby]": {
		backgroundColor: theme.palette.primary.main,
		color: "#fff",
	},

	"&:hover": {
		backgroundColor: theme.palette.primary.main,
		color: "#fff",
	},

	"& *": {
		userSelect: "none",
	},

	"& .MuiChip-avatar": {
		flexShrink: 0,
		width: "34px",
		height: "34px",
		marginLeft: "8px",
	},

	"& .MuiChip-label": {
		lineHeight: 0,
		marginLeft: "4px",

		"& .MuiSvgIcon-root": {
			fontSize: "1.37500rem",
		},
	},
}));

const Header = () => {
	const [isProfilePopupShown, setIsProfilePopupShown] = React.useState(false);
	const [profilePopupAnchor, setProfilePopupAnchor] = React.useState(null);

	const handleClick = (event) => {
		setProfilePopupAnchor(event.currentTarget);
		setIsProfilePopupShown((previousOpen) => !previousOpen);
	};

	const closeProfilePopup = () => {
		setProfilePopupAnchor(null);
		setIsProfilePopupShown(false);
	};

	const canBeOpen = isProfilePopupShown && Boolean(profilePopupAnchor);
	const id = canBeOpen ? 'profile-popup' : undefined;

	return (
		<AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
			<Toolbar>
				<Link to="/">
					<Typography
						variant="h3"
						component="h1"
						sx={{
							color: "#000",
							textTransform: "uppercase",
							fontWeight: 700,
						}}
					>
						Minty
					</Typography>
				</Link>

				<Box ml="auto">
					<Avatar variant="rounded" color="primary">
						<TranslateOutlinedIcon />
					</Avatar>
				</Box>

				<Box ml="16px">
					<Avatar variant="rounded">
						<NotificationsNoneOutlinedIcon />
					</Avatar>
				</Box>

				<ClickAwayListener onClickAway={closeProfilePopup}>
					<Box ml="24px">
						<Chip
							aria-describedby={id}

							avatar={(
								<Avatar
									alt="User Account"
									src="https://www.berrydashboard.io/static/media/user-round.13b5a31bebd2cc6016d6db2cac8e92d1.svg"
								/>
							)}

							label={(
								<SettingsOutlinedIcon />
							)}

							onClick={handleClick}
						/>

						<ProfilePopup
							anchor={profilePopupAnchor}
							id={id}
							isShown={isProfilePopupShown}
							onClose={closeProfilePopup}
						/>
					</Box>
				</ClickAwayListener>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
