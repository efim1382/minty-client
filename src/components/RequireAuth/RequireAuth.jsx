import React from "react";
import PropTypes from "prop-types";
import { useLocation, Navigate } from "react-router-dom";
import useAuth from "pages/Auth/store/useAuth";

const RequireAuth = ({ children }) => {
	const location = useLocation();
	const { user } = useAuth();

	if (!user) {
		return (
			<Navigate
				replace
				to="/auth/login/"
				state={{ from: location }}
			/>
		);
	}

	return children;
};

RequireAuth.propTypes = {
	children: PropTypes.any.isRequired,
};

export default RequireAuth;
