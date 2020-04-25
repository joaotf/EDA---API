const mongoose = require('mongoose');

const Request = mongoose.model('Request');

module.exports = {
  async find_all(req, res) {
    const requests = await Request.find();

    return res.json(requests);
  },

  async find_one(req, res) {
    try {
      const request = await Request.findById(req.params.id);
      return res.status(200).json(request);
    } catch (Error) {
      return res.status(400).send({ error: 'Pedido não encontrado!' });
    }
  },

  async create(req, res) {
    const { id } = req.body;
    try {
      if (await Request.findOne({ id })) {
        return res.status(400).send('Pedido está cadastrado!');
      }
      const request = await Request.create(req.body);
      return res.json(request);
    } catch (Error) {
      return res.status(400).send({ error: 'Falha no registro!' });
    }
  },

  async update(req, res) {
    const requests = await Request.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(requests);
  },

  async destroy(req, res) {
    await Request.findByIdAndRemove(req.params.id);

    return res.status(200).send({ sucesso: 'Pedido cancelado com sucesso!' });
  },

};
