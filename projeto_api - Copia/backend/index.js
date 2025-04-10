import express from 'express';
import cors from 'cors';
import userRouters from './Routers/users.js';

const app = express();
const port = process.env.PORT || 8800;

app.use(express.json());
app.use(cors());

app.use('/api/users', userRouters);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
