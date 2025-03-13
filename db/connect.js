import sql from 'mssql';
import { dbConfig } from './config.js';

export const connectDB = async () => {
    try {
        sql.connect(dbConfig);
        console.log("✅ Connexió a SQL Server establerta!");
    } catch (error) {
        console.error("❌ Error de connexió a SQL Server:", error);
        process.exit(1);  // Atura l'aplicació si la connexió falla
    }
};
