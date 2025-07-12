# 🧠 What is State Management?
State management means tracking and controlling the data that your app uses, displays, and updates as the user interacts with it.  
"State" = Your App's Current Data  
State Management = How your app stores, updates, and shares data — so that your UI stays in sync with your logic.

---

# 🔁 What is Redux?
Redux is a state management library for JavaScript applications, most commonly used with React. It helps you manage global state — i.e., data that needs to be accessed or updated by many components in your app.

**Why use Redux?**

Imagine a React app with many nested components. Passing state and functions as props gets messy — that's called prop drilling. Redux solves this by creating a single global store for your state and giving any component access to it directly.

## How Redux Works (Basic Concepts)

| Concept         | Role                                                              |
| --------------- | ------------------------------------------------------------------|
| `Store`         | Holds the entire app’s state in one object. (global variable)     |
| `Reducer`       | A function that determines **how the state changes**.             |
| `useSelector()` | React hook to read data from the store.                           |
| `useDispatch()` | React hook to send actions to the Redux store to update the state.|
| `Action`        | A plain object that describes **what happened**.                  |
| `useDispatch()` | React hook to dispatch actions.                                   |

---

# 🧰 What is Redux Toolkit?
Redux Toolkit (RTK) is the official, recommended way to use Redux today. It makes Redux simpler, less boilerplate-y, and more powerful.

**Redux Toolkit simplifies:**

- Writing reducers (with `createSlice`)
- Writing async logic (with `createAsyncThunk`)
- Configuring the store (with `configureStore`)
- Preventing common mistakes (auto-uses Redux DevTools, `immer` for immutability)

**🧠 In Short:**
- Redux = centralized state + actions + reducers (but verbose).
- Redux Toolkit = modern Redux with cleaner syntax, auto setup, and async tools.

---

> **extra info:** First came flux developed by facebook, then redux, then redux toolkit