import { post } from "services/api/http";

export const login = (data) => {
	const {
		email,
		password,
	} = data;

	return post({
		url: "/auth/login/",

		data: {
			email,
			password,
		},
	});
};

export const register = (data) => {
	const {
		email,
		password,
	} = data;

	return post({
		url: "/auth/register/",

		data: {
			email,
			password,
		},
	});
};

export const logout = () => {
	return post({
		url: "/auth/logout/",
	});
};
