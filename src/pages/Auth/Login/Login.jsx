import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const Login = () => {
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
				Hi, Welcome Back
			</Typography>

			<Typography
				variant="caption"
				align="center"
				component="p"
				mt={1}
			>
				Enter your credentials to continue
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

				<Grid
					container
					alignItems="center"
					justifyContent="space-between"
					mt={1}
				>
					<Grid item>
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
								<Typography variant="body1">Keep me logged in</Typography>
							)}
						/>
					</Grid>

					<Grid item>
						<Typography
							variant="subtitle1"
							color="secondary"
							component={NavLink}
							to="/auth/forgot-password/"
							sx={{
								fontWeight: 500,
								textDecoration: "none",
							}}
						>
							Forgot Password?
						</Typography>
					</Grid>
				</Grid>

				<Button
					fullWidth
					type="submit"
					variant="contained"
					color="secondary"
					size="large"
					sx={{ mt: 2 }}
				>
					Sign In
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
					to="/auth/register/"
					sx={{ textDecoration: "none" }}
				>
					Don't have an account?
				</Typography>
			</Box>
		</>
	);
};

export default Login;
