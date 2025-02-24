
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DashboardHome from "./pages/DashboardHome";
import AISettings from "./pages/AISettings";
import Login from "./pages/Login";

import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import "../src/styles.css";


const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated"));

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("isAuthenticated");
      setIsAuthenticated(false);
      window.location.href = "/login"; // Redirect to login page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Router>
      {isAuthenticated ? (
        // ✅ Authenticated Layout (Dashboard with Sidebar)
        <div className="app-container">
          {isAuthenticated && <Sidebar handleLogout={handleLogout} />}

          <div className="content-wrapper"> {/* Ensures proper layout */}
            <div className="main-content">
              <Routes>
                <Route path="/dashboard" element={<PrivateRoute><DashboardHome /></PrivateRoute>} />
                <Route path="/ai-settings" element={<PrivateRoute><AISettings /></PrivateRoute>} />
                <Route path="*" element={<Navigate to="/dashboard" />} /> {/* Redirect unknown paths */}
              </Routes>
            </div>
          </div>
        </div>

      ) : (
        // ✅ Login Page (Fullscreen Layout)
        <div className="login-fullscreen">
          <Routes>
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} /> {/* Pass state update */}
            <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect unknown paths */}
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
