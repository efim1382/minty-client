import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import MuiTextField from "@mui/material/TextField";

const TextField = ({ name, ...props }) => {
	return (
		<Field name={name}>
			{({ field, form, meta }) => {
				const {
					onBlur,
					onChange,
					value = "",
				} = field;

				return (
					<MuiTextField
						name={name}
						value={value}
						onBlur={onBlur}
						onChange={onChange}
						{...props}
					/>
				);
			}}
		</Field>
	);
};

TextField.propTypes = {
	name: PropTypes.string.isRequired,
	InputProps: PropTypes.object,
};

export default TextField;
