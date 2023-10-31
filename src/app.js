import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "pages/Auth/store/AuthProvider";
import router from "./router";
import { SnackbarProvider } from "notistack";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { light } from "styles/themes";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
	<ThemeProvider theme={light}>
		<StyledEngineProvider injectFirst>
			<SnackbarProvider autoHideDuration={3000}>
				<AuthProvider>
					<RouterProvider router={router} />
				</AuthProvider>
			</SnackbarProvider>
		</StyledEngineProvider>
	</ThemeProvider>,
);
