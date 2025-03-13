import express from 'express';
import pizzaController from '../controllers/pizzaController.js';

const router = express.Router();

router.get('/', pizzaController.getPizzas);
router.post('/', pizzaController.createPizza);

export default router;
