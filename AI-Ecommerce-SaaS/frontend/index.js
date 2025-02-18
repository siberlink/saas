
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ✅ Correct path

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
