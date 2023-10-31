import { getCsrfToken, resetToken } from "./csrfTokenManager";

const baseUrl = `${process.env.API_HOST}/api`;

const ERROR_INVALID_CSRF_TOKEN = "invalid_csrf_token";

let retryNumber = 0;

export const get = async (payload) => {
	const { url } = payload;

	const response = await fetch(`${baseUrl}${url}`, {
		credentials: "include",
	});

	if (!response.ok) {
		const message = await response.text();

		const errorObject = {
			code: response.status,
			message,
		};

		throw errorObject;
	}

	return await response.json();
};

export const post = async (payload) => {
	const { url, data } = payload;
	const csrfToken = await getCsrfToken();

	const response = await fetch(`${baseUrl}${url}`, {
		method: "POST",
		credentials: "include",

		headers: {
			"Content-Type": "application/json",
			"Csrf-Token": csrfToken,
		},

		body: JSON.stringify(data),
	});

	if (!response.ok) {
		const error = await response.json();

		if (error.code === ERROR_INVALID_CSRF_TOKEN) {
			if (retryNumber < 2) {
				retryNumber++;
				resetToken();
				return await post(payload);
			}
		}

		retryNumber = 0;

		const errorObject = {
			statusCode: response.status,
			error,
		};

		throw errorObject;
	}

	return await response.json();
};

export default {
	get,
	post,
};
