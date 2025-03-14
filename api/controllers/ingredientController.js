import { getAllIngredients, addIngredient } from '../models/ingredientModel.js';

const getIngredients = async (req, res, next) => {
    const { nom } = req.query;
    try {
        const ingredients = await getAllIngredients(nom);
        res.json(ingredients);
    } catch (error) {
        next(error);
    }
};

const createIngredient = async (req, res, next) => {
    const { Nom } = req.body;
    try {
        await addIngredient(Nom);
        res.status(201).json({ message: "Ingredient creat correctament" });
    } catch (error) {
        next(error);
    }
};

export default {
    getIngredients,
    createIngredient
};
