import express from 'express';
import sql from 'mssql';

const router = express.Router();

// Obtenir els ingredients d'una pizza específica
router.get('/:ID_pizza', async (req, res) => {
    const { ID_pizza } = req.params;
    try {
        const result = await sql.query`
            SELECT c.ID_pizza, p.Nom AS Pizza, c.ID_ingredient, i.Nom AS Ingredient, c.Quantitat
            FROM Composicio c
            JOIN Pizza p ON c.ID_pizza = p.ID_pizza
            JOIN Ingredient i ON c.ID_ingredient = i.ID_ingredient
            WHERE c.ID_pizza = ${ID_pizza}
        `;
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Afegir un ingredient a una pizza específica
router.post('/', async (req, res) => {
    const { ID_pizza, ID_ingredient, Quantitat } = req.body;
    try {
        await sql.query`
            INSERT INTO Composicio (ID_pizza, ID_ingredient, Quantitat)
            VALUES (${ID_pizza}, ${ID_ingredient}, ${Quantitat})
        `;
        res.status(201).json({ message: "Ingredient afegit a la pizza correctament" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
