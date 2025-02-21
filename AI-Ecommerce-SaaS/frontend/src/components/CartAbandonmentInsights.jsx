
import React from "react";
import "../styles/CartAbandonmentInsights.css";
import { Doughnut } from "react-chartjs-2";

const cartData = {
    abandonedCarts: 120,
    potentialLostRevenue: "$5,000",
    recoverySuggestion: "Offer 10% Discount",
};

const chartData = {
    labels: ["Abandoned Carts", "Recovered Carts"],
    datasets: [
        {
            data: [120, 45],
            backgroundColor: ["#FF6B6B", "#4CAF50"],
            hoverBackgroundColor: ["#FF3B3B", "#2E7D32"],
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

function CartAbandonmentInsights() {
    return (
        <div className="cai-cart-abandonment-insights cai-card">
            <h2>Cart Abandonment Insights</h2>
            <div className="cai-insights-container">
                <div className="cai-chart-container">
                    <Doughnut data={chartData} options={chartOptions} />
                </div>
                <div className="cai-insights-details">
                    <p><strong>Total Abandoned Carts:</strong> {cartData.abandonedCarts}</p>
                    <p><strong>Potential Lost Revenue:</strong> {cartData.potentialLostRevenue}</p>
                    <p><strong>AI Suggestion:</strong> {cartData.recoverySuggestion}</p>
                </div>
            </div>
        </div>
    );
}

export default CartAbandonmentInsights;
