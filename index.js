// Import the Express module, which is a function to create an Express application
const express = require('express');

// Call the express function to create an Express app instance
const app = express();

// Define the server listening port, you can change this; here it is set to 3000
const PORT = 3000;

// Use the built-in middleware express.static to serve static files (e.g., index.html)
// __dirname refers to the current directory path, and '/public' is where the static files are stored
app.use(express.static(__dirname + '/public'));

// Define the root route; when accessing the "/" path, the following callback function is executed
app.get('/', (req, res) => {
  // Use res.sendFile method to send the index.html file as the response
  // __dirname is the current directory path, '/public/index.html' is the relative path to the HTML file
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Output a message to the console when the server is running
  console.log(`Server is running on http://localhost:${PORT}`);
});
