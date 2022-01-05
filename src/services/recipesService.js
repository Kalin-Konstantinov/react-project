import * as request from './requester';


export const createRecepe = (recepeData, userToken) => request.post('/recipes', recepeData, userToken);

export const getRecipeById = (recipeId) => request.get(`/recipes/${recipeId}`);

export const deleteRecipeById = (recipeId, userToken) => request.del(`/recipes/${recipeId}`, userToken);

export const updateRecipe = (recipeId, recipeData, userToken) => request.put(`/recipes/${recipeId}`, recipeData, userToken);

export const getMyRecpies = (userId, userToken) => request.get(`/recipes/user/${userId}`, userToken);