const express = require("express");

const routes = express.Router();

const Lead = require("./controllers/leadsController");

// rota raiz
routes.get("/", Lead.index);

//Rotas de Leads
routes.post("/api/leads", Lead.create);
routes.get("/api/leads", Lead.index);
routes.get("/api/leads.details/:_id", Lead.details);
routes.delete("/api/leads/:_id", Lead.delete);
routes.put("/api/leads", Lead.update);

module.exports = routes;
