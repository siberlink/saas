
import React from "react";
import "../styles/CustomerRetention.css";
import { Pie } from "react-chartjs-2";

const retentionData = {
    repeatCustomerRate: "65%",
    churnRate: "12%",
    popularPurchaseTime: "Evenings (6-9 PM)",
    aiStrategy: "Send Personalized Email Campaign",
};

const chartData = {
    labels: ["Repeat Customers", "Churned Customers", "New Customers"],
    datasets: [
        {
            data: [65, 12, 23],
            backgroundColor: ["#4CAF50", "#FF6B6B", "#FFC107"],
            hoverBackgroundColor: ["#2E7D32", "#FF3B3B", "#FFA000"],
        },
    ],
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: "bottom",
        },
    },
};

function CustomerRetention() {
    return (
        <div className="cr-customer-retention cr-card">
            <h2>Customer Retention & Engagement</h2>
            <div className="cr-retention-container">
                <div className="cr-chart-container">
                    <Pie data={chartData} options={chartOptions} />
                </div>
                <div className="cr-retention-details">
                    <p><strong>Repeat Customer Rate:</strong> {retentionData.repeatCustomerRate}</p>
                    <p><strong>Churn Rate:</strong> {retentionData.churnRate}</p>
                    <p><strong>Popular Purchase Time:</strong> {retentionData.popularPurchaseTime}</p>
                    <p><strong>AI Strategy:</strong> {retentionData.aiStrategy}</p>
                </div>
            </div>
        </div>
    );
}

export default CustomerRetention;
