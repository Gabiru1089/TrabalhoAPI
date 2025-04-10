import React, { useState, useEffect } from "react";

function UserEdit({ user, onBack, onSuccess }) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (user) {
      setNome(user.nome);
      setIdade(user.idade);
      setCpf(user.cpf);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8800/api/users/${user.id_usuarios}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, idade, cpf }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(data.mensagem || "Usuário atualizado com sucesso!");
        setError("");
        onSuccess();
        setTimeout(() => onBack(), 1500);
      })
      .catch((err) => {
        console.error(err);
        setError("Erro ao atualizar usuário");
      });
  };

  return (
    <div className="user-edit">
      <h2>Editar Usuário</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <form onSubmit={handleSubmit} className="form-coluna">
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
          <button type="submit">Salvar Alterações</button>
          <button type="button" onClick={onBack}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserEdit;
