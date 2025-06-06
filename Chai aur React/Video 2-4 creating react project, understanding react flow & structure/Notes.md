# Different ways of making a react project
- npx create-react-app (basic method - not recommended)

`npx` (node package execute) is a command-line tool that comes with Node.js (specifically with npm version 5.2.0 and above). It allows you to run Node.js packages directly without needing to install them globally on your system.

`create-react-app` (CRA) is a command-line tool that helps you quickly set up a new React.js project with a good default setup — without having to configure Webpack, Babel, or ESLint manually.

- npm create vite@latest

Vite is a modern frontend build tool that provides a faster and leaner development experience for modern web projects — especially React, Vue, and plain JavaScript apps.

# Basic rules to follow when returning or rendering React components

## ✅ 1. Return One Parent Element

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```

Or use a Fragment to avoid extra HTML:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

## ✅ 2. Component Names Must Start with Capital Letters
React treats lowercase tags as HTML elements. Custom components must use PascalCase.

```jsx
function MyComponent() {
  return <h2>Hello</h2>;
}

<MyComponent /> ✅
```

It's a good practice to also start the name of that particular file with capital letter

## ✅ 3. File naming

1. Tools like vite have a rule that if a function is returning an html, then that file name should end with .jsx rather than .js. The best practice is to name all the files with .jsx

2. While creating a project with basic create react app, this is not necessary but it's still a good practice to name that file ending with .jsx