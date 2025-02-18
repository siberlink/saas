
import React, { useEffect, useState } from "react";
import { fetchTestData } from "./api"; // ✅ Ensure correct import

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchTestData().then(response => {
      if (response) {
        setData(response.message);
      } else {
        setData("Failed to connect to backend.");
      }
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold">Backend says: {data || "Loading..."}</h1>
    </div>
  );
}

export default App;


