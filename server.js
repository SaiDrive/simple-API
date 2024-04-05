// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a port number
const PORT = process.env.PORT || 3000;

const indianMetros = {
    "metros": [
      "Delhi Metro",
      "Mumbai Metro",
      "Chennai Metro",
      "Kolkata Metro",
      "Bangalore Metro",
      "Hyderabad Metro",
      "Kochi Metro",
      "Lucknow Metro",
      "Jaipur Metro",
      "Pune Metro",
      "Ahmedabad Metro",
      "Nagpur Metro",
      "Noida Metro",
      "Gurgaon Metro"
    ]
  }
  

const sendMetroList = (req, res) => {
    res.send(indianMetros);
  }

// Define routes
app.get('/getMetros', sendMetroList);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
