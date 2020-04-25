const mongoose = require('mongoose');

const RequestSchema = mongoose.Schema({
    nome:{
        type:String,
        unique:true,
        required:true
    },
    endereco:{
        type:String,
        required:true
    },
    bairro:{
        type:String,
        required:true
    },
    lugar:{
        type:String,
        required:true
    },
    numero:{
        type:String,
        required:true
    },
    payment:{
        type:String,
        required: true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

mongoose.model("Request",RequestSchema)