const express = require('express');  // importing express
const app = express();  // express() is a function which creates an Express application. Saving that application inside variable called app. So now app is the entire server. This app is basically the handler function
// in express we also don't need to import url module to access query parameters

app.get('/', (req, res) => {   // app.METHOD(path, callback)  get means req method GET
    return res.send('Hello from home page');
})

app.get('/about', (req, res) => {
    return res.send(`Hello from about page. Hey ${req.query.name}`);  // no need to import url module to acess query as it's built in in express
})

app.listen(8000, () => {
    console.log('server started');
});
// .listen() is a method used to tell the server to start listening for incoming requests. It's used to start the server