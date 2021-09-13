import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function Home() {
  return (
    <>
      <Link to="/form-cadastrar">
        <button>Cadastrar</button>
      </Link>

      <Link to="/leads">
        <button>Listar leads cadastrados</button>
      </Link>
    </>
  );
}
