import express from 'express';
import pizzaRoutes from './pizzaRoutes.js';
import ingredientRoutes from './ingredientRoute.js';
import composicioRoutes from './composicioRoutes.js';

const router = express.Router();

router.use('/pizzes', pizzaRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/composicions', composicioRoutes);

export default router;
