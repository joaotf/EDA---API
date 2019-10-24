const mongoose = require('mongoose')

const Client = mongoose.model('Client')

module.exports = {
    async find_ALL(req,res){
        const clients = await Client.find();
        
        return res.json(clients)
    },
    async find_ONE(req,res){
        const clients = await Client.findById(req.params.id)
        if(clients === null)
            return res.status(400).send({error:"Usuário não encontrado!"})
            
        return res.status(200).json(clients)        
    },

    async register(req,res){
        const { nome } = req.body;
        try{
            if(await Client.findOne({ nome })){
                return res.status(400).send("Cliente está cadastrado!")            
            }else{
                const client = await Client.create(req.body)
                return res.json(client)
            }      
        }
        catch{
            return res.status(400).send({error:"Falha no registro!"});
        }
    },

    async update(req,res){
        const clients = await Client.findByIdAndUpdate(req.params.id, req.body , { new : true })
        
        return res.json(clients)
    },
    async destroy(req,res){
        const clients = await Client.findByIdAndRemove(req.params.id)
        
        return res.status(200).send({sucesso:"Cliente removido com sucesso!"})
    }

}