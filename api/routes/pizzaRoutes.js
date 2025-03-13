import express from 'express';
import sql from 'mssql';

const router = express.Router();

// Obtenir totes les pizzes
router.get('/', async (req, res) => {
    try {
        const result = await sql.query('SELECT * FROM Pizza');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Afegir una nova pizza
router.post('/', async (req, res) => {
    const { Nom } = req.body;
    try {
        await sql.query`INSERT INTO Pizza (Nom) VALUES (${Nom})`;
        res.status(201).json({ message: "Pizza creada correctament" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
