
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend requests

const PORT = process.env.PORT || 5000;

// ✅ Fix: Add a root route for direct browser access
app.get('/', (req, res) => {
    res.send('Welcome to the AI E-Commerce SaaS Backend!');
});

// ✅ API test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is working!' });
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
