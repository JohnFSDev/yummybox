const Recipe = require('../models/recipesModel');

// Obtener todas las recetas
const getAllRecipes = async () => {
  try {
    const recipes = await Recipe.find();
    return recipes;
  } catch (error) {
    throw new Error('Error al obtener las recetas');
  }
};

// Obtener una receta por su ID
const getRecipeById = async (id) => {
  try {
    const recipe = await Recipe.findById(id);
    return recipe;
  } catch (error) {
    throw new Error('Error al obtener la receta');
  }
};

module.exports = {
  getAllRecipes,
  getRecipeById
};