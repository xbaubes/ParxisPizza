import express from 'express';
import cors from 'cors';
import { connectDB } from '../db/connect.js';
import routes from './routes/routes.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());
app.use(cors());

await connectDB();

app.use('/api/v1', routes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
