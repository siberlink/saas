
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Import Firebase auth
import "../styles/login.css"; // Import the CSS file for styling

const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState("");
    //const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        if (event) event.preventDefault(); // Prevents form submission reload
        try {
            await signInWithEmailAndPassword(auth, email, password);
            //console.log("User:", user);
            localStorage.setItem("isAuthenticated", "true");
            setIsAuthenticated("true"); // ✅ Update state to trigger re-render
            navigate("/dashboard"); // Redirect to dashboard
        } catch (error) {
            alert("Error signing in: " + error.message);
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <h2 className="login-title">Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label style={{ fontSize: "14px", fontWeight: "600" }}>E-mail:</label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: "1px solid #ddd",
                                borderRadius: "5px",
                                marginTop: "5px"
                            }}
                        />
                    </div>
                    <div className="input-group">
                        <label style={{ fontSize: "14px", fontWeight: "600" }}>Password:</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleLogin(e)} // ✅ Listens for Enter key
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: "1px solid #ddd",
                                borderRadius: "5px",
                                marginTop: "5px"
                            }}
                        />
                    </div>
                </form>
                <Button onClick={handleLogin} className="login-button">
                    Login
                </Button>
            </div>
        </div>
    );
};

export default Login;
