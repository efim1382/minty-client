import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const PasswordField = ({ name, InputProps, ...props }) => {
	const isPasswordVisibilityActive = false;

	return (
		<Field name={name}>
			{({ field, form, meta }) => {
				const {
					onBlur,
					onChange,
					value = "",
				} = field;

				return (
					<TextField
						type="password"
						name={name}
						value={value}
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
										{
											isPasswordVisibilityActive
												? <VisibilityIcon />
												: <VisibilityOffIcon />
										}
									</IconButton>
								</InputAdornment>
							),

							...InputProps,
						}}
						onBlur={onBlur}
						onChange={onChange}
						{...props}
					/>
				);
			}}
		</Field>
	);
};

PasswordField.defaultProps = {
	InputProps: {},
};

PasswordField.propTypes = {
	name: PropTypes.string.isRequired,
	InputProps: PropTypes.object,
};

export default PasswordField;
