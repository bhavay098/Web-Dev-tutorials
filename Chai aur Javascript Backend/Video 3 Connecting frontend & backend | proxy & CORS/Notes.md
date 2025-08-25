# 🌐 What is Axios?
Axios is a JavaScript library used to make HTTP requests (like GET, POST, PUT, DELETE) from:
- the browser (front-end React apps)
- or Node.js (back-end apps)

It’s basically a wrapper around the browser’s built-in `fetch` API, but:
- Easier syntax
- Built-in features like request cancellation, interceptors, automatic JSON parsing, etc.

## Why developers like Axios over `fetch`:
1. Automatically transforms JSON → no need to call `res.json()`.
2. Better error handling (non-200 status codes are treated as errors).
3. Supports request cancellation (`AbortController`) easily.
4. Interceptors → you can run code before every request (like attach tokens).
5. Works both in browser and Node.js without polyfills.

---

# 🔹 CORS = Cross-Origin Resource Sharing
It’s a security mechanism built into browsers that controls whether a web page in one origin (domain) is allowed to request resources from another origin. It's a browser security feature that blocks requests from unauthorized domains.

**<u>What is an "origin"?</u>**
- Protocol (http vs https)
- Domain (example.com)
- Port (:3000, :5000, etc.)

**<u>Why does CORS exist?</u>**
Without CORS, any random website could make requests to your backend APIs on behalf of the user, possibly stealing data.

---

# 🔹 What is a Proxy (in web development)?
A proxy is like a middleman between your frontend and the backend (or another server).  
Instead of the frontend directly calling an API on another origin, the request goes through the proxy, and the proxy forwards it.

## Why do we use a proxy in React/Frontend dev?
CORS: (browser blocks requests to different origins). When frontend calls `http://localhost:3000/api`, the browser screams: ❌ CORS error.

To avoid that, we can configure a proxy.
- The frontend makes a request to `/api` (same origin).
- The dev server (Vite/CRA) proxies it to `http://localhost:3000/api`.
- Browser thinks it’s same-origin -> no CORS issues.

## Types of Proxies
- **Forward Proxy**: Sits between client and internet (used for privacy, hiding IP, etc.).
- **Reverse Proxy**: Sits in front of servers (used in web dev with Nginx, Apache, etc. to route requests).

👉 In frontend dev, when we say "proxy", we usually mean a dev proxy (to bypass CORS & simplify API calls). In production, reverse proxies (like Nginx) are used to route traffic between frontend & backend.