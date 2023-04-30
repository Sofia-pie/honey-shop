const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
var bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://Sofiia:1gfhjkm1@cluster0.zpdxexi.mongodb.net/shop?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Successfully connected to database');
  })
  .catch((error) => {
    console.log('database connection failed. exiting now...');
    console.error(error);
    process.exit(1);
  });

app.use(express.json());
app.use(morgan('tiny'));

const { authRouter } = require('./routers/authRouter');
const { usersRouter } = require('./routers/usersRouter');
const { productsRouter } = require('./routers/productsRouter');
const { blogsRouter } = require('./routers/blogsRouter');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/uploads', express.static('uploads'));

const cors = require('cors');

app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/user', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/blogs', blogsRouter);

const { PORT } = process.env;
const port = process.env.PORT || PORT;

const start = async () => {
  try {
    app.listen(port);
  } catch (err) {
    console.error(`Error on server startup: ${err.message}`);
  }
};

start();

function errorHandler(err, req, res, next) {
  res.status(500).json(err.message);
}

// ERROR HANDLER
app.use(errorHandler);
