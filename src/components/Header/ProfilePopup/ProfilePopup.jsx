import React from "react";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import MuiListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import useAuth from "pages/Auth/store/useAuth";
import Divider from "@mui/material/Divider";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { styled } from "@mui/material/styles";

const ListItemButton = styled(MuiListItemButton)(({ theme }) => ({
	borderRadius: "8px",

	"&:hover": {
		backgroundColor: theme.palette.secondary.light,

		"& .MuiListItemIcon-root": {
			color: theme.palette.secondary.main,
		},
	},
}));

const ProfilePopup = ({ isShown, id, anchor, onClose }) => {
	const { logout } = useAuth();

	return (
		<Popper
			transition
			disablePortal
			id={id}
			open={isShown}
			anchorEl={anchor}
			modifiers={[
				{
					name: "offset",

					options: {
						offset: [0, 8],
					},
				},
			]}
		>
			{({ TransitionProps }) => (
				<Fade {...TransitionProps} timeout={350}>
					<Box
						sx={{ width: 332 }}
					>
						<Paper elevation={16} sx={{ p: 2 }}>
							<Typography variant="h4">
								Good Morning,
								{" "}

								<Typography
									component="span"
									variant="h4"
									sx={{ fontWeight: 400 }}
								>
									Artem
								</Typography>
							</Typography>

							<Typography variant="subtitle2">
								Manage your settings and preferences
							</Typography>

							<Divider
								sx={{
									mt: 2,
									mb: 2,
								}}
							/>

							<Paper
								elevation={0}
								sx={{ bgcolor: "warning.light" }}
							>
								<CardContent sx={{ p: 3 }}>
									<Typography variant="h4">Upgrade your plan</Typography>

									<Typography variant="subtitle2" sx={{ mt: 2 }}>
										70% discount for 1 years
										<br />
										subscriptions.
									</Typography>

									<Button
										color="warning"
										variant="contained"
										sx={{ mt: 2 }}
									>
										Go Premium
									</Button>
								</CardContent>
							</Paper>

							<Divider
								sx={{
									mt: 2,
									mb: 1,
								}}
							/>

							<List>
								<ListItemButton>
									<ListItemIcon>
										<SettingsOutlinedIcon />
									</ListItemIcon>

									<ListItemText>Settings</ListItemText>
								</ListItemButton>

								<ListItemButton sx={{ mt: "4px" }} onClick={logout}>
									<ListItemIcon>
										<LogoutOutlinedIcon />
									</ListItemIcon>

									<ListItemText>Logout</ListItemText>
								</ListItemButton>
							</List>
						</Paper>
					</Box>
				</Fade>
			)}
		</Popper>
	);
};

export default ProfilePopup;
