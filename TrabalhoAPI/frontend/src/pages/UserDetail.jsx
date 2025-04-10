import React from "react";

function UserDetail({ user, onBack }) {
  return (
    <div className="user-detail">
      <h2>Detalhes do Usuário</h2>
      <p>
        <strong>ID:</strong> {user.id_usuarios}
      </p>
      <p>
        <strong>Nome:</strong> {user.nome}
      </p>
      <p>
        <strong>Idade:</strong> {user.idade}
      </p>
      <p>
        <strong>CPF:</strong> {user.cpf}
      </p>
      <button onClick={onBack}>Voltar à Listagem</button>
    </div>
  );
}

export default UserDetail;


