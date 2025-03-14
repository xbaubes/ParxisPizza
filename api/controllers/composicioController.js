import { getIngredientsByPizza, addIngredientToPizza } from '../models/composicioModel.js';

const getPizzaIngredients = async (req, res, next) => {
    const { IdPizza } = req.params;
    try {
        const ingredients = await getIngredientsByPizza(IdPizza);
        res.json(ingredients);
    } catch (error) {
        next(error);
    }
};

const addIngredient = async (req, res, next) => {
    const { IdPizza, IdIngredient, Quantitat } = req.body;
    try {
        await addIngredientToPizza(IdPizza, IdIngredient, Quantitat);
        res.status(201).json({ message: "Ingredient afegit a la pizza correctament" });
    } catch (error) {
        next(error);
    }
};

export default {
    getPizzaIngredients,
    addIngredient
};
