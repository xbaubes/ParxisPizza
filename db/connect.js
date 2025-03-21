import sql from 'mssql';
import { dbConfig } from './config.js';

let pool; // Connexió compartida

export const connectDB = async () => {
  if (!pool) {
    try {
      pool = await sql.connect(dbConfig);
      console.log("✅ Connexió a SQL Server establerta!");
    } catch (error) {
      console.error("❌ Error connectant a SQL Server:", error.message);
    }
  }
  return pool;
};

export const getPool = () => pool;

export const closeDB = async () => {
  if (pool) {
    await sql.close();
    pool = null;
    console.log("🔌 Connexió a SQL Server tancada.");
  }
};
