import express from "express";
import { getUsers, createUser, updateUser, deleteUser } from "../Controllers/users.js";

const router = express.Router();

// Validação manual
const validateUserFields = (req, res, next) => {
  const { nome, idade, cpf } = req.body;
  if (!nome || !cpf || idade === undefined) {
    return res.status(400).json({ error: "Os campos 'nome', 'idade' e 'cpf' são obrigatórios." });
  }
  if (isNaN(Number(idade))) {
    return res.status(400).json({ error: "O campo 'idade' deve ser numérico." });
  }
  next();
};

router.get("/", getUsers);
router.post("/", validateUserFields, createUser);
router.put("/:id", validateUserFields, updateUser);
router.delete("/:id", deleteUser);

export default router;
