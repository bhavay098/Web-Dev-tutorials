import express from 'express';   // Importing the express framework (using ES Modules syntax instead of require)

const app = express();   // Creating an Express application

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

// get a list of 5 jokes

// Defining a GET route at "/api/jokes"
app.get('/api/jokes', (req, res) => {   // it's a standard practice to start the route with /api
    const jokes = [   // Creating an array of 5 joke objects (mock data for now)
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'A second joke',
            content: 'This is a second joke'
        },
        {
            id: 3,
            title: 'A third joke',
            content: 'This is a third joke'
        },
        {
            id: 4,
            title: 'A fourth joke',
            content: 'This is a fourth joke'
        },
        {
            id: 5,
            title: 'A fifth joke',
            content: 'This is a fifth joke'
        }
    ];
    res.send(jokes);   // (Express automatically converts this to JSON if it's an object/array)
});

// First try to use the PORT environment variable (useful for deployment) otherwise, default to port 3000 for local development
const port = process.env.PORT || 3000;

// Start the server and make it listen for incoming requests on the chosen port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});