
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DashboardHome from "./pages/DashboardHome";
import AIRecommendations from "./pages/AIRecommendations";
import MyStoreProducts from "./pages/MyStoreProducts";
import OrderAnalytics from "./pages/OrderAnalytics";
import MarketingAutomation from "./pages/MarketingAutomation";
import StoreIntegrations from "./pages/StoreIntegrations";
import Settings from "./pages/Settings";
//import SalesOverview from "./components/SalesOverview";
import "../src/styles.css"; // Import regular CSS


function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/ai-recommendations" element={<AIRecommendations />} />
            <Route path="/my-store-products" element={<MyStoreProducts />} />
            <Route path="/order-analytics" element={<OrderAnalytics />} />
            <Route path="/marketing-automation" element={<MarketingAutomation />} />
            <Route path="/store-integrations" element={<StoreIntegrations />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;