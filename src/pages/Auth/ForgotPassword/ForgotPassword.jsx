import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const ForgotPassword = () => {
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
				Forgot Your Password?
			</Typography>

			<Typography
				variant="caption"
				align="center"
				component="p"
				mt={1}
			>
				No worries! Enter your email and we'll guide you through the reset process
			</Typography>

			<Box component="form" mt={3}>
				<TextField
					fullWidth
					name="email"
					label="Email"
				/>

				<Button
					fullWidth
					type="submit"
					variant="contained"
					color="secondary"
					size="large"
					sx={{ mt: 2 }}
				>
					Send Mail
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

export default ForgotPassword;
