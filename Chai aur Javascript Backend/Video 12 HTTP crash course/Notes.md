# What is HTTP?
HTTP stands for HyperText Transfer Protocol. It’s the foundation of data communication on the web — basically, the set of rules your browser and a web server follow to talk to each other.

Here’s the breakdown:
- Protocol -> A standard set of rules for communication between computers.
- HyperText -> Text with links (hyperlinks) that connect to other resources.
- Transfer -> Moving data (like HTML files, images, videos) between client and server.

## How it works?
1. Client (Browser / App) -> Sends an HTTP request (e.g., "Get me this web page").
2. Server -> Processes that request and sends back an HTTP response (e.g., the HTML, CSS, JS, or data).
3. Browser -> Renders the response so you see the web page.

**Key Points:**

- HTTP is stateless -> Each request is independent; the server doesn’t remember previous requests (unless you use cookies, sessions, or tokens).
- HTTP usually runs on port 80.
- Its secure version is HTTPS (HyperText Transfer Protocol Secure), which encrypts the communication.

## Common HTTP methods
1. GET
- **Use:** To get (read/fetch) data from the server.
- **Example:** Visiting `https://api.example.com/users` to see all users.
- **Key Point:** Doesn’t change anything on the server, just retrieves data.

2. POST
- **Use:** To create new data on the server.
- **Example:** Submitting a signup form to create a new user.
- **Key Point:** Sends data in the request body (like JSON, form data).

3. PUT
- **Use:** To update/replace existing data.
- **Example:** Updating an entire user profile.
- **Key Point:** Usually replaces the whole resource with new data.

4. PATCH
- **Use:** To partially update existing data.
- **Example:** Changing only the username of a user, without touching email/password.
- **Key Point:** More efficient when only a small change is needed.

5. DELETE
- **Use:** To delete data from the server.
- **Example:** Removing a user account or deleting a post.
- **Key Point:** Permanently removes the resource (if server allows).

6. HEAD (less common, but important)
- **Use:** Same as `GET` but only asks for headers (not the body).
- **Example:** Check if a file exists before downloading it.

7. OPTIONS
- **Use:** To ask the server what methods are allowed for a resource.
- **Example:** Browser uses this in CORS preflight requests.

8. TRACE
- **Purpose:** Used for debugging.
- The client asks the server to “echo back” whatever it receives.
- This helps check if requests are modified, corrupted, or changed by proxies/firewalls.

---

# 🔹 What are URI, URL, URN?
## URI (Uniform Resource Identifier)
- **Definition:** A generic term for anything that identifies a resource on the internet.
- Think of it as the “umbrella term” that covers both URL and URN.
- Example:
    - `https://example.com/page` (a URL)
    - `urn:isbn:0451450523` (a URN)  
Both are URIs.

👉 Every URL and URN is a URI, but not every URI is a URL.

## URL (Uniform Resource Locator)
- **Definition:** A type of URI that tells you where a resource is located and how to access it.
- It has:
    - **Protocol** -> `https://`
    - **Domain/Host** -> `example.com`
    - **Path** -> `/page`
- Example: `https://example.com/index.html`

👉 If it gives you a full address to reach the resource, it’s a URL.

## URN (Uniform Resource Name)
- **Definition:** A type of URI that names a resource without telling where it is or how to get it.
- It’s location-independent and supposed to be persistent.
- Example:
    - `urn:isbn:0451450523` -> identifies a book by ISBN number
    - `urn:ietf:rfc:3986` -> identifies a specific RFC document

👉 If it just names something but doesn’t give a retrieval address, it’s a URN.

---

# What are HTTP headers?
HTTP headers are basically extra pieces of information sent along with an HTTP request or response. They act like “metadata” — details about the request/response, the client, the server, or the content being transferred.

## Types of Headers:
1. **Request Headers** -> Sent by the client (browser/app) to the server.
    - Example: "Hey server, I accept JSON responses, here’s my authentication token."
2. **Response Headers** -> Sent by the server back to the client.
    - Example: "Here’s your data, it’s JSON, and you can cache it for 60 seconds."

---

# HTTP status codes
HTTP status codes are 3-digit numbers sent by the server in the response to tell the client what happened with its request.

They are grouped into 5 classes based on the first digit:

## 1xx → Informational
- The request was received, and the server is still processing it.
- Rarely seen in normal browsing.
- Examples:
    - `100 Continue` -> Client should keep sending the request.
    - `101 Switching Protocols` -> Server is switching protocols (e.g., HTTP → WebSocket).
## 2xx → Success
- The request was successfully received, understood, and accepted.
- Examples:
    - `200 OK` -> Standard success.
    - `201 Created` -> Resource successfully created (common after POST).
    - `204 No Content` -> Success, but no body in the response.
## 3xx → Redirection
- The client needs to take another step (usually follow a redirect).
- Examples:
    - `301 Moved Permanently` -> Resource has a new URL (update your link).
    - `302 Found` -> Temporarily redirected to another URL.
    - `304 Not Modified` -> Cached version is still valid, no need to re-download.
## 4xx → Client Errors
- Something went wrong on the client side.
- Examples:
    - `400 Bad Request` -> The request was malformed.
    - `401 Unauthorized` -> Missing or invalid authentication.
    - `403 Forbidden` -> Authenticated but no permission to access.
    - `404 Not Found` -> Resource doesn’t exist.
    - `429 Too Many Requests` -> Rate limiting (slow down!).
## 5xx → Server Errors
- The server failed to process a valid request.
- Examples:
    - `500 Internal Server Error` -> Generic server failure.
    - `502 Bad Gateway` -> One server acting as a gateway got an invalid response from another.
    - `503 Service Unavailable` -> Server is down or overloaded (try later).
    - `504 Gateway Timeout` -> Server didn’t respond in time.