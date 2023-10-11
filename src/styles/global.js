import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const GlobalStyle = createGlobalStyle`
	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	html, body {
		-webkit-font-smoothing: antialiased;
		text-size-adjust: 100%;
		height: 100%;
	}

	body {
		display: flex;
		flex-direction: column;
		font-family: "Roboto", sans-serif;
		color: rgb(54, 65, 82);
		margin: 0;
	}
`;

export default GlobalStyle;
