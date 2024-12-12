const recipesService = require('../services/recipesService');

// Obtener todas las recetas
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await recipesService.getAllRecipes();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las recetas' });
  }
};

// Obtener una receta por su ID
const getRecipeById = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const recipe = await recipesService.getRecipeById(recipeId);

    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ error: 'Receta no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la receta' });
  }
};

module.exports = {
  getAllRecipes,
  getRecipeById
};