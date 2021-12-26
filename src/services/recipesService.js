import * as request from './requester';


export const createRecepe = (recepeData, userToken) => request.post('/recipes', recepeData, userToken);

export const getRecipesByCategory = (categoryName) => request.get(`/recipes/${categoryName}`);


export const getRecipeById = (recipeId) => request.get(`/recipes/one/${recipeId}`);

export const deleteRecipeById = (recipeId, userToken) => request.del(`/recipes/one/${recipeId}`, userToken);

export const updateRecipe = (recipeId, recipeData, userToken) => request.put(`/recipes/one/${recipeId}`, recipeData, userToken);

export const getMyRecpies = (userId, userToken) => request.get(`/recipes/user/${userId}`, userToken);