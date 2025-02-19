
import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
//import "../styles.css";
import "../styles/SalesOverview.css";

function SalesOverview() {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Sales Trend",
                data: [40000, 45000, 50000, 55000, 60000, 65000],
                borderColor: "#4CAF50",
                backgroundColor: "rgba(76, 175, 80, 0.2)",
                tension: 0.3,
            },
        ],
    };

    return (
        <div className="sales-overview card">
            <h2>Sales Overview</h2>
            <div className="stats">
                <p><strong>Total Sales:</strong> $50,000</p>
                <p><strong>Number of Orders:</strong> 1,200</p>
                <p><strong>Conversion Rate:</strong> 2.5%</p>
                <p><strong>Growth:</strong> +15% this month</p>
            </div>
            <Line data={data} />
        </div>
    );
}

export default SalesOverview;