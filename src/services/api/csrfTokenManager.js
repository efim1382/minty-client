import { get } from "services/api/http";

let csrfToken = null;
let pendingPromise = null;

export const getCsrfToken = () => {
	if (csrfToken) {
		return Promise.resolve(csrfToken);
	}

	if (!pendingPromise) {
		pendingPromise = get({ url: "/get-csrf-token/" })
			.then((data) => {
				csrfToken = data.csrfToken;
				pendingPromise = null;
				return data.csrfToken;
			})

			.catch((error) => {
				console.log(error);
			});
	}

	return pendingPromise;
};

export const resetToken = () => {
	csrfToken = null;
	pendingPromise = null;
};
