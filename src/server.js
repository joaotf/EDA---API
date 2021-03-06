/* eslint-disable import/no-unresolved */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const requireDir = require('require-dir');

const porta = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

requireDir('./models');
requireDir('./database');

app.use('/api', require('./routes.js'));

try {
  app.listen(porta);
} catch (err) {
  console.log(err);
}
 