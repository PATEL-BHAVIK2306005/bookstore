const express = require('express')
const mongoose = require('mongoose');
const connectionString = "mongodb+srv://Galaxor:6HfUAvf8t8FS2Suh@cluster0.vzltvty.mongodb.net/?retryWrites=true&w=majority"
const app = express()
const port = 3000

mongoose.connect(connectionString).then((ans) => {
  console.log("ConnectedSuccessful")
}).catch((err) => {
  console.log("Error in the Connection")
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
