const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir')
const porta = 8080;

const app = express();
app.use(express.json())

requireDir('./models')
requireDir('./database')

app.use('/api',require('./routes.js'))

try{
    app.listen(porta)
    console.log(`Servidor funcionando na porta ${porta}`)
}catch{
    console.log("Erro!")

}