const express = require('express');  // importing express
const app = express();  // creating express app (server)
const PORT = 8000;  // Port number on which the server will be listened
const fs = require('fs');
const users = require('./MOCK_DATA.json');  // importing the user data (Array of objects)

app.use(express.urlencoded({ extended: false }));  // [Middleware] Enables Express to read form data in req.body. Required for application/x-www-form-urlencoded content (used by HTML forms). { extended: true } = support for complex/nested form data

// creating a middleware for experiment
app.use((req, res, next) => {
    console.log('Hello from middleware 1');
    // req.myUserName = 'Bhavay.dev';  // making changes in request object (adding a key value)
    fs.appendFile('log.txt', `${Date.now()}: ${req.ip}: ${req.method}: ${req.path}\n`, (err) => {  // creating a file and appending some data whenever a request comes
        next();  // calling the next function
    });
});

// Routes
app.get('/users', (req, res) => {  // GET request for browser to access all users
    const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>`;  // .map() loops through each user and creates an <li> HTML element with their first name which is wrapped inside <ul> element.
    // .join(separator) is an array method that combines all elements of an array into a single string.
    res.send(html);  // sending the rendered html response to client (SSR)
});

// REST API
app.get('/api/users', (req, res) => {  // GET request for mobile app to access all users
    res.setHeader('X-myName', 'Bhavay nagpal');  // res.setHeader() is used to set a custom response header before sending the response to the client. res.setHeader(name, value); Always add X- as prefix to custom headers
    console.log(req.headers);
    return res.json(users);  // res.json() sends a raw JSON response to the client.
});

// app.get('/api/users/:id', (req, res) => {  // : is used to define a route parameter — a placeholder for dynamic values in the URL.
//     const id = Number(req.params.id);  // req.params.id gives value (as a string).
//     const user = users.find((user) => user.id === id);  // .find() searches through an array and returns the first element that matches a condition.
//     return res.json(user);
// });

app.post('/api/users', (req, res) => {  // post request to create new user
    const body = req.body;  // In express req.body refers to the data sent by the client in POST, PUT, or PATCH requests. Requires middleware
    if (!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {  // condition check if client doesn't fill all details while adding a new user
        return res.status(400).json({ error: 'All fields are required' });
    };
    users.push({ ...body, id: users.length + 1 });  // appending the body data in our mock data and also adding id by using ...
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {  // Saves the updated users array (including the new user) back to the MOCK_DATA.json file.
        return res.status(201).json({ status: 'success', id: users.length });
    });
});


// app.route() keeps the code clean and organized when multiple methods share the same route.
app.route('/api/users/:id')  // In GET request, : is used to define a route parameter — a placeholder for dynamic values in the URL.
    .get((req, res) => {  // GET request to get a particular user data
        const id = Number(req.params.id);  // req.params is an object that contains URL parameters defined by colons (:) in your route path.
        const user = users.find((user) => user.id === id);  // .find() searches through an array and returns the first element that matches a condition.
        if (!user) return res.status(404).json({ error: 'user not found' });  // condition check if user doesn't exist
        return res.json(user);
    })
    .patch((req, res) => {  // PATCH request to edit a particular user's data
        const id = Number(req.params.id);  // Getting the user ID from the URL.
        const user = users.find((user) => user.id === id);  // finding the user with id provided by client

        if (!user) return res.status(404).json({ error: 'user not found' });  // condition check if user not found

        Object.assign(user, req.body);  // updating the user details with details provided by client
        // Object.assign() copies properties from the source object(s) into the target. If a property already exists in the target, it gets overwritten. It returns the updated target object.
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {  // Saves the updated users array back to the MOCK_DATA.json file.
            if (err) return res.status(500).json({ error: 'failed to update user' });  // handling error
            return res.json({ status: 'success', user });
        });
    })
    .delete((req, res) => {  // DELETE request to delete a particular user data
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);

        if (!user) return res.status(404).json({ error: 'user not found' });

        users.splice(users.indexOf(user), 1);  // removing the user object from the original array
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
            if (err) return res.status(500).json({ error: 'failed to delete' });
            res.json({ status: 'Deleted' });
        });
    });


app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));