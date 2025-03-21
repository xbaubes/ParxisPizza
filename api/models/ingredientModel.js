import { getPool } from '../../db/connect.js';

// Obtenir tots els ingredients (amb filtre opcional per nom)
export const getAllIngredients = async (Nom) => {
  const pool = getPool();
  let query = 'SELECT * FROM Ingredient';
  const request = pool.request();

  if (Nom) {
    query += ' WHERE Nom LIKE @Nom';
    request.input('Nom', `%${Nom}%`);
  }

  query += ' ORDER BY Nom';
  const result = await request.query(query);
  return result.recordset;
};

// Afegir un nou ingredient
export const addIngredient = async (Nom) => {
  const pool = getPool();
  await pool
    .request()
    .input('Nom', Nom)
    .query('INSERT INTO Ingredient (Nom) VALUES (@Nom)');
};
