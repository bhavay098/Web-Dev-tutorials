const express = require('express');  // importing express
const app = express();  // creating express app (server)
const PORT = 8000;  // Port number on which the server will be listened
const mongoose = require('mongoose');  // importing mongoose to connect with MongoDB

// Connecting Mongoose to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/bhavay_DB_1')  // while using MongoDB locally
    .then(() => console.log('MongoDb Connected'))  // connected successfully
    .catch((err) => console.error('Mongo Error:', err));  // error while connecting

// Creating schema
const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String },
    email: { type: String, required: true, unique: true },  // unique: true means same email id can't be inserted in DB multiple times
    job_title: { type: String },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] }  // enum (short for enumeration) is a way to limit the values a field can have.
}, { timestamps: true });

// Creating model
const User = mongoose.model('user', userSchema);  // const User = mongoose.model('model name', Schema created before);


app.use(express.urlencoded({ extended: false }));  // [Middleware] Enables Express to read form data in req.body. Required for application/x-www-form-urlencoded content (used by HTML forms). { extended: true } = support for complex/nested form data

// creating a middleware for experiment
app.use((req, res, next) => {
    console.log('Hello from middleware 1');
    // req.myUserName = 'Bhavay.dev';  // making changes in request object (adding a key value)
    next();  // calling the next function
});

// Routes
app.get('/users', async (req, res) => {  // GET request for browser to access all users
    const allDBUsers = await User.find();  // returns all users from Database
    const html = `
    <ul>
      ${allDBUsers.map((user) => `<li>${user.first_name} - ${user.email}</li>`).join('')}
    </ul>`;  // .map() loops through each user and creates an <li> HTML element with their first name which is wrapped inside <ul> element.
    // .join(separator) is an array method that combines all elements of an array into a single string.
    res.send(html);  // sending the rendered html response to client (SSR)
});

// REST API
app.get('/api/users', async (req, res) => {  // GET request for mobile app to access all users
    const allDBUsers = await User.find();  // returns all users from Database
    return res.json(allDBUsers);  // res.json() sends a raw JSON response to the client.
});

app.post('/api/users', async (req, res) => {  // post request to create new user
    const body = req.body;  // In express req.body refers to the data sent by the client in POST, PUT, or PATCH requests. Requires middleware
    if (!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {  // condition check if client doesn't fill all details while adding a new user
        return res.status(400).json({ error: 'All fields are required' });
    };

    const result = await User.create({  // creating a user(document). it's an async func as it interacts with MongoDB, which takes time (even if it’s milliseconds) & returns a promise
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        job_title: body.job_title,
        gender: body.gender
    });
    return res.status(201).json({ msg: 'success' });
});


// app.route() keeps the code clean and organized when multiple methods share the same route.
app.route('/api/users/:id')  // In GET request, : is used to define a route parameter — a placeholder for dynamic values in the URL.
    .get(async (req, res) => {  // GET request to get a particular user data
        const user = await User.findById(req.params.id);  // finding user by id in database
        if (!user) return res.status(404).json({ error: 'user not found' });  // condition check if user doesn't exist
        return res.json(user);
    })
    .patch(async (req, res) => {  // PATCH request to edit a particular user's data
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });  // new: true returns updated version of the document
        if (!user) return res.status(404).json({ error: 'user not found' });  // condition check if user not found
        return res.json({ status: 'success', user });
    })
    .delete(async (req, res) => {  // DELETE request to delete a particular user data
        const user = await User.findByIdAndDelete(req.params.id)  // finds user by id and then deletes in one go
        if (!user) return res.status(404).json({ error: 'user not found' });
        res.json({ status: 'Deleted' });
    });


app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));