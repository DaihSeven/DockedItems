import express from 'express';
import itemRoutes from './src/routes/item.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', itemRoutes);

app.listen(PORT, () => {
    console.log(`Servidor Express rodando na porta ${PORT}`);
});