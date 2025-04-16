import express, { Express } from 'express';
// import cors from 'cors';
import tasksRouter from './routes/tasks.route';

const app: Express = express();

// app.use(cors());
app.use(express.json());

app.use('/tasks', tasksRouter);

export default app;