import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

import "./style.css";

export default function FormAtualizar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const { idLead } = useParams();

  useEffect(() => {
    async function getLead() {
      var response = await api.get("/api/leads.details/" + idLead);

      setNome(response.data.nome_lead);
      setEmail(response.data.email_lead);
    }
    getLead();
  }, [idLead]);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      nome_lead: nome,
      email_lead: email,
      _id: idLead,
    };
    if (nome !== "" && email !== "") {
      const response = await api.put("/api/leads", data);

      if (response.status === 200) {
        window.location.href = "/leads";
      } else {
        alert("Erro ao atualizar os dados!");
      }
    } else {
      alert("Por favor, preencha todos os campos");
    }
  }

  return (
    <>
      <h2>Atualização de cadastro</h2>
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
        <button onClick={handleSubmit}>Atualizar</button>
      </form>
    </>
  );
}
