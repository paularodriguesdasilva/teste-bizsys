const Lead = require("../models/leadModel");

// neste arquivo estarão todas as funções da API
module.exports = {
  // função que lista todos os leads
  async index(req, res) {
    const lead = await Lead.find();
    res.json(lead);
  },
  // função que cria um novo lead
  async create(req, res) {
    const { nome_lead, email_lead } = req.body;

    let data = { nome_lead, email_lead };

    let lead = await Lead.create(data);

    return res.status(200).json(lead);
  },
  // função que retorna um determinado lead pelo id
  async details(req, res) {
    const { _id } = req.params;
    const lead = await Lead.findOne({ _id });
    return res.json(lead);
  },
  // função que deleta um lead pelo id
  async delete(req, res) {
    const { _id } = req.params;

    const lead = await Lead.findByIdAndDelete({ _id });

    return res.json(lead);
  },
  // função que atualiza um lead pelo id
  async update(req, res) {
    const { _id, nome_lead, email_lead } = req.body;

    const data = { nome_lead, email_lead };

    const lead = await Lead.findByIdAndUpdate({ _id }, data, { new: true });
    return res.json(lead);
  },
};
