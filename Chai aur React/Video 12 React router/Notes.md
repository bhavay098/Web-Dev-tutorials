# 🧭 What is React Router?
React Router is a routing library for React. It lets you build single-page applications (SPAs) with multiple views/pages — without reloading the page.

## 💡 Why Use It?
Normally, a browser loads a new HTML page on every navigation.

But in a React app:

- We load just one HTML page (`index.html`)
- Then use React Router to:
    - Switch between components (pages)
    - Change the URL (like `/home`, `/about`) without full page reload

---

# 🔗 What is `Link`?
Used to navigate to another route in a React SPA, without reloading the page.  
It is a replacement of the `a` tag in html.

**What it does:**
- Changes the URL
- React Router renders the matching route
- No full-page reload

---

# 🔗 What is `NavLink`?
It is like `Link`, but with extra features for styling the active link.  
Think of it as a smarter `Link` that knows which page is currently active.  
It lets you apply styles when the link is active:

---

# 🧭 What is `<RouterProvider>` in React Router?
`<RouterProvider>` is a React Router v6.4+ component used to initialize and provide routing context for your app — especially when you're using the Data Router API (`createBrowserRouter`, `createHashRouter`, etc.).

In Simple Words `<RouterProvider>` connects your routing configuration (from `createBrowserRouter`) to your React app. Without it, your routes won't work.