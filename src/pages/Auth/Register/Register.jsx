import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const Register = () => {
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
				Create Your Account
			</Typography>

			<Typography
				variant="caption"
				align="center"
				component="p"
				mt={1}
			>
				Set up your account and dive in
			</Typography>

			<Box component="form" mt={3}>
				<TextField
					fullWidth
					name="email"
					label="Email"
				/>

				<TextField
					fullWidth
					type="password"
					name="password"
					label="Password"
					sx={{ mt: 2 }}
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

				<FormControlLabel
					control={(
						<Checkbox
							color="secondary"
							sx={{
								"& .MuiSvgIcon-root": {
									fontSize: 24,
								},
							}}
						/>
					)}
					label={(
						<Typography variant="subtitle1">
							Agree with &nbsp;

							<Typography
								variant="subtitle1"
								component="a"
								href="/terms"
								target="_blank"
							>
								Terms & Condition.
							</Typography>
						</Typography>
					)}
					sx={{
						mt: 1,
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
					Sign Un
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

export default Register;
