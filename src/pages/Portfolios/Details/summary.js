import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import ManageHistoryOutlinedIcon from "@mui/icons-material/ManageHistoryOutlined";

export default [
	{
		price: "$324,122",
		title: "Total Value",

		icon: {
			Element: AccountBalanceWalletOutlinedIcon,
			color: "primary",
		},
	},

	{
		price: "+$4,232",
		title: "Total Profit",

		icon: {
			Element: TrendingUpOutlinedIcon,
			color: "secondary",
		},
	},

	{
		price: "+0.63%",
		title: "ROI",

		icon: {
			Element: ShowChartOutlinedIcon,
			color: "success",
		},
	},

	{
		price: "-$55.03",
		title: "Daily Change",

		icon: {
			Element: ManageHistoryOutlinedIcon,
			color: "warning",
		},
	},
];
