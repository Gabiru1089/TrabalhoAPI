import React, { useState } from "react";
import UserList from "./pages/UserList";
import UserManipulate from "./pages/UserManipulate";
import UserDetail from "./pages/UserDetail";
import UserCreate from "./pages/UserCreate";
import UserEdit from "./pages/UserEdit";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("list");
  const [selectedUser, setSelectedUser] = useState(null);
  const [refreshCount, setRefreshCount] = useState(0);

  // Navegação
  const goToList = () => {
    setSelectedUser(null);
    setScreen("list");
  };

  const goToManipulate = (user) => {
    setSelectedUser(user);
    setScreen("manipulate");
  };

  const goToDetail = (user) => {
    setSelectedUser(user);
    setScreen("detail");
  };

  const goToCreate = () => {
    setSelectedUser(null);
    setScreen("create");
  };

  const goToEdit = (user) => {
    setSelectedUser(user);
    setScreen("edit");
  };

  // Função para exclusão (disponível na página de manipulação)
  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      fetch(`http://localhost:8800/api/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.mensagem || "Usuário excluído com sucesso");
          setRefreshCount((prev) => prev + 1);
          goToList();
        })
        .catch((err) => {
          console.error(err);
          alert("Erro ao excluir usuário");
        });
    }
  };

  // Título dinâmico do cabeçalho
  const getHeaderTitle = () => {
    switch (screen) {
      case "list":
        return "Gerenciamento de Usuários";
      case "manipulate":
        return "Manipular Usuários";
      case "detail":
        return "Detalhes do Usuário";
      case "create":
        return "Cadastrar Usuário";
      case "edit":
        return "Editar Usuário";
      default:
        return "Gerenciamento de Usuários";
    }
  };

  return (
    <div className="App">
      <header>
        <h1>{getHeaderTitle()}</h1>
        {screen === "list" && (
          <nav>
            <button onClick={goToList}>Listagem</button>
            <button onClick={goToCreate}>Cadastrar Usuário</button>
          </nav>
        )}
        {screen !== "list" && (
          <nav>
            <button onClick={goToList}>Voltar à Listagem</button>
          </nav>
        )}
      </header>
      <main>
        {screen === "list" && (
          <UserList
            onSelect={(user) => goToManipulate(user)}
            onDetail={(user) => goToDetail(user)}
            refreshCount={refreshCount}
          />
        )}
        {screen === "manipulate" && selectedUser && (
          <UserManipulate
            user={selectedUser}
            onEdit={() => goToEdit(selectedUser)}
            onDelete={() => handleDelete(selectedUser.id_usuarios)}
          />
        )}
        {screen === "detail" && selectedUser && (
          <UserDetail user={selectedUser} onBack={goToList} />
        )}
        {screen === "create" && (
          <UserCreate onBack={goToList} onSuccess={() => setRefreshCount((prev) => prev + 1)} />
        )}
        {screen === "edit" && selectedUser && (
          <UserEdit
            user={selectedUser}
            onBack={goToList}
            onSuccess={() => setRefreshCount((prev) => prev + 1)}
          />
        )}
      </main>
    </div>
  );
}

export default App;



