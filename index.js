const express = require('express')
// TAL NOOBY NOB
var config = require('./config');
const mongoose = require('mongoose');

const app = express()
const bodyparser = require('body-parser')
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Book
const {BookController} = require('./src/controllers')
app.get('/books/:name', (req, res) => {BookController.find(req, res)});
app.post('/books/create', (req, res) => {BookController.create(req, res)});
app.get('/books/list', (req, res) => {BookController.list(req, res)});
app.get('/books/delete', (req, res) => {BookController.delete(req, res)});
app.get('/books/update', (req, res) => {BookController.update(req, res)});

//Author
const {AuthorController} = require('./src/controllers')
app.get('/author/:name', (req, res) => {AuthorController.find(req, res)});
app.get('/author/create', (req, res) => {AuthorController.create(req, res)});
app.get('/author/list', (req, res) => {AuthorController.list(req, res)});
app.get('/author/delete', (req, res) => {AuthorController.delete(req, res)});
app.get('/author/update', (req, res) => {AuthorController.update(req, res)});

//Category
const {CategoryController} = require('./src/controllers')
app.get('/category/:name', (req, res) => {CategoryController.find(req, res)});
app.get('/category/create', (req, res) => {CategoryController.create(req, res)});
app.get('/category/list', (req, res) => {CategoryController.list(req, res)});
app.get('/category/delete', (req, res) => {CategoryController.delete(req, res)});
app.get('/category/update', (req, res) => {CategoryController.update(req, res)});

//User
const {UserController} = require('./src/controllers')
app.get('/user/:name', (req, res) => {UserController.find(req, res)});
app.get('/user/create', (req, res) => {UserController.create(req, res)});
app.get('/user/list', (req, res) => {UserController.list(req, res)});
app.get('/user/delete', (req, res) => {UserController.delete(req, res)});
app.get('/user/update', (req, res) => {UserController.update(req, res)});

//Warehouse
const {WarehouseController} = require('./src/controllers')
app.get('/warehouse/list', (req, res) => {WarehouseController.list(req, res)});
app.get('/warehouse/:address', (req, res) => {WarehouseController.find(req, res)});
app.post('/warehouse/create', (req, res) => {WarehouseController.create(req, res)});
app.post('/warehouse/delete', (req, res) => {WarehouseController.delete(req, res)});
app.post('/warehouse/update', (req, res) => {WarehouseController.update(req, res)});

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