// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
