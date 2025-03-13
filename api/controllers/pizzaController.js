import { getAllPizzas, addPizza } from '../models/pizzaModel.js';

const getPizzas = async (req, res) => {
    const { nom } = req.query;
    try {
        const pizzas = await getAllPizzas(nom);
        res.json(pizzas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createPizza = async (req, res) => {
    const { Nom } = req.body;
    try {
        await addPizza(Nom);
        res.status(201).json({ message: "Pizza creada correctament" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    getPizzas,
    createPizza
};
