import React from "react";

import LoginView from "./views/Login";

import { useAuth } from "./providers/AuthProvider";

const UnauthenticatedApp = () => {
  const { login } = useAuth();

  return <LoginView onLogin={login} />;
};

export default UnauthenticatedApp;
