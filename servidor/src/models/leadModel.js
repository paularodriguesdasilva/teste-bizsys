const mongoose = require("mongoose");
// modelo de criação dos dados na coleção do banco de dados
const DataSchema = new mongoose.Schema(
  {
    nome_lead: String,
    email_lead: String,
  },
  {
    timestamps: true,
  }
);
const leads = mongoose.model("Leads", DataSchema);
module.exports = leads;
