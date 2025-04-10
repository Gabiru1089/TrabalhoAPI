import React from "react";

function UserManipulate({ user, onEdit, onDelete }) {
  return (
    <div className="user-manipulate">
      <h2>Manipular Usuários</h2>
      <div className="user-info">
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
      </div>
      <div className="manipulation-buttons">
        <button onClick={onEdit}>Editar</button>
        <button onClick={onDelete}>Excluir</button>
      </div>
    </div>
  );
}

export default UserManipulate;

