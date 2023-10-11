import palette from "./palette";

export default {
	MuiSvgIcon: {
		styleOverrides: {
			root: {
				fontSize: "1.25rem",
			},

			sizeSmall: {
				fontSize: "1rem",
			},

			sizeLarge: {
				fontSize: "2.1875rem",
			},
		},
	},

	MuiListItemIcon: {
		styleOverrides: {
			root: {
				minWidth: "2rem",
			},
		},
	},

	MuiAvatar: {
		defaultProps: {
			color: "secondary",
			size: "root",
		},

		variants: [
			{
				props: {
					color: "secondary",
					variant: "rounded",
				},

				style: {
					backgroundColor: palette.secondary.light,
					color: palette.secondary.dark,
				},
			},

			{
				props: {
					color: "primary",
					variant: "rounded",
				},

				style: {
					backgroundColor: palette.primary.light,
					color: palette.primary.dark,
				},
			},

			{
				props: {
					color: "success",
					variant: "rounded",
				},

				style: {
					backgroundColor: palette.success.light,
					color: palette.success.dark,
				},
			},

			{
				props: {
					color: "warning",
					variant: "rounded",
				},

				style: {
					backgroundColor: palette.warning.light,
					color: palette.warning.dark,
				},
			},

			{
				props: {
					size: "root",
					variant: "rounded",
				},

				style: {
					width: "2.12500rem",
					height: "2.12500rem",
				},
			},

			{
				props: {
					size: "large",
					variant: "rounded",
				},

				style: {
					width: "2.75rem",
					height: "2.75rem",
				},
			},
		],

		styleOverrides: {
			rounded: {
				borderRadius: "8px",
			},
		},
	},

	MuiPaper: {
		styleOverrides: {
			elevation: {
				borderRadius: "8px",
			},
		},
	},

	MuiButton: {
		styleOverrides: {
			root: {
				textTransform: "none",
			},

			contained: {
				textTransform: "none",
			},
		},
	},

	MuiCardHeader: {
		styleOverrides: {
			root: {
				padding: "24px",

				"& .MuiCardHeader-title": {
					fontSize: "1.125rem",
					fontWeight: 500,
				},
			},
		},
	},

	MuiCardContent: {
		styleOverrides: {
			root: {
				padding: "24px",
			},
		},
	},

	MuiOutlinedInput: {
		styleOverrides: {
			root: {
				backgroundColor: "#f8fafc",
				borderRadius: "8px",

				"& .MuiOutlinedInput-notchedOutline": {
					borderColor: "#bdbdbd",
				},

				"&:hover $notchedOutline": {
					borderColor: "#364152",
				},
			},

			input: {
				backgroundColor: "#f8fafc",
			},
		},
	},
};
