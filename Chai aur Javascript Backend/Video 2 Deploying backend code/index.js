require('dotenv').config()   // Load environment variables from .env file into process.env

const express = require('express')   // Import the Express framework
const app = express()   // Create an Express application
const port = 4000   // Define a default/fallback port (only for local use). but since we’re using process.env.PORT below, this isn’t being used right now

// Example GitHub data object (this will be returned when someone hits the /github route)
const githubData = {
    "login": "hiteshchoudhary",
    "id": 11613311,
    "node_id": "MDQ6VXNlcjExNjEzMzEx",
    "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hiteshchoudhary",
    "html_url": "https://github.com/hiteshchoudhary",
    "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
    "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
    "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
    "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
    "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
    "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Hitesh Choudhary",
    "company": null,
    "blog": "https://hitesh.ai",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
    "twitter_username": "hiteshdotcom",
    "public_repos": 112,
    "public_gists": 5,
    "followers": 48422,
    "following": 0,
    "created_at": "2015-03-23T13:03:25Z",
    "updated_at": "2025-08-11T20:59:04Z"
}

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

// Route: GET request to "/github"
app.get('/github', (req, res) => {
    res.json(githubData)   // Sending JSON response (good practice for APIs)
})


// Start the server and listen on the port defined in .env
// process.env.PORT is preferred in production (like Render, Heroku, Railway) because they assign you a port dynamically
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
