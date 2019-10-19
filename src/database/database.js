const key = require('./key.json')
const mongoose = require('mongoose')

mongoose.connect(key,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
