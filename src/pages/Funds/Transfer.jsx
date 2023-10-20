import React, { forwardRef } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled, lighten, darken } from "@mui/system";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { NumericFormat } from "react-number-format";

const options = [
	{
		source: "Monobank",
		label: "Currency Card USD",
		value: "mono_usd",
	},

	{
		source: "Monobank",
		label: "Black Card UAH",
		value: "mono_uah",
	},

	{
		source: "A-Bank",
		label: "Currency Card USD",
		value: "abank_usd",
	},

	{
		source: "A-Bank",
		label: "Green Card UAH",
		value: "abank_uah",
	},
];

const GroupHeader = styled("div")(({ theme }) => ({
	position: "sticky",
	top: "-8px",
	display: "flex",
	alignItems: "center",
	padding: "4px 10px",

	"& > img": {
		flexShrink: 0,
		width: "20px",
		weight: "20px",
		objectFit: "cover",
		marginRight: "8px",
		borderRadius: "100%",
	},
}));

const GroupItems = styled("ul")({
	padding: 0,
});

const sourcesImages = {
	"Monobank": "https://asset.brandfetch.io/id-CBRc8NA/idEsOSs4jS.jpeg",
	"A-Bank": "https://play-lh.googleusercontent.com/PL_cB7f5aicZJwM4zHc5fJuTHS0qGyg5SWo4hbFOzO80O2mgpRalaLLbSXCTs3Cnx_M=s96-rw",
};

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

const Transfer = () => {
	return (
		<Card sx={{ height: "100%" }}>
			<CardHeader
				title="Fund Transfer"
				subheader="Seamlessly transfer funds between your accounts"
			/>

			<CardContent component="form">
				<Grid container spacing={2}>
					<Grid item
						xs={12}
						lg={6}
					>
						<Autocomplete
							disablePortal
							fullWidth
							disableClearable
							id="transfer-from"
							options={options}
							defaultValue={options[0]}
							groupBy={(option) => option.source}
							renderInput={(params) => (
								<TextField
									{...params}
									label="From"
									InputProps={{
										...params.InputProps,

										startAdornment: (
											<InputAdornment
												position="start"
												sx={{
													"& > img": {
														width: "20px",
														height: "20px",
														borderRadius: "100%",
														objectFit: "cover",
													},
												}}
											>
												<img
													loading="lazy"
													src="https://asset.brandfetch.io/id-CBRc8NA/idEsOSs4jS.jpeg"
													alt=""
												/>
											</InputAdornment>
										),
									}}
								/>
							)}
							renderGroup={(params) => (
								<li key={params.key}>
									<GroupHeader>
										<img
											loading="lazy"
											src={sourcesImages[params.group]}
											alt=""
										/>

										{params.group}
									</GroupHeader>

									<GroupItems>{params.children}</GroupItems>
								</li>
							)}
						/>
					</Grid>

					<Grid item
						xs={12}
						lg={6}
					>
						<Autocomplete
							disablePortal
							fullWidth
							disableClearable
							id="transfer-to"
							options={options}
							defaultValue={options[0]}
							groupBy={(option) => option.source}
							renderInput={(params) => (
								<TextField
									{...params}
									label="To"
									InputProps={{
										...params.InputProps,

										startAdornment: (
											<InputAdornment
												position="start"
												sx={{
													"& > img": {
														flexShrink: 0,
														width: "20px",
														height: "20px",
														borderRadius: "100%",
														objectFit: "cover",
													},
												}}
											>
												<img
													loading="lazy"
													src="https://play-lh.googleusercontent.com/PL_cB7f5aicZJwM4zHc5fJuTHS0qGyg5SWo4hbFOzO80O2mgpRalaLLbSXCTs3Cnx_M=s96-rw"
													alt=""
												/>
											</InputAdornment>
										),
									}}
								/>
							)}
							renderGroup={(params) => (
								<li key={params.key}>
									<GroupHeader>
										<img
											loading="lazy"
											src={sourcesImages[params.group]}
											alt=""
										/>

										{params.group}
									</GroupHeader>

									<GroupItems>{params.children}</GroupItems>
								</li>
							)}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							fullWidth
							name="amount"
							label="Amount"
							InputProps={{
								inputComponent: NumberFormatCustom,
								startAdornment: (
									<InputAdornment position="start">$</InputAdornment>
								),
							}}
						/>
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
					Transfer Now
				</Button>
			</CardContent>
		</Card>
	);
};

export default Transfer;
