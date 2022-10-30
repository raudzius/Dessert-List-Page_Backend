const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.hmheqd3.mongodb.net/desserts?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Connected ok');
  })
  .catch((e) => {
    console.log(e);
    console.log('Connection error');
  });

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(4000);
