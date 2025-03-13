import sql from 'mssql';

// Obtenir els ingredients d'una pizza específica
export const getIngredientsByPizza = async (ID_pizza) => {
    const result = await sql.query`
        SELECT c.ID_pizza, p.Nom AS Pizza, c.ID_ingredient, i.Nom AS Ingredient, c.Quantitat
        FROM Composicio c
        JOIN Pizza p ON c.ID_pizza = p.ID_pizza
        JOIN Ingredient i ON c.ID_ingredient = i.ID_ingredient
        WHERE c.ID_pizza = ${ID_pizza}
    `;
    return result.recordset;
};

// Afegir un ingredient a una pizza específica
export const addIngredientToPizza = async (ID_pizza, ID_ingredient, Quantitat) => {
    await sql.query`
        INSERT INTO Composicio (ID_pizza, ID_ingredient, Quantitat)
        VALUES (${ID_pizza}, ${ID_ingredient}, ${Quantitat})
    `;
};
