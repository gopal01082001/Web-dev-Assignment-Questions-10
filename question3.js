// Q.3 What are REST API ?
// REST stands for Representational State Transfer. REST is an architectural style and a set of principles for designing networked applications. A REST API (Application Programming Interface) is an interface that follows the principles of REST and allows different software systems to communicate with each other over the internet.
// Here are the key characteristics of a REST API:
// Client-Server Architecture: In REST, the client (such as a web browser or mobile application) and the server (which provides the API) are separate entities that communicate over the network. This separation allows for independent evolution and scalability of client and server components.
// Statelessness: REST APIs are stateless, meaning that the server does not store any client context between requests. Each request from the client must contain all the necessary information for the server to understand and process it. This makes REST APIs scalable and easy to cache.
// Uniform Interface: REST APIs have a uniform and consistent interface. They typically use standard HTTP methods such as GET, POST, PUT, PATCH, and DELETE to perform operations on resources. Resources are identified by URLs (Uniform Resource Locators), and the API uses hypermedia links to navigate between resources.
// Resource-Based: REST APIs are resource-oriented, meaning that they expose resources (such as users, products, or orders) that can be accessed and manipulated using the standard HTTP methods. Resources are represented in a standardized format, often JSON (JavaScript Object Notation) or XML (eXtensible Markup Language).
// State Transfer: REST APIs transfer the state of a resource between the client and the server in a request-response cycle. The client can retrieve, create, update, or delete the state of resources by interacting with the API endpoints.
// Layered System: REST APIs can be designed in a layered architecture, where intermediate servers or proxies can be used to provide additional features, such as caching, load balancing, or security. The client is not aware of the underlying layers and interacts directly with the server.
// REST APIs have become widely adopted due to their simplicity, scalability, and compatibility with the HTTP protocol, which is the backbone of the internet. They are commonly used to build web services, mobile backends, and other distributed systems that require interoperability and decoupling between client and server components.




