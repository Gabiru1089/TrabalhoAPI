import React, { useState, useEffect } from "react";

function UserList({ onSelect, onDetail, refreshCount }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const loadUsers = () => {
    fetch("http://localhost:8800/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setError("");
      })
      .catch((err) => {
        console.error(err);
        setError("Erro ao buscar usuários");
      });
  };

  useEffect(() => {
    loadUsers();
  }, [refreshCount]);

  return (
    <div className="user-list">
      <h2>Lista de Usuários</h2>
      {error && <div className="error">{error}</div>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>CPF</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id_usuarios}>
              <td>{user.id_usuarios}</td>
              <td>{user.nome}</td>
              <td>{user.idade}</td>
              <td>{user.cpf}</td>
              <td>
                <button onClick={() => onSelect(user)}>Selecionar</button>
                <button onClick={() => onDetail(user)}>Mais Detalhes</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;


