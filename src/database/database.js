const key = require('./key.json')
const mongoose = require('mongoose')

mongoose.connect(key,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
mongoose.Promise = global.Promise;


module.exports = mongoose;
