
// 💡 **Q.8** Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Express
// - ‘/’ → send counter data as {counter:counter}
// - `/increment` → increment counter by 1 and send in response latest data as {counter:counter}
// - `/decrement` → decrement counter by 1 and send in response latest data as {counter:counter}
// **Note:** Using Express is Mandatory for this Question
// Certainly! Here's an example of how you can use Express to create a backend for a counter web app with API endpoints for managing the counter:
// const express = require('express');
// const app = express();
// // Counter variable
// let counter = 0;
// // Endpoint: '/'
// app.get('/', (req, res) => {
//   res.json({ counter });
// });
// // Endpoint: '/increment'
// app.get('/increment', (req, res) => {
//   counter++;
//   res.json({ counter });
// });
// // Endpoint: '/decrement'
// app.get('/decrement', (req, res) => {
//   counter--;
//   res.json({ counter });
// });
// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
// With this code, you can start the server, and it will listen on port 3000. You can then make the following API requests:
// GET http://localhost:3000/ will return the current counter value in JSON format like { "counter": 0 }.
// GET http://localhost:3000/increment will increment the counter by 1 and return the updated counter value in the response, like { "counter": 1 }.
// GET http://localhost:3000/decrement will decrement the counter by 1 and return the updated counter value in the response, like { "counter": -1 }.
// The server will maintain the counter value in memory and modify it accordingly based on the API requests.
// Feel free to modify the code to fit your specific requirements or to add more functionality as needed.




