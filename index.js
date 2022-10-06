const express = require('express')
const mongoose = require('mongoose');
import mongoose from 'mongoose';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(helmet({ contentSecurityPolicy: { reportOnly: true } }));
app.use(logger('dev'));