const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root endpoint '/'
app.get('/', (req, res) => {
  // Send 'Hello Holberton School!' as the response
  res.send('Hello Holberton School!');
});

// Define a fallback route for any other endpoint
app.get('*', (req, res) => {
  // Send an error message for any other endpoint
  res.status(404).send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET ${req.url}</pre>
</body>
</html>`);
});

// Start the server and make it listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

// Export the Express application
module.exports = app;
