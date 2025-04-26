const http = require('http');  // importing built-in http module that lets us create a web server
const fs = require('fs');
const url = require('url');  // importing url module

// const myServer = http.createServer((req, res) => {  // creates a server and takes a callback func to process incoming requests. The function (req, res) runs every time someone makes a request.
//     console.log(req);  // req is the request obj (from the user/browser). res is the response obj (from your server).
//     res.end('Hello from server again');  // (sending response) ends the response and sends data back to the user.  
// });

const myServer = http.createServer((req, res) => {  // creating server
    const log = `${Date.now()}: ${req.method} ${req.url} New request received\n`;  // creating variable log and storing a string in it whenever a request comes. req.url gives you the raw URL (path + query) string of the incoming request — basically, what the user is asking for.
    const myUrl = url.parse(req.url, true);  // url.parse() breaks a URL string into a usable object in its individual parts, like protocol, host, path, query parameters, etc. The second argument (true) tells it to also parse the query string into an object.

    fs.appendFile('log.txt', log, (err) => {  // creating a file log.txt and appending log data to it
        switch (myUrl.pathname) {  // creating conditions based on the path requested by user
            case '/':
                if (req.method === 'GET') {  // condition to check weather req method is GET
                    res.end('Homepage');
                }
                break;

            case '/about':
                const username = myUrl.query.myname;
                res.end(`Hi, ${username}`);
                break;

            case '/signup':
                if (req.method === 'GET') {
                    res.end('This is a signup form');
                } else if (req.method === 'POST') {
                    // DB Query
                    res.end('Success');
                }

            default: res.end('404 Not Found')
                break;
        }
        // res.end('Hello from server again')  // ending the response & sending it to user after appending the log data
    });
});

myServer.listen(8000, () => {  // server.listen(port, hostname, callback);
    console.log('Server started!');
});
// .listen() is a method used to tell the server to start listening for incoming requests. It's used to start the server