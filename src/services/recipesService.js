import * as request from './requester';


export const createRecepe = (recepeData, userToken) => request.post('/recipes', recepeData, userToken);

export const getRecipesByCategory = (categoryName) => request.get(`/recipes/${categoryName}`);
