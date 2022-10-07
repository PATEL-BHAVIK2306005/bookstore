const express = require('express')
// TAL NOOBY NOB
var config = require('./config');
const mongoose = require('mongoose');

const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const {BookController} = require('./src/controllers')
app.get('/books/:name', (req, res) => {BookController.find(req, res)});
app.get('/books/create', (req, res) => {BookController.create(req, res)});
app.get('/books', (req, res) => {BookController.list(req, res)});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

connect();


function connect() {
    console.log(config.db);
    mongoose.connection
      .on('error', console.log)
      .on('disconnected', connect)
    return mongoose.connect(config.db, {
      keepAlive: true,
      dbName: "test2",
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }