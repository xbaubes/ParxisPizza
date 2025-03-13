import sql from 'mssql';

// Obtenir tots els ingredients (amb filtre opcional per nom)
export const getAllIngredients = async (Nom) => {
    let query = 'SELECT * FROM Ingredient';
    if (Nom) {
        query += ` WHERE Nom LIKE '%${Nom}%'`;
    }
    query += ' ORDER BY Nom';

    const result = await sql.query(query);
    return result.recordset;
};

// Afegir un nou ingredient
export const addIngredient = async (Nom) => {
    await sql.query`INSERT INTO Ingredient (Nom) VALUES (${Nom})`;
};
