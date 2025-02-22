
import React from "react";
import SalesOverview from "../components/SalesOverview";
import BestSellingProducts from "../components/BestSellingProducts";
import AIPricingInsights from "../components/AIPricingInsights";
import "../styles.css";
import AIPoweredProductRecommendation from "../components/AIPoweredProductRecommendation";
import CartAbandonmentInsights from "../components/CartAbandonmentInsights";
import CustomerRetention from "../components/CustomerRetention";

function DashboardHome() {
    return (
        <div>
            <div className="dashboard-card">
                <h1 className="page-header">Hello James, Welcome to Your Dashboard!</h1>
                <p>Overview your store analytics to make decisions</p>
            </div>
            <div className="dashboard-grid">
                <div><SalesOverview /></div>
                <div><BestSellingProducts /></div>
                <div><AIPricingInsights /></div>
                <div><AIPoweredProductRecommendation /></div>
                <div><CartAbandonmentInsights /></div>
                <div><CustomerRetention /></div>
            </div>
        </div>
    );
}

export default DashboardHome;
