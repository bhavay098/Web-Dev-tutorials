# 🌐 What is HTTP?
HTTP (HyperText Transfer Protocol) is the protocol used by the web. When we visit a website, our browser sends an HTTP request, and the server sends back an HTTP response.

## 🧠 What is the HTTP module in Node.js?
Node.js comes with a built-in module called http that lets us create a web server. This means we can make our own website or API directly from our Node.js code — no need for external software.

# url module in Node.js
It's a core Node.js module which helps you parse and manipulate URLs. It helps with:
- Breaking a URL into parts (protocol, hostname, path, query, etc.)
- Reading or changing those parts
- Parsing query strings into usable objects

# Query parameters in URL (Uniform Resource Locator)
Query parameters are key-value pairs added to the end of a URL to send data to the server.

**🧠 Basic structure:**
```javascript
https://example.com/page?key1=value1&key2=value2
```
- ? — starts the query string
- key1=value1 — a query parameter (key = value)
- & — separates multiple parameters

# HTTP Methods
HTTP methods describe what action you want to perform on a resource (like data from a server). Here are the main ones you'll come across:

## 1. GET
- **Purpose:** Retrieve data from the server.
- **Example use case:** Loading a webpage or getting user info.
- **Key Point:** Doesn’t change anything on the server.

## 2. POST
- **Purpose:** Send data to the server to create something new.
- **Example use case:** Submitting a form (like signing up).
- **Key Point:** It can change things on the server (like creating a new user).

## 3. PUT
- **Purpose:** Update an entire existing resource.
- **Example use case:** Replacing a user's profile details.
- **Key Point:** Replaces the entire resource with the new one.

## 4. PATCH
- **Purpose:** Update part of a resource.
- **Example use case:** Changing just the email in a user profile.
- **Key Point:** More efficient for small changes.

## 5. DELETE
- **Purpose:** Remove a resource from the server.
- **Example use case:** Deleting a post or a user.
- **Key Point:** It removes something permanently (usually).