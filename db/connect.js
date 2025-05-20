import sql from 'mssql';
import { dbConfig } from './config.js';

let pool; // Connexió compartida (Singleton)

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

export const getPool = () => pool; // Què passa si la connexió a la base de dades no s'ha establert o es perd ???

export const closeDB = async () => {
  if (pool) {
    await sql.close();
    pool = null;
    console.log("🔌 Connexió a SQL Server tancada.");
  }
};
