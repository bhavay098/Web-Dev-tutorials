# 🧠 What are Hooks in React?

Hooks are special functions that let you “hook into” React features like:
- State (data that changes)
- Side effects (like fetching data, timers, etc.)
- Context (global data like themes, users, etc.)

# 📦 Most common hooks which are used

| Hook         | What it does                                           |
|--------------|--------------------------------------------------------|
| `useState`   | Add state to a function component                      |
| `useEffect`  | Run code after rendering (like fetching data, timers)  |
| `useContext` | Access global data (like theme or user settings)       |
| `useRef`     | Hold a reference to a DOM element or value             |

## useState Syntax:

```js
const [stateVariable, setStateFunction] = useState(initialValue);
```

| Part               | Meaning                                                        |
| ------------------ | -------------------------------------------------------------- |
| `useState`         | A React hook that gives you state in a function component      |
| `stateVariable`    | The **current value** of the state                             |
| `setStateFunction` | A function to **update the value** and re-render the component |
| `initialValue`     | The **default value** when the component first renders         |