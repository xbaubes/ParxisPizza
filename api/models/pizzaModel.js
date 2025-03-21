import { getPool } from '../../db/connect.js';

// Obtenir totes les pizzes (amb filtre opcional per nom)
export const getAllPizzas = async (Nom) => {
  const pool = getPool();
  let query = 'SELECT * FROM Pizza';
  const request = pool.request();

  if (Nom) {
    query += ' WHERE Nom LIKE @Nom';
    request.input('Nom', `%${Nom}%`);
  }

  query += ' ORDER BY Nom';
  const result = await request.query(query);
  return result.recordset;
};

// Afegir una nova pizza
export const addPizza = async (Nom) => {
  const pool = getPool();
  await pool
    .request()
    .input('Nom', Nom)
    .query('INSERT INTO Pizza (Nom) VALUES (@Nom)');
};
