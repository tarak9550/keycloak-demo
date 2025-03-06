import { JSX, useEffect, useState } from "react";
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
        if (!authenticated) {
          keycloak.login(); // Automatically trigger login if not authenticated
        } else {
          setIsAuthenticated(true);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Keycloak init error", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return isAuthenticated ? children : <div>Redirecting to login...</div>;
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
