import React, { forwardRef } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { NumericFormat } from "react-number-format";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

const NumberFormatCustom = forwardRef((props, ref) => {
	const { onChange, ...other } = props;

	return (
		<NumericFormat
			{...other}
			thousandSeparator
			getInputRef={ref}
			decimalScale={2}
			onValueChange={(values) => {
				onChange({
					target: {
						value: values.value,
					},
				});
			}}
		/>
	);
});

const items = [
	{
		name: "General Expenses",
		defaultValue: 50,
		result: "$13,444.00",
	},

	{
		name: "Investments",
		defaultValue: 13,
		result: "$1,444.00",
	},

	{
		name: "Safety Cushion",
		defaultValue: 13,
		result: "$1,444.00",
	},

	{
		name: "Vacation",
		defaultValue: 12,
		result: "$1,444.00",
	},

	{
		name: "Personal Wishes",
		defaultValue: 12,
		result: "$1,444.00",
	},
];

const Distribution = () => {
	return (
		<Card>
			<CardHeader
				title="Income Distribution"
				subheader="Allocate percentages of your income to different categories"
			/>

			<CardContent sx={{ pt: 0 }}>
				<TextField
					fullWidth
					size="small"
					label="Enter your income"
					defaultValue={115000}
					InputProps={{
						inputComponent: NumberFormatCustom,
						startAdornment: (
							<InputAdornment position="start">$</InputAdornment>
						),
					}}
				/>

				<List>
					{items.map((item) => (
						<ListItem
							key={item.name}
							sx={{
								pl: 0,
								pr: 0,
							}}
						>
							<Typography component="p" sx={{ width: 120 }}>{item.name}</Typography>

							<TextField
								size="small"
								variant="standard"
								sx={{
									ml: 2,
									width: 30,
									"& .MuiInputBase-input": {
										p: 0,
									},
								}}
								defaultValue={item.defaultValue}
								InputProps={{
									endAdornment: <InputAdornment sx={{ ml: 0 }} position="end">%</InputAdornment>,
								}}
								inputProps={{
									maxLength: 2,
								}}
							/>

							<Typography
								sx={{
									ml: "auto",
									fontWeight: 500,
								}}
							>
								{item.result}
							</Typography>
						</ListItem>
					))}
				</List>
			</CardContent>
		</Card>
	);
};

export default Distribution;
