# 🧩 What is a Template Engine?
A templating engine is a tool used in web development to dynamically generate HTML pages by combining templates with data. Instead of hardcoding all the HTML content, you use a template with placeholders that get filled in with actual data when the page is rendered.

## 🔧 How It Works:
1. **Template File:** Contains static HTML and dynamic placeholders (like {{title}}, <%= user.name %>, etc.)
2. **Data:** Comes from your server or application logic (like user info, product lists, etc.)
3. **Templating Engine:** Combines the template and data to produce final HTML that is sent to the browser.

## 🔧 Key Features:
- Uses placeholders like `{{ }}` or `<%= %>` to inject dynamic data.
- Helps separate logic from presentation (cleaner code).
- Works both inside and outside web frameworks.

## 🔥 Examples:
- **EJS** (Embedded JavaScript)
- **Pug** (formerly Jade)
- **Handlebars**
- **Jinja2** (Python)
- **Blade** (PHP)

# 🧾 What is a View Engine?
A view engine is a tool used in server-side web frameworks (like Express.js) to render views (HTML pages) dynamically using templates and data.

## 🔧 What It Does:
- Takes a template file (like .ejs, .pug, .hbs)
- Fills in the dynamic data
- Produces a final HTML page that’s sent to the client

## 🚀 In Express.js:
```js
app.set('view engine', 'ejs');
```
This line tells Express to use **EJS** as the **view engine** for rendering `.ejs` templates.