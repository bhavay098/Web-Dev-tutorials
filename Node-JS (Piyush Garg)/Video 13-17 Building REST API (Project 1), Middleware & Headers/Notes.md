# What is middleware?
middleware refers to functions that have access to the request (req) and response (res) objects, and the next function in the application's request-response cycle. It's a chain of functions that process the request before it reaches the final route handler, or after it leaves it.

**Middleware functions can perform the following tasks:**
- Execute any code (e.g. logging)
- Modify req or res objects
- End the request-response cycle
- Call next() to pass control to the next middleware

## ✅ Basic Middleware Syntax:
```javascript
function middlewareName(req, res, next) {
  // Do something with req or res
  next(); // Pass control to the next middleware or route handler
}
```
`next` -> A function that moves the request to the next middleware or route handler. If you don't call next(), the request stops there.

## 🔁 Flow of Middleware:
When a request comes in:
- Middleware runs first.
- It can modify the request or response.
- Calls next() to go to the next step (another middleware or route).
- Finally, the route handler sends a response.

# What are HTTP headers?
HTTP headers are key-value pairs sent in an HTTP request or response. They provide metadata about the request or response, helping both the client (like a browser) and server understand how to process the data.

## 🔹 Types of Headers:
**1. Request Headers** – Sent by the client (browser) to the server.  
Examples:
- `Host`: Domain of the request
- `User-Agent`: Info about the browser
- `Accept`: Data formats client can handle

**2. Response Headers** – Sent by the server to the client.  
Examples:
- `Content-Type`: Format of the response (e.g., application/json)
- `Content-Length`: Size of response body
- `Access-Control-Allow-Origin`: Used for CORS

## 🔹 Custom Headers:
Usually start with X- (e.g., X-API-Key)

**✅ Syntax:**
```javascript
res.setHeader(name, value);
```
`name`: The name of the header (e.g. "Content-Type", "Access-Control-Allow-Origin")
`value`: The value of that header (e.g. "application/json", "*")

# HTTP response status codes
https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status