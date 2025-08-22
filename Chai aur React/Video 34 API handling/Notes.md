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

# 🔹 What is AbortController?
- `AbortController` lets you cancel an ongoing asynchronous task, like a `fetch` or `axios` request.
- It provides a signal object that you pass to the request.
- Later, if you call `controller.abort()`, the request is stopped immediately.