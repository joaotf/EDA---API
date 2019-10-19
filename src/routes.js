const express = require('express')

const routes = express.Router();
const auth = require('./middlewares/auth.js')
const ReportController = require("./controllers/ReportController.js")
const AuthController = require('./controllers/AuthController.js')
const ProjectController = require('./controllers/ProjectController.js')


//Autenticação
routes.post('/register',AuthController.register)
routes.get('/register',AuthController.users)
routes.post('/authenticate',AuthController.auth)

routes.use(auth)
//Funções
routes.get("/reports",ReportController.index);
routes.get("/reports/:id",ReportController.show)
routes.post("/reports",ReportController.store);
routes.put("/reports/:id",ReportController.update)
routes.delete("/reports/:id",ReportController.destroy)

//Middlewares

routes.get("/projects",ProjectController.resposta)

module.exports = routes;