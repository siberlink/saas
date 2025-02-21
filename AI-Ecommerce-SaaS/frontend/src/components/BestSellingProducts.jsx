
import React from "react";
import "../styles/BestSellingProducts.css";

import headphonesImg from "../assets/head-phone.png";
import watchImg from "../assets/smart-watch.png";
import speakerImg from "../assets/speaker.png";

const bestSellingProducts = [
    {
        id: 1,
        name: "Wireless Headphones",
        image: headphonesImg,  // ✅ Local Image
        unitsSold: 1500,
        revenue: "$75,000",
        profitMargin: "40%",
    },
    {
        id: 2,
        name: "Smart Watch",
        image: watchImg,  // ✅ Local Image
        unitsSold: 1200,
        revenue: "$60,000",
        profitMargin: "35%",
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        image: speakerImg,  // ✅ Local Image
        unitsSold: 1000,
        revenue: "$50,000",
        profitMargin: "30%",
    },
];

function BestSellingProducts() {
    return (
        <div className="best-selling-products bsp-card">
            <h2>Best-Selling Products</h2>
            <ul className="bsp-product-list">
                {bestSellingProducts.map((product) => (
                    <li key={product.id} className="bsp-product-item">
                        <img src={product.image} alt={product.name} className="bsp-product-image" />
                        <div className="bsp-product-details">
                            <p><strong>{product.name}</strong></p>
                            <p>Units Sold: {product.unitsSold}</p>
                            <p>Revenue: {product.revenue}</p>
                            <p>Profit Margin: {product.profitMargin}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BestSellingProducts;
