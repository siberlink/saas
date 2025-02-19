
import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Ensure CSS is imported
import logo from "../assets/siberlink-3.png"; // ✅ Import logo

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo-container">
                <img src={logo} alt="Siberlink" className="logo" />  {/* ✅ Add logo */}
            </div>
            <nav>
                <ul className="sidebar-list">
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/ai-recommendations">AI Recommendations</Link></li>
                    <li><Link to="/my-store-products">My Store Products</Link></li>
                    <li><Link to="/order-analytics">Order Analytics</Link></li>
                    <li><Link to="/marketing-automation">Marketing Automation</Link></li>
                    <li><Link to="/store-integrations">Store Integrations</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
