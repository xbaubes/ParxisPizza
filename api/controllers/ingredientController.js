import { getAllIngredients, addIngredient } from '../models/ingredientModel.js';

const getIngredients = async (req, res) => {
    const { nom } = req.query;
    try {
        const ingredients = await getAllIngredients(nom);
        res.json(ingredients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createIngredient = async (req, res) => {
    const { Nom } = req.body;
    try {
        await addIngredient(Nom);
        res.status(201).json({ message: "Ingredient creat correctament" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    getIngredients,
    createIngredient
};
