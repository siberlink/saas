
import React from "react";
import AISettingss from "./AISettings";
import "../styles.css";

function DashboardHome() {
    return (
        <div className="dashboard-container"> {/* ✅ Ensures full width */}
            <div className="dashboard-card">
                <h1 className="page-header">Hello James, Welcome to Your Dashboard!</h1>
                <p>Here you manage global</p>
            </div>
            <div className="dashboard-grid">
                {/* Additional content here */}
            </div>
        </div>
    );
}


export default DashboardHome;
