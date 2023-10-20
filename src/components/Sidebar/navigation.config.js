import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";

export default [
	{
		key: "main",

		items: [
			{
				name: "Dashboard",
				href: "/",
				Icon: DashboardOutlinedIcon,
			},

			{
				name: "My Portfolios",
				href: "/portfolios/",
				Icon: CasesOutlinedIcon,
			},

			{
				name: "My Funds",
				href: "/funds/",
				Icon: LocalAtmOutlinedIcon,
			},
		],
	},

	{
		key: "other",
		isStickyToBottom: true,

		items: [
			{
				name: "Contact Us",
				href: "/contact/",
				Icon: PhoneInTalkOutlinedIcon,
			},

			{
				name: "FAQs",
				href: "/faq/",
				Icon: HelpOutlineOutlinedIcon,
			},

			{
				name: "Privacy Policy",
				href: "/privacy/",
				Icon: PrivacyTipOutlinedIcon,
			},
		],
	},
];
