
// 💡 **Q.6** Build a Server Using Http Module NodeJS with api endpoints for Getting Products Data
//       ‘/’ → send msg as “Welcome to Men & Women Dummy Data”
//      ‘/men’ → send 10 products data of men
//      ‘/women’ → send 10 products data of women
//      ‘/other’ → send response as page not found
// Sure! Here's an example of how you can build a server using the http module in Node.js to create API endpoints for getting products data:
// const http = require('http');
// // Sample product data for men and women
// const menProducts = [
//   { id: 1, name: 'Men Product 1' },
//   { id: 2, name: 'Men Product 2' },
//   // Add more products here
// ];
// const womenProducts = [
//   { id: 1, name: 'Women Product 1' },
//   { id: 2, name: 'Women Product 2' },
//   // Add more products here
// ];
// // Create the server
// const server = http.createServer((req, res) => {
//   // Set the response header for JSON content
//   res.setHeader('Content-Type', 'application/json');

//   // Handling different API endpoints
//   if (req.url === '/') {
//     // Endpoint: '/'
//     res.statusCode = 200;
//     res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
//   } else if (req.url === '/men') {
//     // Endpoint: '/men'
//     res.statusCode = 200;
//     res.end(JSON.stringify(menProducts));
//   } else if (req.url === '/women') {
//     // Endpoint: '/women'
//     res.statusCode = 200;
//     res.end(JSON.stringify(womenProducts));
//   } else {
//     // Endpoint: '/other' (page not found)
//     res.statusCode = 404;
//     res.end(JSON.stringify({ message: 'Page not found' }));
//   }
// });
// // Start the server
// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
// With this code, you can start the server, and it will listen on port 3000. You can then make HTTP requests to the specified endpoints:
// http://localhost:3000/ will return the message "Welcome to Men & Women Dummy Data".
// http://localhost:3000/men will return an array of 10 dummy product objects for men.
// http://localhost:3000/women will return an array of 10 dummy product objects for women.
// Any other endpoint, such as http://localhost:3000/other, will return a "Page not found" message with a 404 status code.
// Feel free to modify the code to suit your specific requirements or to add more functionality as needed.




