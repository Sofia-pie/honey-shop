const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
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

app.use(
  morgan('common', {
    stream: fs.createWriteStream('./access.log', { flags: 'a' }),
  })
);

const cors = require('cors');
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/user', usersRouter);

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
  res.status(500);
  res.render('error', { error: err });
}

// ERROR HANDLER
app.use(errorHandler);
