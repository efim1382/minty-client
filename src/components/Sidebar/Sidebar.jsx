import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import MuiBox from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import navigation from "./navigation.config";
import { headerHeight } from "components/Header/Header";
import styled from "styled-components";

const sidebarWidth = 260;

const Drawer = styled(MuiDrawer)`
	flex-shrink: 0;
	width: ${sidebarWidth}px;

	& .MuiDrawer-paper {
		width: ${sidebarWidth}px;
		border: none;
	}
`;

const Box = styled(MuiBox)`
	display: flex;
	flex-direction: column;
	min-height: calc(100% - ${headerHeight}px);
	overflow: auto;
	margin-top: ${headerHeight}px;
`;

const Sidebar = () => {
	const location = useLocation();

	return (
		<Drawer variant="permanent">
			<Box
				sx={{
					pl: "16px",
					pr: "16px",
				}}
			>
				{navigation.map((group) => {
					let sx = {};

					if (group.key === "other") {
						sx = { mt: "auto" };
					}

					return (
						<List key={group.key} sx={sx}>
							{group.items.map((item) => {
								const isHome = item.href === "/";

								const isSelected = isHome
									? location.pathname === "/"
									: location.pathname.includes(item.href);

								return (
									<ListItemButton
										key={item.name}
										component={NavLink}
										to={item.href}
										selected={isSelected}
										sx={{
											borderRadius: "8px",

											"&:not(:first-of-type)": {
												marginTop: "4px",
											},

											"&.Mui-selected": {
												bgcolor: (theme) => theme.palette.secondary.light,
												color: (theme) => theme.palette.secondary.main,

												"&:hover": {
													bgcolor: (theme) => theme.palette.secondary.light,
												},

												"& .MuiListItemIcon-root": {
													color: (theme) => theme.palette.secondary.main,
												},
											},

											"&:hover": {
												bgcolor: (theme) => theme.palette.secondary.light,
											},
										}}
									>
										<ListItemIcon>
											<item.Icon fontSize="small" />
										</ListItemIcon>

										<ListItemText>{item.name}</ListItemText>
									</ListItemButton>
								);
							})}
						</List>
					);
				})}
			</Box>
		</Drawer>
	);
};

export default Sidebar;
