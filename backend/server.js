const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

const { errorHandler } = require('./middleware/errorMiddleware');

connectDB();

const app = express();

app.use(express.urlencoded({ extended: true })); // d
app.use(express.json()); // body parser

app.use('/api/goals', require('./routes/goal.routes'));
app.use('/api/users', require('./routes/user.routes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
