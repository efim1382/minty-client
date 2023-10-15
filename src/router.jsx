import React from "react";

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Navigate,
} from "react-router-dom";

import GlobalLayout from "components/Layout/GlobalLayout";
import Layout from "components/Layout";
import AuthLayout from "pages/Auth/components/Layout";

import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import ForgotPassword from "pages/Auth/ForgotPassword";
import ResetPassword from "pages/Auth/ResetPassword";

import Dashboard from "pages/Dashboard";
import Analytics from "pages/Analytics";
import Portfolios from "pages/Portfolios";
import PortfolioDetails from "pages/Portfolios/Details";
import RealEstate from "pages/RealEstate";
import Deals from "pages/Deals";

import NotFound from "pages/NotFound";

import Contact from "pages/Contact";
import Faq from "pages/Faq";
import Privacy from "pages/Privacy";

const router = (
	<Route path="/" element={<GlobalLayout />}>
		<Route path="/" element={<Layout />}>
			<Route index element={<Dashboard />} />
			<Route path="/analytics/" element={<Analytics />} />
			<Route path="/portfolios/" element={<Portfolios />} />
			<Route path="/portfolios/:portfolioId/" element={<PortfolioDetails />} />
			<Route path="/real-estate/" element={<RealEstate />} />
			<Route path="/deals/" element={<Deals />} />
			<Route path="/contact/" element={<Contact />} />
			<Route path="/faq/" element={<Faq />} />
			<Route path="/privacy/" element={<Privacy />} />
		</Route>

		<Route path="/auth/" element={<AuthLayout />}>
			<Route index element={<Navigate to="/auth/login/" />} />
			<Route path="/auth/login/" element={<Login />} />
			<Route path="/auth/register/" element={<Register />} />
			<Route path="/auth/forgot-password/" element={<ForgotPassword />} />
			<Route path="/auth/reset-password/" element={<ResetPassword />} />
		</Route>

		<Route path="*" element={<NotFound />} />
	</Route>
);

export default createBrowserRouter(
	createRoutesFromElements(
		router,
	),

	{
		basename: "/",
	},
);
