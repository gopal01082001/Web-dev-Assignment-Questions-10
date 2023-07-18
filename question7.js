// Q.7 Build a Server that Generate Random Number Using Express
// ‘/random’ → send random number in response {random:10}
// Certainly! Here's an example of how you can use Express to build a server that generates a random number and sends it as a response:
// const express = require('express');
// const app = express();
// // Endpoint: '/random'
// app.get('/random', (req, res) => {
//   const randomNumber = Math.floor(Math.random() * 100) + 1;
//   res.json({ random: randomNumber });
// });
// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
// With this code, you can start the server, and it will listen on port 3000. You can then make an HTTP GET request to http://localhost:3000/random, and it will generate a random number between 1 and 100. The response will be in JSON format, like { "random": 42 }, with the randomly generated number.
// Feel free to modify the code to fit your specific needs or to add more endpoints and functionality as required.




