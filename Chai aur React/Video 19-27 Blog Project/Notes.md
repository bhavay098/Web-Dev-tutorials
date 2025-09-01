# 🔧 What are Environment variables?
Environment variables are key-value pairs used to configure settings for applications and the operating system without hardcoding them into your code.  
Think of environment variables as settings outside your app – like the temperature knob on your AC. The same machine (code) behaves differently based on the external setting.

## Why are they used?
1. **Security** – Store sensitive data like API keys, database passwords, etc.
2. **Portability** – Run the same code in different environments (dev, test, prod) by changing the environment variables instead of the code.
3. **Customization** – Modify behavior (e.g., debug mode on/off) based on environment.

**<u>Note:</u>** `.env` is the Environment variable file and we never commit this file to Git for security.

## env file rules (in case of apps made with create react app):
**Environment variable names must start with:**
```nginx
REACT_APP_
```

**Accessing in Node.js:**
```js
console.log(process.env.REACT_APP_APPWRITE_URL);
```

## env file rules (in case of apps made with Vite):
**Environment variable names must start with:**

```nginx
VITE_
```

**Accessing in code:**

```js
console.log(import.meta.env.VITE_APPWRITE_URL)
console.log(import.meta.env.DB_PASSWORD)   // undefined
```

---

# 🔧 What is a Service in Backend Development?
In backend development, a service is a modular piece of code responsible for handling a specific part of the application's business logic. It acts like a helper or worker that performs a task — such as sending emails, managing users, uploading files, etc.  
It's a reusable function/class that handles specific backend logic like auth, data fetch, etc.

## Why Use Services?
- **reduce vendor lock-in**
- **Separation of concerns** — keeps your logic clean and reusable.
- **Easier to test** — you can write unit tests for each service.
- **Reusable** — same logic can be used across multiple pages or components.

**<u>Note:</u>** Vendor lock-in means that once you build your application around a specific service provider (like Appwrite, Firebase, Supabase, etc.), it's hard or expensive to switch to another one later — because your code is tightly coupled to that platform’s APIs and services.

---

# 🔹 What is React Hook Form?
React Hook Form is a lightweight, performant, and easy-to-use form management library for React.

It helps you:

- Build forms easily
- Manage form state (like values, validation, errors)
- Validate inputs (with custom or built-in rules)
- Handle form submission

All without needing heavy state management (like `useState` for every input).

## Key Concepts:
- `useForm()` → main hook that initializes the form.
- `register()` → connects input fields to the form state.
- `handleSubmit()` → handles submission and validation.
- `formState.errors` → contains validation error messages.

## What is Controller in React Hook Form?
`Controller` is a special wrapper component used when you want to connect controlled components (like `React-Select`, `TinyMCE`, `DatePicker`, etc.) to the form.

### Controlled components:
These are components where you manage the value using `useState` or they don’t expose a `ref` directly, so you can’t use `register()` on them like regular inputs.

---

# 🔹 What is a `ref` in React?
A `ref` (short for reference) is a way to get a direct handle to a DOM element (or to a React component instance in class components).

**<u>What can you do with a `ref`?</u>**
- Focus an input field
- Scroll to a div
- Measure element size or position
- Trigger animations
- Integrate with third-party libraries that expect a DOM element

## What is `forwardRef`?
In React, `forwardRef` is a special function that allows you to pass a `ref` from a parent component down to a child component, and then forward it to a DOM element inside that child.  
Normally, `ref`s don't automatically pass through custom components. That's where `forwardRef` comes in.

**<u>Where is `forwardRef` most commonly used?</u>**
- Custom input components (like `Input`, `Select`, `Textarea`)
- React Hook Form integration
- Focus/scroll control
- Third-party libraries that need DOM node access