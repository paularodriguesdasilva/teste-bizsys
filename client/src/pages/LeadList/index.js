import React, { useState, useEffect } from "react";
import api from "../../services/api";

export default function LeadList() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    async function loadLeads() {
      const response = await api.get("/api/leads");
      setLeads(response.data);
    }
    loadLeads();
  }, []);

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
              <button>Atualizar</button>
            </td>
            <td>
              <button>Deletar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
