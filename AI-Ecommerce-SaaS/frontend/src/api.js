import axios from 'axios';

//const API_URL = 'http://localhost:5000/api'; // Adjust if needed
const API_URL = 'http://localhost:5000/api'; // Ensure backend URL is correct

// Function to fetch test data from the backend
export const fetchTestData = async () => {
    try {
        const response = await axios.get(`${API_URL}/test`);
        return response.data; // Expected to return { message: "Backend is working!" }
    } catch (error) {
        console.error('Error fetching test data:', error);
        return null;
    }
};

// Add more API functions here if needed