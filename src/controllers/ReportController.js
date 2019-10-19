const mongoose = require('mongoose')


const Report = mongoose.model('Report')

module.exports = {
    async index(req,res){
        const reports = await Report.find()
        
        return res.json(reports);
    },
    async show(req,res){
        const reports = await Report.findById(req.params.id)
        
        return res.json(reports)
    },
    async update(req,res){
        const reports = await Report.findByIdAndUpdate(req.params.id,req.body,{ new:true })
        
        return res.json(reports)
    },

    async destroy(req,res){
        const reports = await Report.findByIdAndRemove(req.params.id)

        return res.send()
    },

    async store(req,res){
        const reports = await Report.create(req.body);
        
        return res.json(reports)
    },
}