const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// GET endpoint
app.get('/bfhl', (req, res) => {
//   const operationCode = res.json;
  res.json({ operation_code: 1 });
});

// POST endpoint
// POST endpoint
app.post('/bfhl', (req, res) => {
    const requestData = req.body.data || []; // Assuming the data is an array within the request body
  
    const is_success = true;
    const user_id = "abhinav_agarwal_04072002";
    const email = "aa6588@srmist.edu.in";
    const roll_number = "RA2011033010086";
    const numbers = requestData.filter(item => !isNaN(item)); // Filter out non-numeric elements
    const alphabets = requestData.filter(item => isNaN(item)); // Filter out numeric elements
    const highest_alphabet = findHighestAlphabet(alphabets);
  
    res.json({
      is_success: is_success,
      user_id: user_id,
      email: email,
      roll_number: roll_number,
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: highest_alphabet
    });
  });
  
  // Function to find the highest alphabet in an array
  function findHighestAlphabet(arr) {
    if (arr.length === 0) {
        return [];
      }
    return arr.reduce((highest, current) => {
      return current > highest ? current : highest;
    }, 'A'); // Initialize with 'A'
  }
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
