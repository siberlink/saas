
import React from "react";
import "../styles/AIPricingInsights.css";

const pricingData = [
    {
        id: 1,
        product: "Wireless Headphones",
        currentPrice: "$99.99",
        aiRecommendedPrice: "$89.99",
        competitorPrice: "$95.99",
        optimizationScore: "80% Optimal",
        scoreClass: "good", // Green
    },
    {
        id: 2,
        product: "Smart Watch",
        currentPrice: "$149.99",
        aiRecommendedPrice: "$139.99",
        competitorPrice: "$145.00",
        optimizationScore: "60% Needs Review",
        scoreClass: "review", // Yellow
    },
    {
        id: 3,
        product: "Bluetooth Speaker",
        currentPrice: "$79.99",
        aiRecommendedPrice: "$69.99",
        competitorPrice: "$75.50",
        optimizationScore: "40% Adjust Pricing",
        scoreClass: "adjust", // Red
    },
];

function AIPricingInsights() {
    return (
        <div className="ppi-pricing-insights card">
            <h2>Pricing Insights</h2>
            <ul className="ppi-pricing-list">
                {pricingData.map((item) => (
                    <li key={item.id} className="ppi-pricing-item">
                        <div className="ppi-pricing-details">
                            <p><strong>{item.product}</strong></p>
                            <p>Current Price: {item.currentPrice}</p>
                            <p>AI Recommended Price: {item.aiRecommendedPrice}</p>
                            <p>Competitor Price: {item.competitorPrice}</p>
                            <p className={`ppi-optimization-score ${item.scoreClass}`}>{item.optimizationScore}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AIPricingInsights;