const express = require('express');

const routes = express.Router();
const auth = require('./middlewares/auth.js');
const admin = require('./middlewares/auth_admin.js');
const AdminController = require('./controllers/AdminController.js');
const RequestController = require('./controllers/RequestController.js');
const ReportController = require('./controllers/ReportController.js');
const AuthController = require('./controllers/AuthController.js');
const ClientController = require('./controllers/ClientController.js');

// Autenticação
routes.post('/register', AuthController.register);
routes.post('/authenticate', AuthController.auth);

routes.post('/auth_admin', AdminController.auth);

routes.use(auth);
// CRUD -- Pedido
routes.post('/create_request', RequestController.create);
routes.put('/update_request/:id', RequestController.update);
routes.get('/request/:id', RequestController.find_one);
routes.delete('/delete_request/:id', RequestController.destroy);

// Controle do Administrador
routes.use(admin);

routes.get('/users', AuthController.users);

routes.get('/admins', AdminController.admins);
routes.post('/register/admin', AdminController.register);

routes.get('/requests', RequestController.find_all);

routes.get('/clients', ClientController.find_ALL);
routes.get('/show_client/:id', ClientController.find_ONE);

routes.put('/update_client/:id', ClientController.update);
routes.delete('/destroy_client/:id', ClientController.destroy);

// Funções
routes.get('/reports', ReportController.index);
routes.get('/show_report/:id', ReportController.show);
routes.post('/add_report', ReportController.store);
routes.put('/update_report/:id', ReportController.update);
routes.delete('/destroy_report/:id', ReportController.destroy);

module.exports = routes;
