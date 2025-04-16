import app from './app';

import { dbConnection } from './config/db.config';

const PORT = 5000;

(async () => {
  const db = await dbConnection();
  await db.exec(`CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, title TEXT NOT NULL)`);
  console.log("Database connected and table created");  
  app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
})()