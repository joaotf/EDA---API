/* eslint-disable consistent-return */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/admin.json');

const Admin = mongoose.model('Admin');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

module.exports = {
  async register(req, res) {
    const { email } = req.body;

    try {
      if (await Admin.findOne({ email })) { return res.status(400).json({ error: 'Admin already exists' }); }

      const admin = await Admin.create(req.body);

      admin.password = undefined;


      return res.send({
        admin,
        token: generateToken({ id: admin.id }),
      });
    } catch (err) {
      return res.status(400).json({ error: 'Registration failed' });
    }
  },
  async admins(req, res) {
    const admin = await Admin.find();

    return res.json(admin);
  },

  async auth(req, res) {
    try {
      const { email, password } = req.body;
      const admin = await Admin.findOne({ email }).select('+password');
      if (!admin) {
        return res.status(400).json({ error: 'Admin not found' });
      }
      if (!await bcrypt.compare(password, admin.password)) {
        return res.status(400).json({ error: 'Invalid password' });
      }
      admin.password = undefined;

      res.json({
        admin,
        token: generateToken({ id: admin.id }),
      });
    } catch (err) {
      return res.status(400).json({ error: 'Admin authentication failed' });
    }
  },
};
