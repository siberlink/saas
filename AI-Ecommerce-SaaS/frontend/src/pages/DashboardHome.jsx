
import React from "react";
import SalesOverview from "../components/SalesOverview";
import BestSellingProducts from "../components/BestSellingProducts";
import AIPricingInsights from "../components/AIPricingInsights";
import "../styles.css";
import AIPoweredProductRecommendation from "../components/AIPoweredProductRecommendation";

function DashboardHome() {
    return (
        <div>
            <div className="dashboard-card">
                <h1 className="page-header">Hello James, Welcome to Your Dashboard!</h1>
                <p>Manage your AI-powered tools and store settings.</p>
            </div>
            <div className="dashboard-grid">
                <div><SalesOverview /></div>
                <div><BestSellingProducts /></div>
                <div><AIPricingInsights /></div>
                <div><AIPoweredProductRecommendation /></div>
            </div>
        </div>
    );
}

export default DashboardHome;
