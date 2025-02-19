
import React from "react";
import "../styles/AIPoweredProductRecommendation.css";

import smartphoneImg from "../assets/smartphone.png";
import headphonesImg from "../assets/headphones.png";
import chargingPadImg from "../assets/charging-pad.png";
import homeAssistantImg from "../assets/home-assistant.png";

const recommendedProducts = [
    {
        id: 1,
        name: "Smartphone G12",
        image: smartphoneImg,
        demandScore: "85% High Demand",
        recommendedPrice: "$599.99",
    },
    {
        id: 2,
        name: "Noise Cancelling Headphones",
        image: headphonesImg,
        demandScore: "90% High Demand",
        recommendedPrice: "$199.99",
    },
    {
        id: 3,
        name: "Wireless Charging Pad",
        image: chargingPadImg,
        demandScore: "75% Moderate Demand",
        recommendedPrice: "$49.99",
    },
    {
        id: 4,
        name: "Smart Home Assistant",
        image: homeAssistantImg,
        demandScore: "95% Trending",
        recommendedPrice: "$149.99",
    },
];

function AIPoweredProductRecommendation() {
    return (
        <div className="ai-product-recommendation cardai">
            <h2>AI-Powered Product Recommendations</h2>
            <div className="ai-product-grid">
                {recommendedProducts.map((product) => (
                    <div key={product.id} className="ai-product-card">
                        <img src={product.image} alt={product.name} className="ai-product-image" />
                        <div className="ai-product-details">
                            <p><strong>{product.name}</strong></p>
                            <p>Market Demand: {product.demandScore}</p>
                            <p>AI Suggested Price: {product.recommendedPrice}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AIPoweredProductRecommendation;