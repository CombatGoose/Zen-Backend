require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const cookieParser = require('cookie-parser');
const port = 3500;

// Connect to MongoDB
connectDB();

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

app.use('/createProduct', require('./routes/createProduct'));
app.use('/getAllProducts', require('./routes/getAllProducts'));
app.use('/getProduct', require('./routes/getProduct'));

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Server running on port ${port}`));
});