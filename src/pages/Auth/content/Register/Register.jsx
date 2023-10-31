import React from "react";
import { Formik, Form } from "formik";
import Typography from "@mui/material/Typography";
import TextField from "components/Form/TextField";
import PasswordField from "components/Form/PasswordField";
import { NavLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useSnackbar } from "notistack";
import { register } from "pages/Auth/api";
import useAuth from "pages/Auth/store/useAuth";
import CircularProgress from "@mui/material/CircularProgress";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";

const Register = () => {
	const { login } = useAuth();
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();

	const onSubmit = (values) => {
		return register(values)
			.then(() => login(values))

			.then(() => {
				enqueueSnackbar("Registration successful! Welcome aboard!", { variant: "success" });
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

			<Formik initialValues={{}} onSubmit={onSubmit}>
				{({ isSubmitting }) => (
					<Box component={Form} mt={3}>
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
							disabled={isSubmitting}
							startIcon={(
								isSubmitting
									? <CircularProgress size={20} color="inherit" />
									: <HowToRegOutlinedIcon />
							)}
						>
							Sign Up
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
