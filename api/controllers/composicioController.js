import { getIngredientsByPizza, addIngredientToPizza } from '../models/composicioModel.js';

const getPizzaIngredients = async (req, res) => {
    const { IdPizza } = req.params;
    try {
        const ingredients = await getIngredientsByPizza(IdPizza);
        res.json(ingredients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addIngredient = async (req, res) => {
    const { IdPizza, IdIngredient, Quantitat } = req.body;
    try {
        await addIngredientToPizza(IdPizza, IdIngredient, Quantitat);
        res.status(201).json({ message: "Ingredient afegit a la pizza correctament" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    getPizzaIngredients,
    addIngredient
};
