import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const ResetPassword = () => {
	return (
		<>
			<Typography
				variant="h3"
				component="h1"
				sx={{ textTransform: "uppercase" }}
				align="center"
			>
				Minty
			</Typography>

			<Typography
				variant="h2"
				color="secondary"
				align="center"
				mt={4}
			>
				Reset Your Password
			</Typography>

			<Typography
				variant="caption"
				align="center"
				component="p"
				mt={1}
			>
				Choose a new password and get back to exploring our platform
			</Typography>

			<Box component="form" mt={3}>
				<TextField
					fullWidth
					type="password"
					name="password"
					label="Password"
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									edge="end"
									size="large"
									onClick={() => {}}
									onMouseDown={() => {}}
								>
									{true ? <VisibilityIcon /> : <VisibilityOffIcon />}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>

				<Button
					fullWidth
					type="submit"
					variant="contained"
					color="secondary"
					size="large"
					sx={{ mt: 2 }}
				>
					Reset Password
				</Button>
			</Box>

			<Divider
				sx={{
					mt: 2,
					mb: 2.5,
				}}
			/>

			<Box align="center">
				<Typography
					variant="subtitle1"
					component={NavLink}
					to="/auth/login/"
					sx={{ textDecoration: "none" }}
				>
					Already have an account?
				</Typography>
			</Box>
		</>
	);
};

export default ResetPassword;
