import React, { lazy, Suspense } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

// theme
import theme from "./themes/default";

import LoadingScreen from "./components/LoadingScreen";

import { useUser } from "./providers/UserProvider";

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

const AuthenticatedApp = lazy(() => import("./AuthenticatedApp"));
const UnauthenticatedApp = lazy(() => import("./UnauthenticatedApp"));

const App = () => {
  const user = useUser();

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Suspense fallback={<LoadingScreen />}>
          {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </Suspense>
      </>
    </ThemeProvider>
  );
};

export default App;
