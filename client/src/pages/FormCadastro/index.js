import React, { useState } from "react";

import api from "../../services/api";

import "./style.css";

export default function FormCadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      nome_lead: nome,
      email_lead: email,
    };
    if (nome !== "" && email !== "") {
      const response = await api.post("/api/leads", data);

      if (response.status === 200) {
        window.location.href = "/leads";
      } else {
        alert("Erro ao cadastrar os dados!");
      }
    } else {
      alert("Por favor, preencha todos os campos");
    }
  }

  return (
    <>
      <h2>Cadastr-se para receber nossas novidades!!!</h2>
      <form>
        <label>Digite seu nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>Digite seu email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Cadastrar</button>
      </form>
    </>
  );
}
