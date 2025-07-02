# 🧠 what is context API in React?
In React, the Context API is a built-in feature that allows you to share data across the entire component tree without passing props manually at every level.

## Why use Context API?
In a typical React app, data is passed from parent to child via props. But when many components need the same data (like a theme, user info, or language), this becomes cumbersome — called "prop drilling".  
The Context API helps solve this by providing a way to "broadcast" data to multiple components directly.
<!-- How it works? (3 steps) -> described in the project -->

---

# 🔍 What is `useContext` hook?
`useContext` is a React hook that lets your components read values from a context without needing to pass props manually.

## When and why to use it:
Use `useContext` when you have some global data (like user info, theme, language, etc.) that many components need — and you don’t want to pass that data down through every level of the component tree.

**Syntax:**
```js
const value = useContext(MyContext);
```

- `MyContext` is the context object you created with `createContext()`
- `value` is whatever value is currently provided by the nearest `<MyContext.Provider>`