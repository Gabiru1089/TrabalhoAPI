import { db } from "../db.js";

export const getUsers = (req, res) => {
  db.query("SELECT * FROM usuarios", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao buscar usuários" });
    }
    return res.status(200).json(data);
  });
};

export const createUser = (req, res) => {
  const { id_usuarios, nome, idade, cpf } = req.body;
  const q = "INSERT INTO usuarios (id_usuarios, nome, idade, cpf) VALUES (?, ?, ?, ?)";
  db.query(q, [id_usuarios, nome, idade, cpf], (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao criar usuário" });
    }
    // Retornando status 201 e dados do usuário criado
    return res.status(201).json({
      mensagem: "Usuário criado com sucesso!",
      user: { id: data.insertId, nome, idade, cpf }
    });
  });
};

export const updateUser = (req, res) => {
  const { nome, idade, cpf } = req.body;
  const id = req.params.id;
  const q = "UPDATE usuarios SET nome = ?, idade = ?, cpf = ? WHERE id_usuarios = ?";
  db.query(q, [nome, idade, cpf, id], (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao atualizar usuário" });
    }
    // Verifica se algum registro foi afetado, caso não, o usuário não foi encontrado
    if(data.affectedRows === 0){
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    return res.status(200).json({
      mensagem: "Usuário atualizado com sucesso!",
      user: { id, nome, idade, cpf }
    });
  });
};

export const deleteUser = (req, res) => {
  const id = req.params.id;
  const q = "DELETE FROM usuarios WHERE id_usuarios = ?";
  db.query(q, [id], (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao deletar usuário" });
    }
    // Verifica se algum registro foi afetado, caso não, o usuário não foi encontrado
    if(data.affectedRows === 0){
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    return res.status(200).json({ mensagem: "Usuário deletado com sucesso" });
  });
};

