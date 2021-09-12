const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./src/routes");

const app = express();
//definindo a porta que o servidor vai rodar
const port = process.env.PORT || 5000;

// iniciando a conexão com o banco de dados mongoose
mongoose.connect(
  "mongodb://localhost:27017/banco-leads",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useFindAndModify: false
  },
  function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("MongoDB CONECTADO com sucesso!");
    }
  }
);

// para definirmos quais dominios podem ter acesso a API
app.use(cors());
// quando precisamos enviar JSON entre o backend e o frontend colocamos essa linha
app.use(express.json());

// Indicando que as rotas estão no arquivo routes.js
app.use(routes);

// ligando o servidor
app.listen(port, function () {
  console.log(`Server runing on port ${port}`);
});
