import express from 'express';
import sql from 'mssql';

const router = express.Router();

// Obtenir tots els ingredients
router.get('/', async (req, res) => {
    try {
        const result = await sql.query('SELECT * FROM Ingredient');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Afegir un nou ingredient
router.post('/', async (req, res) => {
    const { Nom } = req.body;
    try {
        await sql.query`INSERT INTO Ingredient (Nom) VALUES (${Nom})`;
        res.status(201).json({ message: "Ingredient creat correctament" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
