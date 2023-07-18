// 💡 **Q.1** Explain Middlewares in NodeJS ?
// In Node.js, middleware refers to a set of functions or code snippets that are executed in a sequential manner during the processing of a request and response cycle. Middleware functions have access to the request and response objects and can modify them or perform additional operations before passing control to the next middleware or terminating the request-response cycle.
// Middleware functions are typically used to perform tasks such as request parsing, authentication, authorization, logging, error handling, and more. They provide a way to modularize and organize the code for handling different aspects of the request and response flow.
// Here's how middleware works in Node.js:
// When a request is received by a Node.js server, it passes through a series of middleware functions.
// Each middleware function can perform operations on the request object, such as parsing request parameters, adding headers, or validating authentication.
// The middleware function can also perform operations on the response object, such as adding headers, modifying the response data, or handling errors.
// If a middleware function needs to pass control to the next middleware function in the sequence, it calls the next function.
// If a middleware function wants to terminate the request-response cycle, it can send a response directly or call the end function.
// The middleware functions are executed in the order they are defined, and the request passes through each middleware until the response is sent back to the client.
// Middleware functions can be created using the app.use() method in popular frameworks like Express.js. They can be global (applied to all routes) or specific to certain routes or groups of routes. Middleware can also be stacked, meaning multiple middleware functions can be chained together for different purposes.
// Overall, middleware in Node.js provides a flexible way to handle common tasks and add custom functionality to the request and response flow in a modular and reusable manner.




