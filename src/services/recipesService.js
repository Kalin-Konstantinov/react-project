import * as request from './requester';


export const createRecepe = (recepeData, userToken) => request.post('/recipes', recepeData, userToken);

export const getRecipesByCategory = (categoryName) => request.get(`/recipes/${categoryName}`);


export const getRecipeById = (recipeId) => request.get(`/recipes/one/${recipeId}`);

export const updateRecipe = (recipeId, recipeData, userToken) => request.put(`/recipes/one/${recipeId}`, recipeData, userToken);