const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesControllers');

// Obtener todas las recetas
router.get('/', recipesController.getAllRecipes);

// Obtener una receta por su ID
router.get('/:id', recipesController.getRecipeById);

module.exports = router;