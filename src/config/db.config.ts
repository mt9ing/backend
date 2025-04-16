import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export const dbConnection = async () => {
  return open({
    filename: './tasks.db',
    driver: sqlite3.Database
  })
}