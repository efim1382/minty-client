const baseUrl = `${process.env.API_HOST}/api`;

const apiConfig = {

	headers: {
		"Content-Type": "application/json",
	},
};

export const get = async (payload) => {
	const { url } = payload;
	const response = await fetch(`${baseUrl}${url}`);

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

	const response = await fetch(`${baseUrl}${url}`, {
		method: "POST",

		headers: {
			"Content-Type": "application/json",
		},

		body: JSON.stringify(data),
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

export default {
	get,
	post,
};
