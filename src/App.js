import React from "react";
import { Router } from "@reach/router";
import { createGlobalStyle, ThemeProvider } from "styled-components";

// theme
import theme from "./themes/default";

// routes
import { routes } from "./config";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 14px;
  }

  body {
    background-color: ${props => props.theme.appBody.bgColor};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          {routes.map(route => {
            return <route.component key={route.id} path={route.path} />;
          })}
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
