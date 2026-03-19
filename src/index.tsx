import React from "react";
import { createRoot } from "react-dom/client";
import { Router } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import App from "./containers/App";
import { history } from "./utils/historyUtils";
import { ThemeProvider } from "./contexts/ThemeContext";

const root = createRoot(document.getElementById("root")!);

root.render(
  <Router history={history}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </Router>
);
