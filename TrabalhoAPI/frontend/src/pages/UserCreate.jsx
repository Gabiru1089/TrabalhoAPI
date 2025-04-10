import React, { useState } from "react";

function UserCreate({ onBack, onSuccess }) {
  const [id_usuarios, setIdUsuarios] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = { id_usuarios, nome, idade, cpf };
    fetch("http://localhost:8800/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(data.mensagem || "Usuário criado com sucesso!");
        setError("");
        onSuccess();
        setTimeout(() => onBack(), 1500);
      })
      .catch((err) => {
        console.error(err);
        setError("Erro ao criar usuário");
      });
  };

  return (
    <div className="user-create">
      <h2>Cadastrar Usuário</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <form onSubmit={handleSubmit} className="form-coluna">
        <input
          type="number"
          placeholder="ID"
          value={id_usuarios}
          onChange={(e) => setIdUsuarios(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />
        <div className="form-buttons">
          <button type="submit">Cadastrar</button>
          <button type="button" onClick={onBack}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserCreate;
