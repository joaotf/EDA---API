const express = require('express')

const routes = express.Router();
const auth = require('./middlewares/auth.js')
const ReportController = require("./controllers/ReportController.js")
const AuthController = require('./controllers/AuthController.js')
const ProjectController = require('./controllers/ProjectController.js')
const ClientController = require('./controllers/ClientController.js')


//Autenticação
routes.post('/register',AuthController.register)
routes.post('/authenticate',AuthController.auth)

routes.use(auth)
routes.get('/users',AuthController.users)

routes.get("/clients",ClientController.find_ALL);
routes.get("/show_client/:id",ClientController.find_ONE)
routes.post("/add_client",ClientController.register);
routes.put("/update_client/:id",ClientController.update)
routes.delete("/destroy_client/:id",ClientController.destroy)

//Funções
routes.get("/reports",ReportController.index);
routes.get("/show_report/:id",ReportController.show)
routes.post("/add_report",ReportController.store);
routes.put("/update_report/:id",ReportController.update)
routes.delete("/destroy_report/:id",ReportController.destroy)

//Middlewares

routes.get("/projects",ProjectController.resposta)

module.exports = routes;