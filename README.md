# Simple REST API with Express

This is a simple REST API built using Express, a popular Node.js web framework. It provides a single endpoint (`/hello`) that returns a "Hello, World!" message in JSON format.

## Why Use Node.js for REST APIs?

Node.js is widely used for building REST APIs due to several key advantages:

1. **Non-blocking, asynchronous I/O**: Node.js uses non-blocking I/O operations, which means it can handle many requests at the same time without being delayed by slow operations (such as reading from a database or file system). This makes it well-suited for building scalable APIs.

2. **Single-threaded event loop**: Unlike traditional multi-threaded models, Node.js uses a single-threaded event loop, which reduces the overhead associated with managing multiple threads. This can lead to more efficient use of system resources, especially for I/O-bound tasks.

3. **Fast performance**: Node.js is built on Google's V8 JavaScript engine, known for its fast performance. This makes it an excellent choice for high-performance applications that require handling a large number of concurrent connections.

4. **Unified language (JavaScript)**: With Node.js, you can use JavaScript both on the server side (backend) and on the client side (frontend). This makes it easier for developers to work with a single language throughout the entire stack.

5. **Large ecosystem**: Node.js has a rich ecosystem of packages and libraries available via npm (Node Package Manager), which allows developers to quickly integrate various functionalities (e.g., authentication, data processing) into their APIs.

## Prerequisites

- Node.js (https://nodejs.org/)
- npm (comes with Node.js)

## Clone the Repository

You can clone the repository using Git with the following command:

```bash
git clone https://github.com/jdhidal/Use-RestAPI.git
```


## Installation

1. After cloning or extracting the project, navigate to the project directory in your terminal:

```bash
cd simple-rest-api
```

2. Install the required dependencies using npm:

```bash
npm install express
```
This will download and install all required dependencies listed in the package.json file.


## Usage
To run the API, execute the following command in your terminal:
```bash
npm start
```
The server will start and listen on port 3000.
http://localhost:3000/hello

---

## Endpoints

- GET /hello: Returns a simple "Hello, World!" message in JSON format.

Example response:
```json
{
  "message": "Hello, World!"
}
```

This version explains how to clone the repository from GitHub, install dependencies, and run the server.