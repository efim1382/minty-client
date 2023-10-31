import React, { useState, createContext, useMemo } from "react";
import PropTypes from "prop-types";
import * as authApi from "pages/Auth/api";
import { resetToken } from "services/api/csrfTokenManager";

const storageKey = "user";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const user = JSON.parse(localStorage.getItem(storageKey));
	const [currentUser, setCurrentUser] = useState(user);

	const login = (values) => authApi.login(values)
		.then((data) => {
			setCurrentUser(data.user);
			localStorage.setItem(storageKey, JSON.stringify(data.user));
			return data;
		});

	const logout = () => authApi.logout()
		.then(() => {
			localStorage.removeItem(storageKey);
			resetToken();
			setCurrentUser(null);
		});

	const value = useMemo(() => (
		{
			user: currentUser,
			login,
			logout,
		}
	), [JSON.stringify(currentUser)]);

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.any,
};

export default AuthProvider;
