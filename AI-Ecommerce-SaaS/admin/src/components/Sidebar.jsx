
import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Ensure CSS is imported
import logo from "../assets/siberlink-3.png"; // ✅ Import logo

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".sidebar-list a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(el => el.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

function Sidebar({ handleLogout }) {
    return (
        <div className="sidebar">
            <div className="logo-container">
                <img src={logo} alt="Siberlink" className="logo" />  {/* ✅ Add logo */}
            </div>
            <nav>
                <ul className="sidebar-list">

                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/ai-settings">AI Settings</Link></li>


                </ul>
            </nav>

            {/* ✅ Move Logout Button to Bottom */}
            <div className="sidebar-footer">
                <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>
            </div>

        </div>
    );
}

export default Sidebar;
