import { Router } from 'express';
import { dbConnection } from '../config/db.config';

const router = Router();

router.get('/', async (_, res) => {
  const db = await dbConnection();
  const tasks = await db.all('SELECT * FROM tasks');
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const db = await dbConnection();
  const { title } = req.body;
  await db.run('INSERT INTO tasks (title) VALUES (?)', title);
  res.status(201).json({ message: 'Task created' });
});

router.delete('/:id', async (req, res) => {
  const db = await dbConnection();
  await db.run('DELETE FROM tasks WHERE id = ?', req.params.id);
  res.status(204).end();
});

export default router;
