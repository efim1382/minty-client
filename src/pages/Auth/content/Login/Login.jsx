import React from "react";
import { Formik, Form } from "formik";
import TextField from "components/Form/TextField";
import PasswordField from "components/Form/PasswordField";
import Typography from "@mui/material/Typography";
import { NavLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
import { useSnackbar } from "notistack";
import useAuth from "pages/Auth/store/useAuth";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const Login = () => {
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();
	const { login } = useAuth();

	const onSubmit = (values) => {
		return login(values)
			.then(() => {
				enqueueSnackbar("Login successful! Welcome back", { variant: "success" });
				navigate("/");
			})

			.catch((error) => {
				console.log(error);
			});
	};

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

			<Formik initialValues={{}} onSubmit={onSubmit}>
				{({ isSubmitting }) => (
					<Box
						component={Form}
						mt={3}
					>
						<TextField
							fullWidth
							type="email"
							name="email"
							label="Email"
						/>

						<PasswordField
							fullWidth
							name="password"
							label="Password"
							sx={{ mt: 2 }}
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
							disabled={isSubmitting}
							startIcon={(
								isSubmitting
									? <CircularProgress size={20} color="inherit" />
									: <LoginOutlinedIcon />
							)}
						>
							Sign In
						</Button>
					</Box>
				)}
			</Formik>

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
