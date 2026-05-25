import React from "react";
import { Container, Typography } from "@mui/material";

import CypressLogo from "../components/SvgCypressLogo";

export default function Footer() {
  return (
    <Container maxWidth="sm" style={{ marginTop: 50 }}>
      <Typography variant="body2" color="textSecondary" align="center">
        Built by
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://cypress.io"
          aria-label="Cypress — visit cypress.io"
          title="Cypress — visit cypress.io"
        >
          {/* Screen-reader text: Cypress Cloud a11y expects visible-to-SR text or aria-label/title */}
          <span
            style={{
              position: "absolute",
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              border: 0,
            }}
          >
            Cypress
          </span>
          <CypressLogo
            style={{
              marginTop: -2,
              marginLeft: 5,
              height: "20px",
              width: "55px",
              verticalAlign: "middle",
            }}
          />
        </a>
      </Typography>
    </Container>
  );
}
