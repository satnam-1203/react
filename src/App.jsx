import React, { useState } from 'react';

function App() {
    // State variable to store response data
    const [responseData, setResponseData] = useState('');

    // Function to handle creating a cookie
    const handleCreateCookie = async () => {
        try {
            // Send a GET request to the /create-cookie route
            const response = await fetch('https://test-api-66wh.onrender.com/create-cookie', {
    credentials: 'include',
});

            // Parse the response as text
            const data = await response.text();
            // Update the state with the response data
            setResponseData(data);
        } catch (error) {
            // Handle errors
            console.error('Error creating cookie:', error);
            setResponseData('Failed to create cookie.');
        }
    };

    // Function to handle getting the cookie data
    const handleGetCookie = async () => {
        try {
            // Send a GET request to the /get-cookie route
           const response = await fetch('https://test-api-66wh.onrender.com/get-cookie', {
    credentials: 'include',
});

            // Parse the response as text
            const data = await response.text();
            // Update the state with the response data
            setResponseData(data);
        } catch (error) {
            // Handle errors
            console.error('Error getting cookie:', error);
            setResponseData('Failed to get cookie data.');
        }
    };

    return (
        <div>
            <h1>Session and Cookie Demo</h1>
            {/* Button to create a cookie */}
            <button onClick={handleCreateCookie}>Create Cookie</button>
            {/* Button to get the cookie data */}
            <button onClick={handleGetCookie}>Get Cookie Data</button>
            {/* Display the response data */}
            <p>{responseData}</p>
        </div>
    );
}

export default App;
