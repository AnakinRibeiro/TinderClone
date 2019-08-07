const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect(
  'mongodb+srv://eduardo:1q2w3e4r@cluster0-dz7vg.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
