import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { light } from "styles/themes";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
	<ThemeProvider theme={light}>
		<StyledEngineProvider injectFirst>
			<RouterProvider router={router} />
		</StyledEngineProvider>
	</ThemeProvider>,
);
