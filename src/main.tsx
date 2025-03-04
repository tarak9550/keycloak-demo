import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import keycloak from "./keycloak";
import PatientRegistration from "./components/patient/PatientRegistration"; 

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    keycloak.init({ onLoad: "check-sso", checkLoginIframe: false })
      .then(authenticated => {
        setIsAuthenticated(authenticated);
        setLoading(false);
      })
      .catch(error => {
        console.error("Keycloak init error", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!isAuthenticated) {
    return (
      <div>
        <h2>Login Required</h2>
        <button onClick={() => keycloak.login()}>Login with Keycloak</button>
      </div>
    );
  }

  return children;
};

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute><PatientRegistration /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
