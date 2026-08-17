import express, { Application } from 'express';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});