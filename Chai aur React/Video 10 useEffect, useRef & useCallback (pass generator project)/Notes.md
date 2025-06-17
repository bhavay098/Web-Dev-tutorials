# 🧠 What is Memoization?
**Memoization** is a programming technique used to store (or "remember") the result of a function so that next time, we don’t have to run the same function again if the input is the same.

## In React (Why It Matters):
In React apps, components and functions can be called again and again (on every re-render).Memoization helps you avoid unnecessary re-runs of heavy functions by caching their results.


# ✅ What is `useCallback` hook in React?
useCallback is a React Hook that lets you cache or **memoize** (storing in memory) a function definition between re-renders.

**Syntax:**
```jsx
const memoizedCallback = useCallback(() => {
  // your callback logic here
}, [dependencies]);
```

- `() => { ... }`: Your function (the callback) you want to memoize.
- `[dependencies]`: Dependencies are all the variables used inside the callback function that come from outside its scope (e.g., props, state, or local variables). The function will re-run only when one of these dependencies changes.

We use this hook whenever we are calling the same function again and again.  
We use this hook when we want to prevent re-creating the same function again and again unnecessarily, especially when passing it as a prop to a memoized child component.

---

# 🧠 What is `useEffect`?
`useEffect` is a React hook that lets you run code after the component renders.

You use it for side effects — things like:

- Fetching data from an API
- Setting up timers
- Listening to events
- Updating the document title
- Reacting to state/prop changes

**🔧 Syntax:**
```js
useEffect(() => {
  // your code here (side-effect)
}, [dependencies]);
```

- `() => { ... }` — The function that runs after render
- `[dependencies]` — The array of values that the effect depends on

---

# 🔍 What is `useRef` hook?
`useRef` is a React hook that lets you:

2. Directly reference a DOM element (like `<input>` or `<div>`)
1. Store a value that doesn't cause re-renders when it changes

**🔧 Syntax:**
```js
const myRef = useRef(initialValue);
```

- `myRef` is an object: `{ current: initialValue }`
- You can change `myRef.current` anytime — no re render happens.

---

# Difference between `useCallback` and `useEffect`:

| Feature            | `useEffect`                                    | `useCallback`                                              |
| ------------------ | ---------------------------------------------- | ---------------------------------------------------------- |
| 💡 Purpose         | To **run side-effects** (like fetch, log, DOM) | To **memoize a function** so it’s not recreated            |
| ⚙️ What it returns | **Nothing**, but can return a cleanup function | A **memoized function**                                    |
| 🔁 Runs when       | Dependencies change (after render)             | Dependencies change (but doesn’t run, just returns new fn) |
| ⏱️ Timing          | Runs **after render**                          | Function is **created during render**                      |
| 📌 Used for        | API calls, timers, subscriptions, etc.         | Passing stable functions to child components or handlers   |
| 🧼 Can clean up?   | ✅ Yes, in return function                      | ❌ No cleanup — it's just a function                        |

- `useEffect` = Do something when values change
- `useCallback` = Remember a function until values change