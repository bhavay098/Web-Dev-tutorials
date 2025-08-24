require('dotenv').config()   // Load environment variables from .env file into process.env

const express = require('express')   // Import the Express framework
const app = express()   // Create an Express application
const port = 4000   // Define a default/fallback port (only for local use). but since we’re using process.env.PORT below, this isn’t being used right now

// Route: GET request to "/" (root URL)
app.get('/', (req, res) => {
    res.send('Hello World!')   // Send plain text response
})

// Route: GET request to "/twitter"
app.get('/twitter', (req, res) => {
    res.send('bhavay')   // Send plain text response
})

// Route: GET request to "/login"
app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')   // Sending HTML as response
})

// Route: GET request to "/youtube"
app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur code</h2>')   // Sending another HTML response
})

// Start the server and listen on the port defined in .env
// process.env.PORT is preferred in production (like Render, Heroku, Railway) because they assign you a port dynamically
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
