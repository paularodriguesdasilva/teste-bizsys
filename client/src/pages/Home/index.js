import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to="/form">
        <button>Cadastrar</button>
      </Link>

      <Link to="/leads">
        <button>Listar leads cadastrados</button>
      </Link>
    </>
  );
}
