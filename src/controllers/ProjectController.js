const express = require('express')


module.exports = {
    async resposta(req,res){
        res.status(200).send({ok:"Token accepted"})
    }
}