const express = require('express');  // importing express
const { connectMongoDb } = require('./connection');  // importing MongoDb connection file

const { logReqRes } = require('./middlewares/middleware');  // importing middleware file containing fs module for creation of log file
const userRouter = require('./routes/userRouter');  // importing routes file

const app = express();  // creating express app (server)
const PORT = 8000;  // Port number on which the server will be listened

// connection
connectMongoDb('mongodb://127.0.0.1:27017/bhavay_DB_1')  // connecting MongoDB
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('Error', err))

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes('log.txt'));  // using logReqRes func to create log file


// Routes
app.use('/api/users', userRouter);  // Mounting routers under specific paths | app.use('/some-path', middlewareOrRouter); 

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));