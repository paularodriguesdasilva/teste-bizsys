import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./style.css";

export default function LeadList() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    async function loadLeads() {
      const response = await api.get("/api/leads");
      setLeads(response.data);
    }
    loadLeads();
  }, []);

  async function handleDelete(id) {
    if (window.confirm("Deseja realmente excluir esse registro?")) {
      var result = await api.delete("/api/leads/" + id);
      if (result.status === 200) {
        window.location.href = "/leads";
      } else {
        alert("Ocorreu um erro. Tente novamente!");
      }
    }
  }

  return (
    <table>
      <thead>
        <th>Nome</th>
        <th>Email</th>
      </thead>
      <tbody>
        {leads.map((lead) => (
          <tr key={lead._id}>
            <td>{lead.nome_lead}</td>
            <td>{lead.email_lead}</td>
            <td>
              {/* href não funciona */}
              <button href={"/form-atualizar/" + lead._id}>Atualizar</button>
            </td>
            <td>
              <button onClick={() => handleDelete(lead._id)}>Deletar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
