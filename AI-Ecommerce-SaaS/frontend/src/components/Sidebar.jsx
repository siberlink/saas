
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

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo-container">
                <img src={logo} alt="Siberlink" className="logo" />  {/* ✅ Add logo */}
            </div>
            <nav>
                <ul className="sidebar-list">

                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/account-settings">Account Settings</Link></li>
                    <li><Link to="/marketing-automation">Marketing Automation</Link></li>
                    <li><Link to="/order-analytics">Order Analytics</Link></li>
                    <li><Link to="/product-automation">Product Automation</Link></li>
                    <li><Link to="/product-discovery">Product Discovery</Link></li>
                    {/*<li><Link to="/ai-product-automation">Product Automation</Link></li>*/}

                    <li><Link to="/store-integrations">Store Integrations</Link></li>

                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
