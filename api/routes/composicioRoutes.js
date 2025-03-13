import express from 'express';
import composicioController from '../controllers/composicioController.js';

const router = express.Router();

router.get('/:IdPizza', composicioController.getPizzaIngredients);
router.post('/', composicioController.addIngredient);

export default router;
