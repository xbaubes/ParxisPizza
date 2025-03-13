import sql from 'mssql';

// Obtenir totes les pizzes (amb filtre opcional per nom)
export const getAllPizzas = async (Nom) => {
    let query = 'SELECT * FROM Pizza';
    if (Nom) {
        query += ` WHERE Nom LIKE '%${Nom}%'`;
    }
    query += ' ORDER BY Nom';

    const result = await sql.query(query);
    return result.recordset;
};

// Afegir una nova pizza
export const addPizza = async (Nom) => {
    await sql.query`INSERT INTO Pizza (Nom) VALUES (${Nom})`;
};
