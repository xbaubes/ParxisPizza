import { getAllPizzas, addPizza } from '../models/pizzaModel.js';

const getPizzas = async (req, res, next) => {
    const { nom } = req.query;
    try {
        const pizzas = await getAllPizzas(nom);
        res.json(pizzas);
    } catch (error) {
        next(error);
    }
};

const createPizza = async (req, res, next) => {
    const { Nom } = req.body;
    try {
        await addPizza(Nom);
        res.status(201).json({ message: "Pizza creada correctament" });
    } catch (error) {
        next(error);
    }
};

export default {
    getPizzas,
    createPizza
};
