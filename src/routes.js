const express = require('express')

const routes = express.Router();
const ReportController = require("./controllers/ReportController.js")

//Rotas
routes.get("/reports",ReportController.index);
routes.get("/reports/:id",ReportController.show)
routes.post("/reports",ReportController.store);
routes.put("/reports/:id",ReportController.update)
routes.delete("/reports/:id",ReportController.destroy)

module.exports = routes;